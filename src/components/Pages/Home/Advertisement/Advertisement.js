// import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertisement = () => {
	// //! fetch for getting products data from mongodb.....
	// const { data: category } = useQuery({
	// 	queryKey: ['category'],
	// 	queryFn: async () => {
	// 		try {
	// 			const res = await fetch(`http://localhost:5000/advertisement/${category}`);
	// 			const data = await res.json();
	// 			return data;
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	},
    // });
    // console.log(category);
	return (
		<div>
			<h1 className='my-5'>Advertisement Section</h1>
		</div>
	);
};

export default Advertisement;