import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
	// //! fetch for getting Rolls_Royce from mongodb.....
	const { data: rolls } = useQuery({
		queryKey: ['rolls'],
		queryFn: async () => {
			try {
				const res = await fetch(
					'https://assignment-twelve-server.vercel.app/rolls'
				);
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});
	console.log(rolls);

	// //! fetch for getting Rolls_Royce from mongodb.....
	const { data: tesla } = useQuery({
		queryKey: ['tesla'],
		queryFn: async () => {
			try {
				const res = await fetch(
					'https://assignment-twelve-server.vercel.app/tesla'
				);
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});
	console.log(tesla);

	// //! fetch for getting Rolls_Royce from mongodb.....
	const { data: mercedes } = useQuery({
		queryKey: ['mercedes'],
		queryFn: async () => {
			try {
				const res = await fetch(
					'https://assignment-twelve-server.vercel.app/mercedes'
				);
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});
	// console.log(mercedes);
	return (
		<div className='my-16'>
			<h1 className='flex justify-start text-2xl text-gray-900 font-bold font-serif my-2 ml-5 underline'>
				Product Category
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<div className='card w-96 bg-base-100 shadow-xl'>
					<figure>
						<img className='w-full h-[200px]' src={rolls?.image} alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Brand : {rolls?.category}</h2>
						<p className='text-start'>Model : {rolls?.title}</p>
						<p className='text-start'>Exposure time : {rolls?.time}</p>
						<p className='text-start'>Resale Price : $ {rolls?.resalePrice}</p>
						<div className='card-actions justify-end'>
							<div className='btn btn-sm mx-2 bg-blue-500 hover:bg-blue-600 border-0 text-white'>
								<Link to='/rolls'>See More</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='card w-96 bg-base-100 shadow-xl'>
					<figure>
						<img className='w-full h-[200px]' src={tesla?.image} alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Brand : {tesla?.category}</h2>
						<p className='text-start'>Model : {tesla?.title}</p>
						<p className='text-start'>Exposure time : {tesla?.time}</p>
						<p className='text-start'>Resale Price : ${tesla?.resalePrice}</p>
						<div className='card-actions justify-end'>
							<div className='btn btn-sm mx-2 bg-blue-500 hover:bg-blue-600 border-0 text-white'>
								<Link to='/tesla'>See More</Link>
							</div>
						</div>
					</div>
				</div>

				<div className='card w-96 bg-base-100 shadow-xl'>
					<figure>
						<img
							className='w-full h-[200px]'
							src={mercedes?.image}
							alt='Shoes'
						/>
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Brand : {mercedes?.category}</h2>
						<p className='text-start'>Model : {mercedes?.title}</p>
						<p className='text-start'>Exposure time : {mercedes?.time}</p>
						<p className='text-start'>
							Resale Price : ${mercedes?.resalePrice}
						</p>
						<div className='card-actions justify-end'>
							<div className='btn btn-sm mx-2 bg-blue-500 hover:bg-blue-600 border-0 text-white'>
								<Link to='/mercedes'>See More</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCategory;
