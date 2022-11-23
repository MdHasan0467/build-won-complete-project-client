import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
			<div>
				<div>
					<div className='hero min-h-screen bg-base-200'>
						<div className='hero-content flex-col'>
							<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
								<form className='card-body'>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>Email</span>
										</label>
										<input
											type='text'
											name='name'
											placeholder='Your Name'
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
											placeholder='password'
											className='input input-bordered'
										/>
										
									</div>
									<div className='form-control mt-6'>
										<button className='btn btn-primary'>Login</button>
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