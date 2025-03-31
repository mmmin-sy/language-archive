import {FooterStyle, HeaderStyle, LayoutStyle} from "./Layout.styles.ts";

interface Props {
	children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<LayoutStyle>
			<HeaderStyle>header</HeaderStyle>
			<main>{children}</main>
			<FooterStyle>footer</FooterStyle>
		</LayoutStyle>
	)
}

export default Layout;