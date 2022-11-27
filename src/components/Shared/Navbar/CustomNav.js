import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import {
	BsFillBookmarkStarFill,
	BsArrowRightSquare,
	BsFillHddStackFill,
} from 'react-icons/bs';
import toast from 'react-hot-toast';

const CustomNav = () => {
    const { user, logUser, logOut } = useContext(AuthContext);
    	const navigate = useNavigate();

			const handleLogOut = () => {
				navigate('/login');
				logOut()
					.then(() => {
						toast.error('Log Out!');
					})
					.catch((error) => console.error(error));
			};
    return (
			<div className='navbar bg-base-100'>
				<div className='flex-1'>
					<Link to='/home' className='flex hidden lg:block'>
						<img
							src='PremiCar.png'
							className='mr-3 h-6 sm:h-9 rounded-lg '
							alt='PremiCar Logo'
						/>
						<span className='self-center whitespace-nowrap hidden lg:block text-xl font-semibold dark:text-white'>
							PremiCar
						</span>
					</Link>
					<div className='drowar'>
						<label
							htmlFor='my-drawer-2'
							tabIndex={2}
							className='btn btn-ghost lg:hidden btn-circle'
						>
							<div className='indicator btn btn-primary'>
								{' '}
								<BsArrowRightSquare></BsArrowRightSquare>{' '}
							</div>
						</label>
					</div>
				</div>

				<div className='menu hidden lg:flex'>
					
					{user && (
						<div className='flex me-10firebase'>
							<Link
								className='hover:bg-green-400 px-3 py-2 rounded-lg'
								to='/home'
							>
								Home
							</Link>
							<Link
								className='hover:bg-green-400 px-3 py-2 rounded-lg'
								to='/mercedes'
							>
								Mercedes
							</Link>
							<Link
								className='hover:bg-green-400 px-3 py-2 rounded-lg'
								to='/rolls'
							>
								Rolls Royce
							</Link>
							<Link
								className='hover:bg-green-400 px-3 py-2 rounded-lg'
								to='/tesla'
							>
								Tesla
							</Link>
							<Link
								className='hover:bg-green-400 px-3 py-2 rounded-lg'
								to='/faq'
							>
								FAQ
							</Link>

							<Link className='hover:bg-green-400 px-3 py-2 rounded-lg' to='/'>
								About
							</Link>
						</div>
					)}
					{!user && (
						<Link
							className='hover:bg-green-400 px-3 py-2 rounded-lg'
							to='/login'
						>
							Login
						</Link>
					)}
				</div>
				<div className='flex-none'>
					<div className='dropdown dropdown-end lg:hidden'>
						<label tabIndex={0} className='btn btn-ghost btn-circle'>
							<div className='indicator btn btn-primary'>
								<BsFillHddStackFill></BsFillHddStackFill>
							</div>
						</label>
						<div
							tabIndex={1}
							className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
						>
							<div className='card-body'>
								{user && (
									<>
										<Link
											className='hover:bg-green-400 px-3 py-2 rounded-lg'
											to='/home'
										>
											Home
										</Link>
										<Link
											className='hover:bg-green-400 px-3 py-2 rounded-lg'
											to='/faq'
										>
											FAQ
										</Link>
										<Link
											className='hover:bg-green-400 px-3 py-2 rounded-lg'
											to='/mercedes'
										>
											Mercedes
										</Link>
										<Link
											className='hover:bg-green-400 px-3 py-2 rounded-lg'
											to='/rolls'
										>
											Rolls Royce
										</Link>
										<Link
											className='hover:bg-green-400 px-3 py-2 rounded-lg'
											to='/tesla'
										>
											Tesla
										</Link>
									</>
								)}
								<Link
									className='hover:bg-green-400 px-3 py-2 rounded-lg'
									to='/'
								>
									About
								</Link>
								{!user && (
									<Link
										className='hover:bg-green-400 px-3 py-2 rounded-lg'
										to='/login'
									>
										Login
									</Link>
								)}
							</div>
						</div>
					</div>

					<div className='dropdown dropdown-end'>
						{user && (
							<label tabIndex={3} className='btn btn-ghost btn-circle avatar'>
								<div className='w-10 rounded-full'>
									<img src={user?.photoURL} />
								</div>
							</label>
						)}
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<div>
								<div className='userName flex justify-center'>
									<span className='block text-sm font-bold'>
										{user?.displayName}
									</span>
									<span>
										{logUser?.role === 'admin' && (
											<BsFillBookmarkStarFill className='text-green-600 mt-1 ml-2'></BsFillBookmarkStarFill>
										)}
									</span>
									<p className='mx-2'>({logUser?.role})</p>
								</div>
								<span className='block truncate text-sm font-medium '>
									{user?.email}
								</span>
							</div>
							<div>
								<Link
									className='hover:bg-green-400 w-full py-2 flex justify-start'
									to='/dashboard'
								>
									Dashboard
								</Link>
								<Link
									onClick={handleLogOut}
									className='hover:bg-green-400 w-full py-2 flex justify-start'
								>
									Sign out
								</Link>
							</div>
						</ul>
					</div>
				</div>
			</div>
		);
};

export default CustomNav;