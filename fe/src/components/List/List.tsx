import {Data} from "../../types/data.ts";

interface Props {
	data: Data[];
}
const List = ({ data }: Props) => {
	return (
		data.map((item, id) => <div key={id}>{item.category},{item.example}, {item.translate}</div>)
	)
}

export default List;