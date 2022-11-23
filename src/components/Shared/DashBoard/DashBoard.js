import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomNavbar from '../Navbar/CustomNavbar';
import AddProduct from './AddProduct/AddProduct';

const DashBoard = () => {
    return (
			<div>
				<CustomNavbar></CustomNavbar>

				<div className='drawer drawer-mobile'>
					<input
						id='dashboard-drawer'
						type='checkbox'
						className='drawer-toggle'
					/>
					<div className='drawer-content'>
						<Outlet></Outlet>
					</div>
					<div className='drawer-side'>
						<label
							htmlFor='dashboard-drawer'
							className='drawer-overlay'
						></label>
						<ul className='menu p-4 w-52 bg-base-100 text-base-content'>
							<li>
								<Link to='/dashboard/addProduct'>Add Product</Link>
							</li>
							<li>
								<Link to='/dashboard/myProduct'>My Products</Link>
							</li>
							<li>
								<Link to='/dashboard/myOrders'>My Orders</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
};

export default DashBoard;