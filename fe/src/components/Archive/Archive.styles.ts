import styled from "@emotion/styled";

interface ListCellProps {
	isBold?: boolean;
}

export const AddStyle = styled.div`
 	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 3rem;
`
export const SearchStyle = styled.div`
 	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 3rem;
`

export const ListRow = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	border-bottom: 1px solid #c8c8c8;
	background-color: white;
`

export const ListCell = styled.div<ListCellProps>`
	padding: 0.5rem;
	font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
`