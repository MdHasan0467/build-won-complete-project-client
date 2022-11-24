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
									<span className='block text-sm'>{user?.displayName}</span>
									<span className='block truncate text-sm font-medium'>
										{user?.email}
									</span>
								</Dropdown.Header>
								<Dropdown.Item>
									<Link to='/dashboard'>Dashboard</Link>
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
							</Dropdown>
							<Navbar.Toggle />
						</div>
					)}
					<Navbar.Collapse>
						{user && (
							<>
								<Link to='/home'>Home</Link>
								<Link to='/'>FAQ</Link>
							</>
						)}
						<Link to='/'>About</Link>
						{!user && <Link to='/login'>Login</Link>}
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
};

export default CustomNavbar;