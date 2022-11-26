import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DeshboardDesign from '../../DeshboardDesign/DeshboardDesign';
import Error from '../../Error/Error';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import MercedesGroup from '../../Pages/MercedesGroup/MercedesGroup';
import RollsGroup from '../../Pages/RollsGroup/RollsGroup';
import Signup from '../../Pages/Signup/Signup';
import TeslaGroup from '../../Pages/TeslaGroup/TeslaGroup';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddProduct from '../../Shared/DashBoard/AddProduct/AddProduct';
import AllBuyers from '../../Shared/DashBoard/AllBuyers/AllBuyers';
import AllSeller from '../../Shared/DashBoard/AllSeller/AllSeller';
import DashBoard from '../../Shared/DashBoard/DashBoard';
import MyOrders from '../../Shared/DashBoard/MyOrders/MyOrders';
import MyProducts from '../../Shared/DashBoard/MyProducts/MyProducts';
import Main from '../Main/Main';

const Route = () => {
    const router = createBrowserRouter([
			{
				path: '/',
				element: <Main></Main>,
				children: [
					{
						path: '/',
						element: <Home></Home>,
					},
					{
						path: '/home',
						element: <Home></Home>,
					},
					{
						path: '/tesla',
						element: (
							<PrivateRoute>
								<TeslaGroup></TeslaGroup>
							</PrivateRoute>
						),
					},
					{
						path: '/rolls',
						element: (
							<PrivateRoute>
								<RollsGroup></RollsGroup>
							</PrivateRoute>
						),
					},
					{
						path: '/mercedes',
						element: (
							<PrivateRoute>
								<MercedesGroup></MercedesGroup>
							</PrivateRoute>
						),
					},
					{
						path: '/faq',
						element: <FAQ></FAQ>,
					},
					{
						path: '/login',
						element: <Login></Login>,
					},
					{
						path: '/signup',
						element: <Signup></Signup>,
					},
				],
			},
			{
				path: '/dashboard',
				element: (
					<PrivateRoute>
						
						<DashBoard></DashBoard>
					</PrivateRoute>
				),
				children: [
					{
						path: '/dashboard/addProduct',
						element: <AddProduct></AddProduct>,
					},
					{
						path: '/dashboard',
						element: <DeshboardDesign></DeshboardDesign>,
					},
					{
						path: '/dashboard/myProduct',
						element: <MyProducts></MyProducts>,
					},
					{
						path: '/dashboard/myOrders',
						element: <MyOrders></MyOrders>,
					},
					{
						path: '/dashboard/allSeller',
						element: <AllSeller></AllSeller>,
					},
					{
						path: '/dashboard/allBuyers',
						element: <AllBuyers></AllBuyers>,
					},
				],
			},
			{
				path: '*',
				element: <Error></Error>,
			},
		]);
    return (
			<div>
				<RouterProvider router={router}></RouterProvider>
			</div>
		);
};

export default Route;