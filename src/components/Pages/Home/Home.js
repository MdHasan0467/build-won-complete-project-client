import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import CustomModal from '../../Shared/Modal/CustomModal';
import Advertisement from './Advertisement/Advertisement';
import CustomCarousel from './Carousel/CustomCarousel';
import Feedback from './ExtraSection/Feedback/Feedback';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
	const { loading } = useContext(AuthContext);
	const [product, setProduct] = useState(null)
	// console.log(products)
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
			<Advertisement setProduct={setProduct}></Advertisement>
			<ProductCategory setProduct={setProduct}></ProductCategory>
			<Feedback></Feedback>
			<CustomModal product={product}></CustomModal>
		</div>
	);
};;

export default Home;