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
			
		</div>
	);
};

export default RollsGroup;