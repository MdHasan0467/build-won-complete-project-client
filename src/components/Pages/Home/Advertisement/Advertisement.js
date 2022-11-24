import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertisement = () => {
	// //! fetch for getting products data from mongodb.....
	const { data: categories } = useQuery({
		queryKey: ['category'],
		queryFn: async () => {
			try {
				const res = await fetch('http://localhost:5000/advertisement/categories');
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
    });
    console.log(categories);
	return (
		<div>
			<h1 className='my-5'>Advertisement Section{categories.length}</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{categories.map((category) => (
					<div className='card w-96 glass'>
						<figure>
							<img src={category.image} alt='car!' />
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>{category.title}</h2>
							<p>
								<span>Brand Name :</span> {category.category}
							</p>
							<p>
								<span>Resale Price:</span> {category.resalePrice}
							</p>
							<div className='card-actions justify-end'>
								<button className='btn btn-primary'>Book now</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Advertisement;