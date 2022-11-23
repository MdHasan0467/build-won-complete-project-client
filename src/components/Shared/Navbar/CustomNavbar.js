import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
			<div>
				<Navbar className='' fluid={true} rounded={true}>
					<Navbar.Brand href='https://flowbite.com/'>
						<img
							src='PremiCar.png'
							className='mr-3 h-6 sm:h-9 rounded-lg'
							alt='PremiCar Logo'
						/>
						<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
							PremiCar
						</span>
					</Navbar.Brand>
					<div className='flex md:order-2'>
						<Dropdown
							arrowIcon={false}
							inline={true}
							label={
								<Avatar
									alt='User settings'
									img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
									rounded={true}
								/>
							}
						>
							<Dropdown.Header>
								<span className='block text-sm'>Bonnie Green</span>
								<span className='block truncate text-sm font-medium'>
									name@flowbite.com
								</span>
							</Dropdown.Header>
							<Dropdown.Item>Dashboard</Dropdown.Item>
							<Dropdown.Item>Settings</Dropdown.Item>
							<Dropdown.Item>Earnings</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>Sign out</Dropdown.Item>
						</Dropdown>
						<Navbar.Toggle />
					</div>
					<Navbar.Collapse>
						<Link to='/home'>Home</Link>
						<Link to='/'>FAQ</Link>
						<Link to='/'>About</Link>
						<Link to='/'>Contact</Link>
						<Link to='/login'>Login</Link>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
};

export default CustomNavbar;