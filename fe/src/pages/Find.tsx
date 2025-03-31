/** @jsxImportSource @emotion/react */
import {useState} from "react";
import Input from "../components/Input/Input.tsx";
import Button from "../components/Button/Button.tsx";
import {Data} from "../types/data.ts";
import {useDataQuery} from "../hooks/queries.ts";
import List from "../components/List/List.tsx";
import AddData from "../components/AddData/AddData.tsx";
import {ContentStyle} from "../components/Layout/Layout.styles.ts";

const Find = () => {
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
			<AddData />
			Find
			<div>
				<Input
					onInput={(value: string) => setSearchInput(value)}
				/>
				<Button onClick={() => onFind()} text={'Find'}/>
			</div>

			{data && (
				<List data={data} />
			)}

			{/*{data && data.map((item, id) => <div key={id}>{item.category},{item.example}, {item.translate}</div>)}*/}
		</ContentStyle>
	)
}

export default Find;