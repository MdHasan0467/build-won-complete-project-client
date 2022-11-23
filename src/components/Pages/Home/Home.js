import React from 'react';
import CustomCarousel from './Carousel/CustomCarousel';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div className='my-2'>           
            <CustomCarousel></CustomCarousel>  
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default Home;