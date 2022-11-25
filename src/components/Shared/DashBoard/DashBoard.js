import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomNavbar from '../Navbar/CustomNavbar';

const DashBoard = () => {
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
							<li>
								<Link to='/dashboard/addProduct'>Add Product</Link>
							</li>
							<li>
								<Link to='/dashboard/myProduct'>My Products</Link>
							</li>
							<li>
								<Link to='/dashboard/myOrders'>My Orders</Link>
							</li>
							<li>
								<Link to='/dashboard/allBuyers'>All Buyers</Link>
							</li>
							<li>
								<Link to='/dashboard/allSeller'>All Sellers</Link>
							</li>
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