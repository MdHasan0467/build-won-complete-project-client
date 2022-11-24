import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import CustomCarousel from './Carousel/CustomCarousel';
import Feedback from './ExtraSection/Feedback/Feedback';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div className='my-2'>           
            <CustomCarousel></CustomCarousel>  
            <Advertisement></Advertisement>
            <ProductCategory></ProductCategory>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;