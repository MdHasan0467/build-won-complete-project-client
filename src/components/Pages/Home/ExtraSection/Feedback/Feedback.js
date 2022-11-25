import React from 'react';
import { useForm } from 'react-hook-form';

const Feedback = () => {
    	const {register,handleSubmit,formState: { errors },} = useForm();
    return (
			<div className='flex justify-center my-28 '>
				<form className='mt-10 border-2 border-gray-900 p-5 rounded-lg'>
					<div className='form-control w-[300px]'>
						<label className='label'>
							<span className='label-text'>Your Email</span>
						</label>
						<input
							type='email'
							{...register('email', {
								required: true,
							})}
							className='input input-bordered w-full'
						/>
						{errors.email && (
							<p className='text-red-500'>{errors.email.message}</p>
						)}
					</div>
					<div className='form-control w-[300px]'>
						<label className='label'>
							<span className='label-text'>Your Feedback</span>
						</label>
						<input
							type='text'
							placeholder='Give here experience your'
							{...register('text', {
								required: true,
							})}
							className='input input-bordered w-full h-[100px]'
						/>
						{errors.text && (
							<p className='text-red-500'>{errors.text.message}</p>
						)}
					</div>
				</form>
			</div>
		);
};

export default Feedback;