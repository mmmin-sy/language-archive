import {useState} from "react";
import Input from "../components/Input/Input.tsx";
import Button from "../components/Button/Button.tsx";
import {Data} from "../types/data.ts";
import {useDataQuery} from "../hooks/queries.ts";
import List from "../components/Archive/List.tsx";
import Add from "../components/Archive/Add.tsx";
import {ContentStyle} from "../components/Layout/Layout.styles.ts";
import {SearchStyle} from "../components/Archive/Archive.styles.ts";

const Archive = () => {
	const [searchInput, setSearchInput] = useState<string>('');
	const [search, setSearch] = useState<string>('');

	const { data, error, isLoading, refetch } = useDataQuery<Data[]>(search);

	const onFind = () => {
		setSearch(searchInput);
		refetch();
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<ContentStyle>
			<Add refetch={refetch} />

			<SearchStyle>
				<Input
					onInput={(value: string) => setSearchInput(value)}
				/>
				<Button onClick={() => onFind()} text={'Search'}/>
			</SearchStyle>

			{data ? (
				<List data={data} />
			) : <div>No Data</div>}

		</ContentStyle>
	)
}

export default Archive;