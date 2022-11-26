import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookModal = ({ selected, setSelected }) => {
    
	const {  user } = useContext(AuthContext);
	return (
		<div className='modal_body'>
			<input type='checkbox' id='booking-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='booking-modal'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
                    <form className='modal_card'>
                        <input type="text" readOnly defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" readOnly defaultValue={user?.email} className="input input-bordered my-3 w-full max-w-xs" />
                        <div className='my-3'>
                            <h1>Brand :</h1>
                        <input type="text" readOnly defaultValue={selected?.category} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='my-3'>
                            <h1>Product Model :</h1>
                        <input type="text" readOnly defaultValue={selected?.title} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='my-3'>
                            <h1>Resell Price :</h1>
                        <input type="text" readOnly defaultValue={selected?.resalePrice} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='my-3'>
                            <h1>Seller Location :</h1>
                        <input type="text" readOnly defaultValue={selected?.location} className="input input-bordered w-full max-w-xs" />
                        </div>
					
					</form>
					<div className='btn-group mt-8 mb-3'>
						<button className='btn border-0 hover:bg-green-400 text-white'>
							Confirm
						</button>
						<div className='bg-white w-[2px] h-full'></div>
						<button className='btn border-0 hover:bg-red-600 text-white'>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookModal;



// <form onSubmit={handleSubmit(handleLogin)}>
// 	<div className='form-control w-full max-w-xs'>
// 		<label className='label'>
// 			<span className='label-text'>Email</span>
// 		</label>
// 		<input
// 			type='text'
// 			{...register('email', {
// 				required: 'Email Address is required',
// 			})}
// 			className='input input-bordered w-full max-w-xs'
// 		/>
// 		{errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
// 	</div>

// 	<div className='form-control w-full max-w-xs'>
// 		<label className='label'>
// 			<span className='label-text'>Password</span>
// 		</label>
// 		<input
// 			type='password'
// 			{...register('password', {
// 				required: 'Password is required',
// 				minLength: {
// 					value: 6,
// 					message: 'Password must be 6 characters or longer',
// 				},
// 			})}
// 			className='input input-bordered w-full max-w-xs'
// 		/>
// 		<label className='label'>
// 			<span className='label-text'>Forget Password?</span>
// 		</label>
// 		{errors.password && (
// 			<p className='text-red-600'>{errors.password?.message}</p>
// 		)}
// 	</div>

// 	<input
// 		className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full'
// 		value='Login'
// 		type='submit'
// 	/>

// 	<div>{loginError && <p className='text-red-600'>{loginError}</p>}</div>
// </form>;