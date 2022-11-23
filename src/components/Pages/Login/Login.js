import React from 'react';

const Login = () => {
    return (
			<div>
				<div className='hero min-h-screen bg-base-200'>
					<div className='card flex-shrink-0 w-full py-5 max-w-sm shadow-2xl bg-base-100'>
						<form className='card-body' onSubmit={submitBtn}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									name='email'
									placeholder='Enter your email address'
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
									placeholder='Enter your valid password '
									className='input input-bordered'
								/>
								<label className='label'>
									<a href='#' className='label-text-alt link link-hover'>
										Forgot password?
									</a>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Login</button>
							</div>
						</form>
						{success && (
							<p className='text-green-600'>
								<small>Successfully log in !</small>
							</p>
						)}
						{passwordError && (
							<p className='text-red-600'>
								<small>Something is wrong!!</small>
							</p>
						)}
						<p className='text-gray-600 mt-5'>
							No account yet?
							<span className='text-black font-semibold'> or </span>
							<button className='py-1 px-2 hover:text-blue-500 rounded-md'>
								<Link to={'/signup'}>Register</Link>
							</button>
						</p>
						<p className='text-gray-600'>
							<small>
								Forget password?
								<button className='ml-3 mt-5 py-1 px-2 hover:text-blue-500 rounded-md'>
									<Link>Reset</Link>
								</button>
							</small>
						</p>

						<div className='icons flex lg:shadow-slate-600 shadow-md py-5 rounded-lg mx-12 lg:mx-24 mt-7'>
							<BsGoogle
								onClick={googleSignIn}
								className='ml-10 cursor-pointer hover:text-red-500'
							></BsGoogle>
							<BsFacebook className='ml-10 cursor-pointer hover:text-blue-600'></BsFacebook>

							<BsGithub className='ml-10 cursor-pointer hover:text-gray-800'></BsGithub>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Login;