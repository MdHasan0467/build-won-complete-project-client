import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import Loader from '../../Loader/Loader';

const Login = () => {
	const { user,loading, logIn, googleSignUp } = useContext(AuthContext);
	const [success, setSuccess] = useState(false);
	const [passwordError, setPasswordError] = useState('');


	

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	//!......................................
	//!......................................

	//! Google Log In....
	const googleSignIn = () => {
		googleSignUp()
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
				toast.success('Successfully Login!');
			})
			.catch((error) => console.error(error));
	};
	//!......................................

	//! Form Log In...
	const submitBtn = (e) => {
		e.preventDefault();

		setSuccess(false);
		setPasswordError('');

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		logIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setSuccess(true);
				form.reset();
				// navigate(from, { replace: true });

				const currentUser = {
					email: user.email,
				};
				console.log(currentUser);
				// //! request on the server to get a JWT token...
				fetch('http://localhost:5000/jwt', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(currentUser),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						//! Set the JWT token on local storage...
						localStorage.setItem('Login-token', data.token);
						navigate(from, { replace: true });
					});
			})
			.catch((error) => {
				console.error(error);
				setPasswordError(error.message);
			});
	};
		if (loading) {
			return <Loader></Loader>;
		}
	return (
		<div>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col'>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={submitBtn} className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									name= 'email'
									placeholder='email'
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
								<label className='label'>
									<p className='text-gray-600 mt-5'>
										No account yet?
										<span className='text-black font-semibold'> or </span>
										<button className='py-1 px-2 hover:text-blue-500 rounded-md'>
											<Link to='/signup'>Register</Link>
										</button>
									</p>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};;

export default Login;