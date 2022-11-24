import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';

const Signup = () => {
	const { loading } = useContext(AuthContext);
	const [success, setSuccess] = useState(false);
	const [passwordError, setPasswordError] = useState('');
	const { createSignUp, userprofile } = useContext(AuthContext);
	const navigate = useNavigate()

	//! submit btn...
	const submitBtn = (e) => {
		e.preventDefault();
		setSuccess(false);
		setPasswordError('');

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photoURL = form.profile.value;
		console.log(name, photoURL, email, password);

		//! Regex for password validation...
		if (password.length < 6) {
			setPasswordError('password should be at least 6 characters');
			return;
		}
		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setPasswordError('Please provide at least two uppercase');
			return;
		}

		if (!/(?=.*[!@#$&*])/.test(password)) {
			setPasswordError('Please add at least one special character');
			return;
		}
		setPasswordError('');

		createSignUp(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setSuccess(true);
				form.reset();
				updateUserDetails(name, photoURL);
				navigate('/home')
			})

			.catch((error) => {
				console.error(error);
				setPasswordError(error.message);
			});
	};
	const updateUserDetails = (name, photoURL) => {
		userprofile(name, photoURL)
			.then(() => {
				console.log('Profile Updated');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	if (loading) {
		return <Loader></Loader>
	}
	return (
		<div>
			<div>
				<div className='hero min-h-screen bg-base-200'>
					<div className='hero-content flex-col'>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<form onSubmit={submitBtn} className='card-body'>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Name</span>
									</label>
									<input
										type='text'
										name='name'
										placeholder='Name'
										className='input input-bordered'
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Email</span>
									</label>
									<input
										type='email'
										name='email'
										placeholder='Email'
										className='input input-bordered'
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Password</span>
									</label>
									<input
										type='password'
										name='password'
										placeholder='Password'
										className='input input-bordered'
									/>
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Profile</span>
									</label>
									<input
										className='block   py-1 px-7 mb-2 rounded-md'
										type='text'
										name='profile'
										placeholder='Profile URL '
										required
									/>
								</div>
								<div className='form-control mt-6'>
									<button className='btn btn-primary'>SignUp</button>
								</div>
							</form>
							<p className='mb-2 lg:ml-3 px-2'>
								<small>
									Already have an account?
									<button className='ml-3 hover:text-blue-500 py-1 px-2 rounded-md'>
										<Link className=' px-2' to={'/login'}>
											Login
										</Link>
									</button>
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;