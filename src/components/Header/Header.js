import React from 'react';
import styled from 'styled-components';
import logo from './morelytics_logo.svg';

// Components
import FilterBar from './FilterBar';

const Header = ({ siteTitle }) => (
	<HeaderWrapper>
		<div>
			<div className="hamburger">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<img className="logo" src={logo} alt={siteTitle} />
		</div>
		<FilterBar />
	</HeaderWrapper>
);


Header.propTypes = {

};

export default Header;

const HeaderWrapper = styled.header`
	background-color: ${props => props.theme.darkBlue};

	> div {
		&:first-child {
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: center;
			height: 5rem;
		}
	}

	.logo {
		max-width: 15rem;
	}

	.hamburger {
		position: absolute;
		left: 0;
		margin-left: 1.6rem;
		cursor: pointer;
		
		span {
			display: block;
			height: 2px;
			width: 2.5rem;
			border-radius: 1rem;
			background-color: white;

			&:not(:last-child) {
				margin-bottom: 0.5rem;
			}
		}
	}
`;
