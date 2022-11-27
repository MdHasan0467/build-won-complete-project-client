import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import { Checkmark } from 'react-checkmark';
import BookModal from '../../Shared/BookModal/BookModal';

const MercedesGroup = () => {
	const { logUser, loading } = useContext(AuthContext);
	const [selected, setSelected] = useState(null)
	//! fetch for getting mercedesDatas data from mongodb.....
	const { data: mercedesDatas =[] } = useQuery({
		queryKey: ['mercedesDatas'],
		queryFn: async () => {
			try {
				const res = await fetch('http://localhost:5000/mercedesDatas');
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});

	
	// console.log(mercedesDatas);
	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<img
				src='mercedes.banner.jpg'
				alt='tesla banner'
				className='w-[500px] hidden my-3 ml-[30%] lg:block h-[200px]'
			/>

			<div className='grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{mercedesDatas?.map((mercedesData) => (
					<div className='card w-96 bg-base-100 shadow-xl'>
						<figure>
							<img
								className='w-full h-[200px]'
								src={mercedesData?.image}
								alt='Shoes'
							/>
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>Brand Name: {mercedesData?.title}</h2>
							<p className='text-start'>Exposure time : {mercedesData?.time}</p>

							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Category :
								</span>
								{mercedesData.category}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Location :
								</span>
								{mercedesData.location}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Original Price :
								</span>
								{mercedesData.originalPrice}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Resale Price :
								</span>
								{mercedesData.resalePrice}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Years of use :
								</span>
								{mercedesData.yearsOfUse}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Year of Purchase :
								</span>
								{mercedesData.yearOfPurchase}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Description :
								</span>
								{mercedesData.description}
							</p>

							{mercedesData.author && (
								<p className='text-start flex'>
									<span className='text-bold text-gray-800 text-xl'>
										Seller :
									</span>
									<span className='flex ml-2'>
										{mercedesData.author}
										<Checkmark size='small' color='blue' />
									</span>
								</p>
							)}
							{logUser?.role === 'Buyer' && (
								<div className='card-actions justify-end'>
									<button>
										<label
											onClick={() => setSelected(mercedesData)}
											htmlFor='booking-modal'
											className='btn bg-green-500 hover:bg-green-600 border-0 text-white'
										>
											Book Now
										</label>
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

						<BookModal
							selected={selected}
							setSelected={setSelected}
						></BookModal>
					</div>
				))}
			</div>
		</div>
	);
};

export default MercedesGroup;
