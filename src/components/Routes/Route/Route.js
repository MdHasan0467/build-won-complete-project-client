import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
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
				path: '*',
				element: <h1>Error Page</h1>,
			},
		]);
    return (
			<div>
				<RouterProvider router={router}></RouterProvider>
			</div>
		);
};

export default Route;