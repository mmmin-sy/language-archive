import { ButtonStyle } from './Button.styles.ts';

interface Props {
	text: string;
	onClick?: () => void
	type?: string;
}
const Button = ({ text, onClick, type }: Props) => {
	return (
		<ButtonStyle onClick={onClick} type={type}>{text}</ButtonStyle>
	)
}

export default Button;