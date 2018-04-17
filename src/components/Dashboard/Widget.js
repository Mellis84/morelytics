/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Widget extends Component {
	state = {
		toplineTotals: {},
		toplineAvgItems: {},
		databoxBottom: {},
		databoxTop: {},
	}

	async componentDidMount() {
		try {
			const { data } = this.props;
			const result = await fetch(`https://private-eeee5-nn4mjstest.apiary-mock.com/${data}`);
			const widgetData = await result.json();

			this.setState({
				toplineTotals: widgetData.totals,
				toplineAvgItems: widgetData.avgItems,
				databoxBottom: widgetData.bottom,
				databoxTop: widgetData.top,
			});
		} catch(e) {
			console.log(e);
		}
	}

	render() {
		const {
			toplineTotals,
			toplineAvgItems,
			databoxBottom,
			databoxTop,
		} = this.state;
		const { title, type } = this.props;

		if (type === 'topline') {
			return (
				<WidgetWrapper>
					<ToplineWidget>
						<header className={`widget__header ${toplineTotals.status === 'negative' ? 'widget__header--dec' : 'widget__header--inc'}`}>
							<h3>{title}</h3>
							<div className="values">
								<span>{toplineTotals.change}</span>
								{toplineTotals.comp &&
									<img
										className="carot"
										src={require(`./${toplineTotals.comp}-double.svg`)} 
										alt={toplineTotals.comp} 
									/>
								}
							</div>
						</header>
						<div className={`widget__content ${toplineTotals.status === 'negative' ? 'widget__content--dec' : 'widget__content--inc'}`}>
							<span className="value">{toplineTotals.value}</span>
							<span className="value-was">{toplineTotals.valueWas}</span>
						</div>
						<footer className="widget__footer">
							<h4 className="label">
								{toplineAvgItems.label}
								{toplineAvgItems.comp &&
									<img
										className="carot"
										src={require(`./${toplineTotals.comp}.svg`)} 
										alt={toplineAvgItems.comp} 
									/>
								}
							</h4>
							<div className="values">
								<span className="values__value">{toplineAvgItems.value}</span>
								<span className="values__was">{toplineAvgItems.valueWas}</span>
							</div>
						</footer>
					</ToplineWidget>
				</WidgetWrapper>
			);
		}
		return (
			<WidgetWrapper>
				<DataboxWidget>
					<header className="widget__header">
						<h3>{title}</h3>
					</header>
					<div className="widget__content">
						<div>
							<div className="widget__content__details">
								{ databoxTop.title && <span className="title">{databoxTop.title}</span>}
								<span className="value">
									{databoxTop.value}
									{databoxTop.comp &&
										<img
											className="carot"
											src={require(`./${databoxTop.comp}.svg`)} 
											alt={databoxTop.comp} 
										/>
									}
								</span>
								<span className="value-details">
									{databoxTop.details}
								</span>
							</div>
							{databoxTop.imageURL &&
								<img
									className="widget__content__icon"
									src={databoxTop.imageURL} 
									alt={databoxTop.title} 
								/>
							}
						</div>
					</div>
					<footer className="widget__footer">
						<h4 className="label">{databoxBottom.title}</h4>
						<div className="values">
							<span className="values__value">
								{databoxBottom.value}
								{databoxBottom.comp &&
									<img
										className="carot"
										src={require(`./${databoxBottom.comp}.svg`)} 
										alt={databoxBottom.comp} 
									/>
								}
							</span>
							<span className="values__details">
								{databoxBottom.details}
							</span>
						</div>
					</footer>
				</DataboxWidget>
			</WidgetWrapper>
		);
	}
}

Widget.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string.isRequired,
};

Widget.defaultProps = {
	title: 'Widget Title',
};

const WidgetWrapper = styled.div`
	color: ${props => props.theme.darkBlue};
	background-color: white;
	width: 100%;
	margin: 2.5rem 0 0;
	@media (min-width: 580px) {
		width: 47%;
	}
	@media (min-width: 1040px) {
		width: 30%;
	}

	> div {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	
	.widget__footer,
	.widget__header,
	.widget__content {
		display: flex;
		flex-wrap: wrap;
		padding: 1.6rem 8%;
	}

	.widget__header,
	.widget__footer {
		min-height: 10rem;
	}

	.widget__header {
		align-items: center;

		.values,
		h3 {
			font-size: 2.6rem;
			font-weight: 500;
		}

		.values {
			display: flex;
			align-items: center;

			img {
				margin-left: 0.75rem;
				width: 2rem;
			}
		}
	}

	.widget__content {
		flex-direction: column;
		align-items: center;
		flex: 1;
		min-height: 15rem;

		.value {
			font-size: 3.9rem;
			font-weight: 800;
			margin: 1rem 0 0.65rem;
		}
		
		.value-details,
		.value-was {
			font-size: 1.4rem;
		}
	}

	.widget__footer {
		flex-direction: column;
		justify-content: center;
		background-color: ${props => props.theme.lightGrey};

		.label {
			font-weight: 500;
			margin-bottom: 0.5rem;
		}

		.values__value {
			font-weight: 800;
			font-size: 2rem;
		}
	}

	.carot {
		display: inline-block;
		margin-left: 0.75rem;
		width: 2rem;
	}
`;

const ToplineWidget = styled.div`
	.widget__header {
		justify-content: space-around;
		border-bottom: 2px solid;
		border-color: ${props => props.theme.darkBlue};

		&.widget__header--inc {
			border-color: ${props => props.theme.green};
		}

		&.widget__header--dec {
			border-color: ${props => props.theme.red};
		}
	}

	.widget__content {
		&.widget__content--inc {
			.value {
				color: ${props => props.theme.green};
			}
		}

		&.widget__content--dec {
			.value {
				color: ${props => props.theme.red};
			}
		}
	}

	.widget__footer {
		align-items: center;

		.label {
			display: flex;
			align-items: center;
		}

		.values__details,
		.values__value,
		.values__was {
			margin: 0 0.25rem;
		}
	}
	
`;

const DataboxWidget = styled.div`
	.widget__content {
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-around;

		> div {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			align-content: center;
		}

		.widget__content__details {
			.title {
				font-size: 1.4rem;
			}

			.value {
				display: flex;
				align-items: center;
			}

			span {
				display: block;
			}	
		}

		.widget__content__icon {
			height: 8rem;
			width: 10rem;
			object-fit: cover;
		}
	}

	.widget__footer {
		.values__value {
			display: flex;
    		align-items: center;
			margin-bottom: 0.5rem;
		}

		span {
			display: block;
		}
	}
`;
