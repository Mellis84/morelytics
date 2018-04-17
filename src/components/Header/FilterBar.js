import styled from 'styled-components';

import React from 'react';

const FilterBar = () => (
	<Filters>
		<div className="container">
			<ul>
				<li>
					<button>Select App</button>
				</li>
				<li>
					<span>Compare</span>
				</li>
				<li>
					<button>This Week</button>
				</li>
				<li>
					<span>Against</span>
				</li>
				<li>
					<button>Last Week</button>
				</li>
				<li>
					<span>Within</span>
				</li>
				<li>
					<button>Filter</button>
				</li>
				<li>
					<button className="filter__reset">Reset</button>
				</li>
			</ul>
		</div>
	</Filters>
);

export default FilterBar;

const Filters = styled.div`
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.darkBlue};
	background-color: white;

	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			align-self: center;

			&:nth-child(odd) {
				min-width: 30%;
				@media (min-width: 680px) {
					min-width: 15%;
				}
			}

			&:not(:last-child) {
				button {
					font-weight: 700;
					padding: 1.5rem 0;
					border-bottom: 3px solid ${props => props.theme.darkBlue};
				}
			}

			button {
				cursor: pointer;
			}

			button,
			span {
				font-size: 1.4rem;
				display: block;
				width: 100%;
				height: 100%;
				@media (min-width: 1080px) {
					font-size: 1.6rem;
				}
			}

			.filter__reset {
				text-transform: uppercase;
			}
		}
	}
`;
