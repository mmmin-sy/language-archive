import { css } from '@emotion/react';

export const globalStyles = css`
	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
	}

	body {
			font-family: Arial, sans-serif;
			background-color: #f4f4f4;
			color: #333;
	}

	h1 {
			font-size: 2rem;
			color: darkslategray;
	}

	button {
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: #1a1a1a;
		cursor: pointer;
		transition: border-color 0.25s;
`