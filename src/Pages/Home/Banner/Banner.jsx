import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel className='bg-blue-950 text-white'>
        <div className='h-[700px]'>
            <img src="https://img.freepik.com/free-vector/gradient-music-festival-instagram-posts-collection_52683-109473.jpg?w=996&t=st=1686379784~exp=1686380384~hmac=e4e6d41e8b66a6c68149f6e0e30b9e49dc99f6a929ee0a6a77c2f37cdcd9e0e3" />
        </div>
        <div className='h-[700px]'>
            <img src="https://img.freepik.com/free-vector/realistic-guitar-lessons-instagram-posts-collection_23-2149331358.jpg?w=996&t=st=1686379886~exp=1686380486~hmac=10e31a8da8fb57891fe766218f83b97d1e547239ab9ff83aae597f964951c8c7" />
        </div>
        <div className='h-[700px]'>
            <img src="https://img.freepik.com/free-vector/flat-instagram-posts-collection-world-music-day-celebration_23-2150395802.jpg?w=996&t=st=1686380111~exp=1686380711~hmac=8e1a75d7f45be8e946a366bcafad8e570e1b30a5be8a94036a4d03919e7b8c9d" />
        </div>
        <div className='h-[700px]'>
            <img src="https://img.freepik.com/free-vector/world-music-day-gradient-background_23-2149397900.jpg?w=740&t=st=1686378926~exp=1686379526~hmac=f2903caa9c5f97197efd8f57b0ac2ccb1610786193cbfd9006d0844aa5bfec80" />
        </div>
    </Carousel>
    );
};

export default Banner;