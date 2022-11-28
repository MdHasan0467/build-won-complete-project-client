import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Loader/Loader';
import DeleteModal from '../DeleteModal/DeleteModal';

const AllSeller = ({}) => {
	const { logUser, loading } = useContext(AuthContext);
	const [deletingUser, setDeletingUser] = useState(null);
	console.log('deletingUser', deletingUser);
	// console.log(logUser?.role);
	//! fetch for getting products data from mongodb.....

	const url = 'https://assignment-twelve-server.vercel.app/usersrole';

	const { data: usersrole = [], refetch } = useQuery({
		queryKey: ['usersrole'],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		},
	});

	console.log(usersrole);

	//! Cancel Button of modal...
	const closeModal = () => {
		setDeletingUser(null);
	};

	//! Delete button of modal...
	const handleDeleteUser = (seller) => {
		console.log('seller', seller?._id);
		fetch(`https://assignment-twelve-server.vercel.app/seller/${seller?._id}`, {
			method: 'DELETE',
			headers: {
				authorization: `${localStorage.getItem('userAccessToken')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.success(`${seller.name} delete successfully!!`);
				}
				refetch();
			});
	};
	if (loading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			{!usersrole && <h1>No Seller logged</h1>}
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
												<div className='text-sm opacity-50'>{seller.email}</div>
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
										<label
											onClick={() => setDeletingUser(seller)}
											htmlFor='confirmation-modal'
											className='btn btn-sm text-white border-0 bg-red-500 hover:bg-red-700'
										>
											Delete
										</label>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
				))}
			{deletingUser && (
				<DeleteModal
					deletingUser={deletingUser}
					image={deletingUser?.photoURL}
					name={deletingUser?.name}
					email={deletingUser?.email}
					closeModal={closeModal}
					successAction={handleDeleteUser}
				></DeleteModal>
			)}

			{!usersrole && <p>No seller here</p>}
		</div>
	);
};

export default AllSeller;
