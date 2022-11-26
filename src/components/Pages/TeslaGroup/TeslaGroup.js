import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import { Checkmark } from 'react-checkmark';
import BookModal from '../../Shared/BookModal/BookModal';

const TeslaGroup = () => {
	const { loading, user } = useContext(AuthContext);
	const [selected, setSelected] = useState(null)
	//! fetch for getting teslaDatas data from mongodb.....
	const { data: teslaDatas } = useQuery({
		queryKey: ['teslaDatas'],
		queryFn: async () => {
			try {
				const res = await fetch('http://localhost:5000/teslaDatas');
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
	});
	// console.log(teslaDatas);
	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<img
				src='TESLA-BANNER.png'
				alt='tesla banner'
				className='w-[500px] hidden my-3 ml-[30%] lg:block h-[170px]'
			/>

			<div className='grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{teslaDatas?.map((teslaData) => (
					<div className='card w-96 bg-base-100 shadow-xl'>
						<figure>
							<img
								className='w-full h-[200px]'
								src={teslaData?.image}
								alt='Shoes'
							/>
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>
								Brand Name: {teslaData?.title}
							</h2>
							<p className='text-start'>Exposure time : {teslaData?.time}</p>

							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Category :
								</span>
								{teslaData.category}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Location :
								</span>
								{teslaData.location}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Original Price :
								</span>
								{teslaData.originalPrice}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Resale Price :
								</span>
								{teslaData.resalePrice}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Years of use :
								</span>
								{teslaData.yearsOfUse}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Year of Purchase :
								</span>
								{teslaData.yearOfPurchase}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Description :
								</span>
								{teslaData.description}
							</p>

							{teslaData.author && (
								<p className='text-start flex'>
									<span className='text-bold text-gray-800 text-xl'>
										Seller :
									</span>
									<span className='flex ml-2'>
										{teslaData.author} <Checkmark size='small' color='blue' />
									</span>
								</p>
							)}
							<div className='card-actions justify-end'>
								<label onClick={() => setSelected(teslaData)}
									htmlFor='booking-modal'
									className='btn bg-green-500 hover:bg-green-600 border-0 text-white'
								>
									Book Now
								</label>
							</div>
						</div>
						<BookModal selected={selected}></BookModal>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeslaGroup;
