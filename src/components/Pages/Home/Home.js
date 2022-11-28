// import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import CustomModal from '../../Shared/Modal/CustomModal';
import Advertisement from './Advertisement/Advertisement';
import CustomCarousel from './Carousel/CustomCarousel';
import Feedback from './ExtraSection/Feedback/Feedback';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
	const { user, loading } = useContext(AuthContext);
	const [product, setProduct] = useState(null);
	const [logUser, setLogUser] = useState(null);

	// //! fetch for getting users data from mongodb.....

	useEffect(() => {
		console.log(user?.email);
		fetch(`https://assignment-twelve-server.vercel.app/users/${user?.email}`)
			.then((res) => res.json())
			.then((result) => {
				// console.log(result[0]);
				setLogUser(result[0]);
			});
	}, [user?.email]);

	console.log(logUser);


	if (loading) {
		return <Loader></Loader>;
	}
	console.log(user?.email)
	return (
		<div className='m-2'>
			<CustomCarousel></CustomCarousel>
			<Advertisement setProduct={setProduct}></Advertisement>
			<ProductCategory setProduct={setProduct}></ProductCategory>
			<Feedback></Feedback>
			<CustomModal product={product}></CustomModal>
		</div>
	);
};

export default Home;
