import React from 'react';

const CustomCarousel = () => {
	return (
		<div>
			<div className='carousel w-full'>
				<div id='slide1' className='carousel-item relative w-full'>
					<img src='car-1.jpg' className='w-full h-[600px]' />
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a href='#slide4' className='btn btn-circle hover:bg-green-400 border-0'>
							❮
						</a>
						<a href='#slide2' className='btn btn-circle hover:bg-green-400 border-0'>
							❯
						</a>
					</div>
				</div>
				<div id='slide2' className='carousel-item relative w-full'>
					<img src='car-2.jpg' className='w-full h-[600px]' />
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a href='#slide1' className='btn btn-circle hover:bg-green-400 border-0'>
							❮
						</a>
						<a href='#slide3' className='btn btn-circle hover:bg-green-400 border-0'>
							❯
						</a>
					</div>
				</div>
				<div id='slide3' className='carousel-item relative w-full'>
					<img src='car-3.jpg' className='w-full h-[600px]' />
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a href='#slide2' className='btn btn-circle hover:bg-green-400 border-0'>
							❮
						</a>
						<a href='#slide4' className='btn btn-circle hover:bg-green-400 border-0'>
							❯
						</a>
					</div>
				</div>
				<div id='slide4' className='carousel-item relative w-full'>
					<img src='car-4.png' className='w-full h-[600px]' />
					<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
						<a href='#slide3' className='btn btn-circle border-0 hover:bg-green-400'>
							❮
						</a>
						<a href='#slide1' className='btn btn-circle border-0 hover:bg-green-400'>
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomCarousel;