import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { Link } from 'react-router-dom';
import query from '../queries/currentUser';
import mutation from '../mutations/logout';

const onLogoutClick = ({ mutate }) => {
	return mutate({
		refetchQueries: [{ query }],
	});
};

const renderButtons = (props) => {
	if (props.data.loading) return <div>loading...</div>;
	if (props.data.user) {
		return (
			<li>
				<a onClick={() => onLogoutClick(props)}>Logout</a>
			</li>
		);
	}
	return (
		<div>
			<li>
				<Link to='/signup'>Signup</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</div>
	);
};

const Header = (props) => {
	return (
		<nav>
			<Link className='brand-logo left' to='/'>
				Home
			</Link>
			<div className='nav-wrapper'>
				<ul className='right'>{renderButtons(props)}</ul>
			</div>
		</nav>
	);
};

export default graphql(mutation)(graphql(query)(Header));
