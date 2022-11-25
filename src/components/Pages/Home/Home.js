import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import Advertisement from './Advertisement/Advertisement';
import CustomCarousel from './Carousel/CustomCarousel';
import Feedback from './ExtraSection/Feedback/Feedback';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
	const { loading } = useContext(AuthContext);
	//! fetch for getting users data from mongodb.....
	const { data: users } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			try {
				const res = await fetch('http://localhost:5000/users');
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});

	// console.log(users);
	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div className='m-2'>
			<CustomCarousel></CustomCarousel>
			<Advertisement></Advertisement>
			<ProductCategory></ProductCategory>
			<Feedback></Feedback>
		</div>
	);
};;

export default Home;