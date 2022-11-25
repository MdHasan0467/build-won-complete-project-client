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
			<h1 className='my-3'>Total Car : {mercedesDatas?.length}</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
								Resale Price : ${mercedesData?.resalePrice}
							</p>
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
