import { ButtonStyle } from './Button.styles.ts';

interface Props {
	text: string;
	onClick: () => void;
}
const Button = ({ text, onClick }: Props) => {
	return (
		<ButtonStyle onClick={onClick}>{text}</ButtonStyle>
	)
}

export default Button;