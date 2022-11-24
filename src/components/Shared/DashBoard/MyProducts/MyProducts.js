import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {

	//! fetch for getting products data from mongodb.....
	const { data: products } = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			try {
				const res = await fetch('http://localhost:5000/products');
				const data = await res.json();
				return data;
			}
			catch (err) {
				console.error(err);
			}
		},
	});



	const handleAdvertise = (id) => {
		fetch(`http://localhost:5000/productById/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				if (data) {
							fetch('http://localhost:5000/advertisement', {
								method: 'POST',
								headers: {
									'content-type': 'application/json',
								},
								body: JSON.stringify(data),
							})
								.then((res) => res.json())
								.then((ad) => {
									console.log(ad);
								});
						}
			});
		
		

		
		
		
	};

// console.log(products);
    return (
			<div className='mx-12'>
				<h1>My Products{products?.length}</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
					{products?.map((product) => (
						<div key={product._id} className='card  bg-base-100 shadow-xl'>
							<figure>
								<img
									src={product.image}
									className='w-full h-[250px]'
									alt='Shoes'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>{product.title}</h2>
								<p>
									<span className='text-bold text-gray-800 text-xl'>
										Category :
									</span>
									{product.category}
								</p>
								<p>
									<span className='text-bold text-gray-800 text-xl'>
										Location :
									</span>
									{product.location}
								</p>
								<p>
									<span className='text-bold text-gray-800 text-xl'>
										Original Price :
									</span>
									{product.originalPrice}
								</p>
								<p>
									<span className='text-bold text-gray-800 text-xl'>
										Resale Price :
									</span>
									{product.resalePrice}
								</p>
								<p>
									<span className='text-bold text-gray-800 text-xl'>
										Years of use :
									</span>
									{product.yearsOfUse}
								</p>
								<p>
									<span className='text-bold text-gray-800 text-xl'>
										Year of Purchase :
									</span>
									{product.yearOfPurchase}
								</p>
								<p>
									<span className='text-bold text-gray-800 text-xl'>
										Description :
									</span>
									{product.description}
								</p>
								<div className='flex'>
									<button
										onClick={() => handleAdvertise(product?._id)}
										className='btn btn-sm mx-2 bg-green-500 hover:bg-green-600 border-0 text-white'
									>
										Advertise Now
									</button>
									<button className='btn btn-sm mx-2 text-white'>Unsold</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
};

export default MyProducts;

