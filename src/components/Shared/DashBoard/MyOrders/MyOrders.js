import React, { useEffect, useState } from 'react';
import axios from 'axios'

const MyOrders = () => {
	const [orders, setOrders] = useState()

	useEffect(() => {
		axios
			.get(`http://localhost:5000/bookingData`)
			.then((data) => setOrders(data.data));
	},[])
    return (
			<div className='mx-12 bg-transparent'>
				<h1 className='my-5'>My Total orders : {orders?.length}</h1>

				{orders?.map((order) => (
					<div key={order?._id} className='card  bg-base-100 shadow-xl'>
						<div className='card lg:card-side my-5 bg-base-100 shadow-xl'>
							<img src={order?.productImg} className='w-[50%]' alt='Album' />

							<div className='card-body'>
								<div className='card-body '>
									<h2 className='card-title'>
										<span className='text-bold text-gray-800 text-lg'>
											Brand :
										</span>
										{order?.productCategory}
									</h2>
									<p className='text-start'>
										<span className='text-bold text-gray-800 text-lg'>
											Model :
										</span>
										{order?.productModel}
									</p>
									<p className='text-start'>
										<span className='text-bold text-gray-800 text-lg'>
											Resell Price :
										</span>
										{order?.resellPrice}
									</p>
									<p className='text-start'>
										<span className='text-bold text-gray-800 text-lg'>
											Seller Name :
										</span>
										{order?.sellerName}
									</p>
									<p className='text-start'>
										<span className='text-bold text-gray-800 text-lg'>
											Seller Email :
										</span>
										{order?.sellerEmail}
									</p>
									<p className='text-start'>
										<span className='text-bold text-gray-800 text-lg'>
											Seller Location :
										</span>
										{order?.sellerLocation}
									</p>
									<p className='text-start'>
										<span className='text-bold text-gray-800 text-lg'>
											Meeting Date :
										</span>
										{order?.meetingDate}
									</p>
									<p className='text-start'>
										<span className='text-bold text-gray-800 text-lg'>
											Buyer Number :
										</span>
										{order?.buyerNumber}
									</p>
									<div className='card-actions justify-end'>
										<button className='btn border-0 bg-green-500 hover:bg-green-600 text-white'>
											Buy Now
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
};

export default MyOrders;



