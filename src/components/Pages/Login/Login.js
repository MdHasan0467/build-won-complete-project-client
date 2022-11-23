import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col'>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<div className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='text'
									placeholder='password'
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;