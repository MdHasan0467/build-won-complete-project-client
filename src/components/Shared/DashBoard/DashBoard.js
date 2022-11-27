import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomNavbar from '../Navbar/CustomNavbar';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
// import { useQuery } from '@tanstack/react-query';

const DashBoard = () => {
	const { loading, user } = useContext(AuthContext);
	const [logUser, setLogUser] = useState()
		//! fetch for getting users data from mongodb.....
		// const { data: users } = useQuery({
		// 	queryKey: ['users'],
		// 	queryFn: async () => {
		// 		try {
		// 			const res = await fetch(`http://localhost:5000/users/${user?.email}`);
		// 			const data = await res.json();
		// 			return data;
		// 		} catch (err) {
		// 			console.error(err);
		// 		}
		// 	},
		// });
	
		useEffect(() => {
			console.log(user?.email);
			fetch(`http://localhost:5000/users/${user?.email}`)
				.then((res) => res.json())
				.then((result) => {
					setLogUser(result[0]);
				});
		}, [user?.email]);

	console.log(logUser?.role)
		if (loading) {
		return <Loader></Loader>;
	}
    return (
			<div>
				<CustomNavbar></CustomNavbar>

				<div className='grid grid-cols-1 lg:grid-cols-5'>
					<div className='drawer-side col-span-1'>
						<label
							htmlFor='dashboard-drawer'
							className='drawer-overlay'
						></label>
						<ul className='menu flex lg:block p-4  bg-white m-2 text-base-content'>
							{logUser?.role === 'Seller' && (
								<>
									<li>
										<Link to='/dashboard/addProduct'>Add Product</Link>
									</li>
									<li>
										<Link to='/dashboard/myProduct'>My Products</Link>
									</li>
								</>
							)}

							{logUser?.role === 'Buyer' && (
								<li>
									<Link to='/dashboard/myOrders'>My Orders</Link>
								</li>
							)}

							{logUser?.role === 'admin' && (
								<>
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
					<div className='col-span-4'>
						<Outlet></Outlet>
					</div>
				</div>
			</div>
		);
};

export default DashBoard;