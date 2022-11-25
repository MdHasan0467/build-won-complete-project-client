import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';

const RollsGroup = () => {
    const {loading} = useContext(AuthContext)
	//! fetch for getting rollsDatas data from mongodb.....
	const { data: rollsDatas } = useQuery({
		queryKey: ['rollsDatas'],
		queryFn: async () => {
			try {
				const res = await fetch('http://localhost:5000/rollsDatas');
				const data = await res.json();
				return data;
			} catch (err) {
				console.error(err);
			}
		},
    });
    
	// console.log(rollsDatas);

    if (loading) {
        return <Loader></Loader>
    }
	return (
		<div>
			<img
				src='rolls-royce-mtu.png'
				alt='tesla banner'
				className='w-[500px] hidden my-3 ml-[30%] lg:block h-[200px]'
			/>

			<div className='grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{rollsDatas?.map((rollsData) => (
					<div className='card w-96 bg-base-100 shadow-xl'>
						<figure>
							<img
								className='w-full h-[200px]'
								src={rollsData?.image}
								alt='Shoes'
							/>
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>
								Brand Name: {rollsData?.title}
								<div className='badge badge-secondary text-white'>NEW</div>
							</h2>
							<p className='text-start'>Exposure time : {rollsData?.time}</p>
							
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Category :
								</span>
								{rollsData.category}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Location :
								</span>
								{rollsData.location}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Original Price :
								</span>
								{rollsData.originalPrice}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Resale Price :
								</span>
								{rollsData.resalePrice}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Years of use :
								</span>
								{rollsData.yearsOfUse}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Year of Purchase :
								</span>
								{rollsData.yearOfPurchase}
							</p>
							<p className='text-start'>
								<span className='text-bold text-gray-800 text-xl'>
									Description :
								</span>
								{rollsData.description}
							</p>
							
							{rollsData.author && (
								<p className='text-start'>
									<span className='text-bold text-gray-800 text-xl'>
										Author Name :
									</span>
									{rollsData.author}
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

export default RollsGroup;