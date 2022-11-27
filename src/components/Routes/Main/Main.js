import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomFooter from '../../Shared/Footer/CustomFooter';
import CustomNav from '../../Shared/Navbar/CustomNav';
import CustomNavbar from '../../Shared/Navbar/CustomNavbar';

const Main = () => {
    return (
			<div>
			<CustomNav></CustomNav>
			<Outlet></Outlet>
			<CustomFooter></CustomFooter>
			</div>
		);
};

export default Main;