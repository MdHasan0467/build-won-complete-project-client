import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';

const MercedesGroup = () => {
    const {loading} = useContext(AuthContext)
	//! fetch for getting mercedesDatas data from mongodb.....
	const { data: mercedesDatas } = useQuery({
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
							<h2 className='card-title'>
								Brand Name: {mercedesData?.title}
								<div className='badge badge-secondary text-white'>NEW</div>
							</h2>
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
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Author Name :
									</span>
									{mercedesData.author}
								</p>
							)}
							<div className='card-actions justify-end'>
								<div className='btn btn-sm mx-2 bg-green-500 hover:bg-green-600 border-0 text-white'>
									Book Now
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MercedesGroup;
