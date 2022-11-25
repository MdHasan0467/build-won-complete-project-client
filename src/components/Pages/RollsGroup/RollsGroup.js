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
			<h1 className='my-3'>Total Car : {rollsDatas?.length}</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
								Resale Price : ${rollsData?.resalePrice}
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

export default RollsGroup;