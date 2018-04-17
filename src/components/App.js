import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/globalStyles';

// Components
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';


const App = () => (
	<ThemeProvider theme={theme}>
		<div className="App">
			<Header siteTitle="Morelytics" />
			<Dashboard />
		</div>
	</ThemeProvider>
);

export default App;
