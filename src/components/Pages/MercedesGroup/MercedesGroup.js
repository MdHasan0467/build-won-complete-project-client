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
			
		</div>
	);
};

export default MercedesGroup;
