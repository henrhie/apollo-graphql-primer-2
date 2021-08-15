import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Route, HashRouter } from 'react-router-dom';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import signup from './mutations/signup';
import Dashboard from './components/Dashboard';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache({
		typePolicies: {
			UserType: {
				keyFields: ['id'],
			},
		},
	}),
});

const Login = () => {
	return (
		<App>
			<LoginForm />
		</App>
	);
};

const Signup = () => {
	return (
		<App>
			<SignupForm />
		</App>
	);
};

const DashBoard = () => {
	return (
		<App>
			<Dashboard />
		</App>
	);
};

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<HashRouter>
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/dashboard' component={DashBoard} />
			</HashRouter>
		</ApolloProvider>
	);
};

ReactDOM.render(<Root />, document.querySelector('#root'));
