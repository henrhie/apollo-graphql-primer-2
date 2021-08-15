import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from './AuthForm';
import { graphql } from '@apollo/client/react/hoc';
import mutation from '../mutations/signup';
import query from '../queries/currentUser';

const onSignup = (props, setErr) => {
	return ({ email, password }) => {
		props
			.mutate({
				variables: { email, password },
				refetchQueries: [{ query }],
			})
			.catch((res) => {
				const errors = res.graphQLErrors.map((err) => err.message);
				setErr(errors);
			});
	};
};

const SignupForm = (props) => {
	const history = useHistory();
	React.useEffect(() => {
		if (props.data.user) history.push('/dashboard');
	}, [props.data.user]);

	const [err, setErr] = React.useState([]);
	return (
		<div>
			<h3>Sign up</h3>
			<AuthForm onSubmit={onSignup(props, setErr)} errors={err} />
		</div>
	);
};

export default graphql(query)(graphql(mutation)(SignupForm));
