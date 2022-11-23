import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    	const { register, handleSubmit, formState: { errors }, } = useForm();
	return (
		<div className='bg-base-200'>
			<br />
			<h1 className='mb-5 text-2xl'>Add Your Product</h1>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content grid grid-cols-1 lg:grid-cols-2-col'>
					<div className='card grid grid-cols-1 lg:grid-cols-2-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form className='card-body'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Product Title</span>
									</label>
									<input
										type='text'
										{...register('title', {
											required: 'Title is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.name && (
										<p className='text-red-500'>{errors.name.message}</p>
									)}
								</div>
								<div className='form-control  w-full max-w-xs'></div>
							</div>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Seller Location</span>
									</label>
									<input
										type='text'
										{...register('location', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.email && (
										<p className='text-red-500'>{errors.email.message}</p>
									)}
								</div>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Categories</span>
									</label>
									<select
										{...register('category', {
											required: true,
										})}
										className='select input-bordered w-full max-w-xs'
									>
										<option selected>Electric car</option>
										<option>Auto Driving Car</option>
										<option>Sports Car</option>
									</select>
								</div>
							</div>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Resale Price</span>
									</label>
									<input
										type='text'
										{...register('resalePrice', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.email && (
										<p className='text-red-500'>{errors.email.message}</p>
									)}
								</div>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Original Price</span>
									</label>
									<input
										type='text'
										{...register('originalPrice', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.email && (
										<p className='text-red-500'>{errors.email.message}</p>
									)}
								</div>
							</div>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Years of use</span>
									</label>
									<input
										type='text'
										{...register('yearsOfUse', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.email && (
										<p className='text-red-500'>{errors.email.message}</p>
									)}
								</div>
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Year of purchase</span>
									</label>
									<input
										type='text'
										{...register('yearOfPurchase', {
											required: true,
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.email && (
										<p className='text-red-500'>{errors.email.message}</p>
									)}
								</div>
							</div>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Description</span>
								</label>
								<input
									type='text'
									{...register('description', {
										required: true,
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.email && (
									<p className='text-red-500'>{errors.email.message}</p>
								)}
							</div>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Photo</span>
								</label>
								<input
									type='file'
									{...register('img', {
										required: 'Photo is Required',
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.img && (
									<p className='text-red-500'>{errors.img.message}</p>
								)}
							</div>
							<input
								className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full mt-4'
								value='Add product'
								type='submit'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
