import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import CustomNav from '../Navbar/CustomNav';
// import { useQuery } from '@tanstack/react-query';

const DashBoard = () => {
	const { loading, user } = useContext(AuthContext);
	const [logUser, setLogUser] = useState();
	//! fetch for getting users data from mongodb.....
	// const { data: users } = useQuery({
	// 	queryKey: ['users'],
	// 	queryFn: async () => {
	// 		try {
	// 			const res = await fetch(`https://assignment-twelve-server.vercel.app/users/${user?.email}`);
	// 			const data = await res.json();
	// 			return data;
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	},
	// });

	useEffect(() => {
		fetch(`https://assignment-twelve-server.vercel.app/users/${user?.email}`)
			.then((res) => res.json())
			.then((result) => {
				setLogUser(result[0]);
			});
	}, [user?.email]);

	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<CustomNav></CustomNav>
			<div className='drawer drawer-mobile'>
				<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
				<div className='drawer-content'>
					<Outlet></Outlet>
					<label
						htmlFor='my-drawer-2'
						className='btn btn-primary drawer-button hidden'
					>
						Open drawer
					</label>
				</div>
				<div className='drawer-side'>
					<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
					<ul className='menu p-4 w-80 bg-base-100 text-base-content'>
						{logUser?.role === 'Seller' && (
							<>
								<Link to='/home' className='flex lg:hidden'>
									<img
										src='PremiCar.png'
										className='mr-3 h-6 sm:h-9 rounded-lg'
										alt='PremiCar Logo'
									/>
									<span className='self-center whitespace-nowrap hidden lg:block text-xl font-semibold dark:text-white'>
										PremiCar
									</span>
								</Link>
								<li>
									<Link to='/dashboard/addProduct'>Add Product</Link>
								</li>
								<li>
									<Link to='/dashboard/myProduct'>My Products</Link>
								</li>
								<li>
									<Link to='/dashboard/mybuyers'>My Buyers</Link>
								</li>
							</>
						)}

						{logUser?.role === 'Buyer' && (
							<>
								<Link to='/home' className='flex lg:hidden'>
									<img
										src='PremiCar.png'
										className='mr-3 h-6 sm:h-9 rounded-lg'
										alt='PremiCar Logo'
									/>
									<span className='self-center whitespace-nowrap hidden lg:block text-xl font-semibold dark:text-white'>
										PremiCar
									</span>
								</Link>
								<li>
									<Link to='/dashboard/myOrders'>My Orders</Link>
								</li>
								<li>
									<Link to='/dashboard/myWishList'>My WhishList</Link>
								</li>
							</>
						)}

						{logUser?.role === 'admin' && (
							<>
								<Link to='/home' className='flex lg:hidden'>
									<img
										src='PremiCar.png'
										className='mr-3 h-6 sm:h-9 rounded-lg'
										alt='PremiCar Logo'
									/>
									<span className='self-center whitespace-nowrap hidden lg:block text-xl font-semibold dark:text-white'>
										PremiCar
									</span>
								</Link>
								<li>
									<Link to='/dashboard/allBuyers'>All Buyers</Link>
								</li>
								<li>
									<Link to='/dashboard/allSeller'>All Sellers</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;








		
