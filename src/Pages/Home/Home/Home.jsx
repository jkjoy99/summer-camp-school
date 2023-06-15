import React from 'react';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import PopularClasses from '../PopularClasses/PopularClasses';
import Gallery from '../../Gallery/Gallery';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import OurSkill from '../../OurSkill/OurSkill';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Music Instrument | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <PopularClasses></PopularClasses>
            <Gallery></Gallery>
            <OurSkill></OurSkill>
        </div>
    );
};

export default Home;