import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const CustomNavbar = () => {
	const { user, logOut } = useContext(AuthContext);
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
			<div>
				<Navbar className='' fluid={true} rounded={true}>
					<Navbar.Brand>
						<Link to='/home' className='flex'>
							<img
								src='PremiCar.png'
								className='mr-3 h-6 sm:h-9 rounded-lg'
								alt='PremiCar Logo'
							/>
							<span className='self-center whitespace-nowrap hidden lg:block text-xl font-semibold dark:text-white'>
								PremiCar
							</span>
						</Link>
					</Navbar.Brand>
					{user && (
						<div className='flex md:order-2'>
							<Dropdown
								arrowIcon={false}
								inline={true}
								label={
									<Avatar
										alt='User settings'
										img={user?.photoURL}
										rounded={true}
									/>
								}
							>
								<Dropdown.Header>
									<span className='block text-sm font-bold'>{user?.displayName}</span>
									<span className='block truncate text-sm font-medium '>
										{user?.email}
									</span>
								</Dropdown.Header>
								<Dropdown.Item className='hover:bg-green-400 w-full py-2 flex justify-start'>
									<Link to='/dashboard'>Dashboard</Link>
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item onClick={handleLogOut} className='hover:bg-green-400 w-full py-2 flex justify-start'>Sign out</Dropdown.Item>
							</Dropdown>
							<Navbar.Toggle />
						</div>
					)}
					<Navbar.Collapse>
						{user && (
							<>
								<Link className='hover:bg-green-400 px-3 py-2 rounded-lg' to='/home'>Home</Link>
								<Link className='hover:bg-green-400 px-3 py-2 rounded-lg' to='/'>FAQ</Link>
							</>
						)}
						<Link className='hover:bg-green-400 px-3 py-2 rounded-lg' to='/'>About</Link>
						{!user && <Link className='hover:bg-green-400 px-3 py-2 rounded-lg' to='/login'>Login</Link>}
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
};

export default CustomNavbar;