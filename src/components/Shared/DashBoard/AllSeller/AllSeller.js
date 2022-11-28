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
				<h1>All sellers here</h1>
				{usersrole &&
					usersrole?.map((seller) => (
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
															src={seller.photoURL}
															alt='Avatar Tailwind CSS Component'
														/>
													</div>
												</div>
												<div>
													<div className='font-bold'>{seller.name}</div>
													<div className='text-sm opacity-50'>
														{seller.email}
													</div>
												</div>
											</div>
										</td>
										<td>
											{seller.role}
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

				{!usersrole && <p>No seller here</p>}
			</div>
		);
};

export default AllSeller;