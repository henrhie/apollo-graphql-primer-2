import React from 'react';

const AuthForm = ({ onSubmit, errors }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	return (
		<div className='row'>
			<form className='col s6'>
				<div className='input-field'>
					<input
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='input-field'>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='errors'>
					{errors.map((err) => (
						<div key={err}>{err}</div>
					))}
				</div>

				<button
					className='btn'
					onClick={(e) => {
						e.preventDefault();
						onSubmit({ email, password });
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AuthForm;
