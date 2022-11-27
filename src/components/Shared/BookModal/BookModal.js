import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookModal = ({ selected, setSelected }) => {
    
	const {  user } = useContext(AuthContext);


    const handleModalValue = e => {
        e.defaultPrevent()
        const data = {
					sellerName : e.target.value.sellerName,
        };
        console.log(data);
    }
	return (
		<div className='modal_body'>
			<input type='checkbox' id='booking-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
                    <form onSubmit={handleModalValue} className='modal_card'>
                        <input type="text" name='sellerName' readOnly defaultValue={user?.displayName} className="input text-center input-bordered w-full " />

                        <input type="text" readOnly defaultValue={user?.email} className="input input-bordered text-center  my-3 w-full " />
                        <div className='my-3'>
                            
                         <h1 className='text-start'>Brand :</h1>
                        <input type="text" readOnly defaultValue={selected?.category} className="input input-bordered w-full " />
                        </div>
                        <div className='my-3'>
                         <h1 className='text-start'>Product Model :</h1>
                        <input type="text" readOnly defaultValue={selected?.title} className="input input-bordered w-full " />
                        </div>
                        <div className='my-3'>
                         <h1 className='text-start'>Resell Price :</h1>
                        <input type="text" readOnly defaultValue={selected?.resalePrice} className="input input-bordered w-full " />
                        </div>
                        <div className='my-3'>
                         <h1 className='text-start'>Seller Location :</h1>
                        <input type="text" readOnly defaultValue={selected?.location} className="input input-bordered w-full " />
                        </div>
					
                        <div className='btn-group mt-8 mb-3'>
                            <button type='submit' htmlFor='booking-modal' className='btn border-0 hover:bg-green-400 text-white'>
                                Confirm
                            </button>
                            <div className='bg-white w-[2px] h-full'></div>
                            <button htmlFor='booking-modal' className='btn border-0 hover:bg-red-600 text-white'>
                                Cancel
                            </button>
                        </div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookModal;



