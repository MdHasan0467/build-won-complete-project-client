import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertisement = () => {
	// //! fetch for getting products data from mongodb.....
	const { data: categories } = useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			try {
				const res = await fetch(
					'http://localhost:5000/advertisement/categories'
				);
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});
    console.log(categories);
	return (
		<div className='mt-10'>
			{categories?.length > 0 && (
				<>
					<h1 className='flex justify-start text-2xl text-gray-900 font-bold font-serif my-2 ml-5 underline'>
						Advertisement
					</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{categories?.map((category) => (
							<div className='card w-96 glass'>
								<figure>
									<img src={category?.image} alt='car!' />
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>{category?.title}</h2>
									<p className='text-start'>
										<span>Brand Name :</span> {category?.category}
									</p>
									<p className='text-start'>
										<span>Resale Price:</span> {category?.resalePrice}
									</p>
									
									<div className="rating">
                                         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
									</div>
									
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Advertisement;