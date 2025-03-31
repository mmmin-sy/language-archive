import {Data} from "../../types/data.ts";
import {ListCell, ListRow} from "./Archive.styles.ts";

interface Props {
	data: Data[];
}
const List = ({ data }: Props) => {
	return (
		<>
			<ListRow>
				<ListCell isBold={true}>Category</ListCell>
				<ListCell isBold={true}>example</ListCell>
				<ListCell isBold={true}>translate</ListCell>
				<ListCell isBold={true}>comment</ListCell>
			</ListRow>
			{
				data.map((item, id) => (
					<ListRow key={id}>
						<ListCell>{item.category}</ListCell>
						<ListCell>{item.example}</ListCell>
						<ListCell>{item.translate}</ListCell>
						<ListCell>{item.comment}</ListCell>
					</ListRow>
				))
			}
		</>
	)
}

export default List;