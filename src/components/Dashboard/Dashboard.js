/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Widget from './Widget';

export default class Dashboard extends Component {
	state = {
		dashboardWidgets: [],
	}

	async componentDidMount() {
		try {
			const result = await fetch('https://private-eeee5-nn4mjstest.apiary-mock.com/dashboard');
			const dashboardWidgets = await result.json();

			this.setState({
				dashboardWidgets: dashboardWidgets.items,
			});
		} catch (e) {
			console.log(e);
		}
	}

	getWidget(type) {
		const { dashboardWidgets } = this.state;

		return dashboardWidgets.filter((widget) => widget.type === type);
	}

	render() {
		const { dashboardWidgets } = this.state;
		const sortedWidgets = [...this.getWidget('topline'), ...this.getWidget('databox')];
		return (
			<DashboardWrapper>
				{sortedWidgets.map(widget => (
					<Widget
						key={widget.title} 
						type={widget.type} 
						data={widget.data}
						title={widget.title}
					/>
				))}
			</DashboardWrapper>
		);
	}
}

const DashboardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	max-width: 128.0rem;
	width: 100%;
	margin: 0 auto;
	margin-bottom: 10vh;
	padding: 0 1.6rem;

	::after {
		content: '';
		display: block;
		margin-left: 30%;
	}
`;
