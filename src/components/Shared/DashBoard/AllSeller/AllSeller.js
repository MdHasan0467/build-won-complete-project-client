import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AllSeller = () => {
	const { logUser, loading } = useContext(AuthContext);
	// console.log(logUser?.role);
		//! fetch for getting products data from mongodb.....

		const url = 'http://localhost:5000/usersrole';

		const { data: usersrole = [] } = useQuery({
			queryKey: ['usersrole'],
			queryFn: async () => {
				const res = await fetch(url);
				const data = await res.json();
				return data;
			},
		});

		console.log(usersrole);
    return (
			<div>
				<img
					src='mercedes.banner.jpg'
					alt='tesla banner'
					className='w-[500px] hidden my-3 ml-[30%] lg:block h-[200px]'
				/>

				<div className='grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{usersrole?.map((role) => (
						<div className='card w-96 bg-base-100 shadow-xl'>
							<figure>
								<img
									className='w-full h-[200px]'
									src={role?.image}
									alt='Shoes'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>
									Brand Name: {role?.title}
								</h2>
								<p className='text-start'>
									Exposure time : {role?.time}
								</p>

								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Category :
									</span>
									{role.category}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Location :
									</span>
									{role.location}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Original Price :
									</span>
									{role.originalPrice}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Resale Price :
									</span>
									{role.resalePrice}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Years of use :
									</span>
									{role.yearsOfUse}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Year of Purchase :
									</span>
									{role.yearOfPurchase}
								</p>
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Description :
									</span>
									{role.description}
								</p>

								{role.author && (
									<p className='text-start flex'>
										<span className='text-bold text-gray-800 text-xl'>
											Seller :
										</span>
										<span className='flex ml-2'>
											{role.author}
											
										</span>
									</p>
								)}
								{logUser?.role === 'Buyer' && (
									<div className='card-actions justify-end'>
										<button>
											Verify
										</button>
									</div>
								)}
								{logUser?.role === 'Seller' && (
									<p className='text-emerald-600 font-serif font-bold my-2'>
										Only buyer can book this product
									</p>
								)}
								{logUser?.role === 'admin' && (
									<p className='text-emerald-600 font-serif font-bold my-2'>
										Only buyer can book this product
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		);
};

export default AllSeller;