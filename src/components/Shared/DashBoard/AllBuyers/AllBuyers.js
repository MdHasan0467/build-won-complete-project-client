import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Loader/Loader';

const AllBuyers = () => {
	const {loading} = useContext(AuthContext)
	//! fetch for getting products data from mongodb.....

	const url = 'http://localhost:5000/usersroleBuyers';

	const { data: usersroleBuyers = [] } = useQuery({
		queryKey: ['usersroleBuyers'],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		},
	});

	if (loading) {
		return <Loader></Loader>
	}

	console.log(usersroleBuyers);
	return (
		<div>
			<h1>All Buyers here</h1>
			{usersroleBuyers &&
				usersroleBuyers?.map((buyer) => (
					<div className='lg:overflow-x-auto lg:w-full w-[100vw]'>
						<table className='table w-full'>
							<thead>
								<tr>
									<th>User</th>
									<th>Role</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div className='flex items-center space-x-3'>
											<div className='avatar'>
												<div className='mask mask-squircle w-12 h-12'>
													<img
														src={buyer.photoURL}
														alt='Avatar Tailwind CSS Component'
													/>
												</div>
											</div>
											<div>
												<div className='font-bold'>{buyer.name}</div>
												<div className='text-sm opacity-50'>{buyer.email}</div>
											</div>
										</div>
									</td>
									<td>
										{buyer.role}
										<br />
										<span className='badge badge-ghost badge-sm'>
											**********
										</span>
									</td>

									<th>
										<button className='btn btn-ghost btn-xs'>details</button>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
				))}

			{!usersroleBuyers && <p>No Buyer here</p>}
		</div>
	);
};

export default AllBuyers;
