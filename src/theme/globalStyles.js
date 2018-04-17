import { injectGlobal } from 'styled-components';

injectGlobal([
	`
		@import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

		* {
			box-sizing: border-box;
		}

		html {
			font-size: 62.5%;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		body {
			padding: 0;
			margin: 0;
			font-family: 'Montserrat', sans-serif;
			font-size: 1.6rem;
			font-weight: 500;
			background-color: #ececee;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
		}

		img {
			display: block;
			height: auto;
			max-width: 100%;
		}

		button {
			-webkit-appearance: none;
			-moz-appearance:    none;
			appearance:         none;
			border: none;
			font-size: inherit;
			padding: 0;
		}

		.container {
			max-width: 128.0rem;
			width: 100%;
			margin: 0 auto;
			padding: 0 1.6rem;
		}
	`,
]);

export const theme = {
	darkBlue: '#383e51',
	grey: '#ececee',
	lightGrey: '#f8f8f8',
	green: '#54b455',
	red: '#de331d',
};