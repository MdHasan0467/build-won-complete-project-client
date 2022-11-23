import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomFooter from '../../Shared/Footer/CustomFooter';
import CustomNavbar from '../../Shared/Navbar/CustomNavbar';

const Main = () => {
    return (
			<div>
			<CustomNavbar></CustomNavbar>
			<Outlet></Outlet>
			<CustomFooter></CustomFooter>
			</div>
		);
};

export default Main;