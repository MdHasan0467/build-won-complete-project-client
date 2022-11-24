import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Loader/Loader';
import Advertisement from './Advertisement/Advertisement';
import CustomCarousel from './Carousel/CustomCarousel';
import Feedback from './ExtraSection/Feedback/Feedback';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <Loader></Loader>
    }
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