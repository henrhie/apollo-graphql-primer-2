import { graphql } from '@apollo/client/react/hoc';
import React from 'react';
import { useHistory } from 'react-router-dom';
import query from '../queries/currentUser';

export default (WrappedComponent) => {
	function RequireAuth(props) {
		const history = useHistory();
		React.useEffect(() => {
			if (!props.data.loading && !props.data.user) {
				history.push('/login');
			}
		});
		return <WrappedComponent {...props} />;
	}
	return graphql(query)(RequireAuth);
};
