import React from 'react';
import { FaFacebookSquare, FaGoogle, FaPhoneAlt, FaUserCircle, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer >

            <div className='lg:flex'>
                <div className="footer p-10 bg-[#1F2937] text-neutral-content lg:w-1/2">
                    <div className='lg:pl-48 lg:mx-auto'>
                        <img className='rounded-full w-16 h-16 ml-4  ' src="https://as1.ftcdn.net/v2/jpg/05/60/63/32/1000_F_560633236_TVV7yZeu1OofG70GMpKg78vkVzoUpWRN.jpg" alt="" />
                        <p>
                           @Joy Music Instrument Learning School<br />Providing reliable tech since 2023</p>
                    </div>

                </div>
                {/*  */}
                <div className='footer p-10 lg:w-1/2 text-neutral-content bg-[#111827]'>
                    <div className='lg:pl-20'>
                        <span className="footer-title">Social</span>
                        
                    <div className="grid  gap-4">
                        <p className='flex gap-2 cursor-pointer'> <FaGoogle/> Gmail : jkjoy99@gmail.com </p>
                        <p className='flex gap-2 cursor-pointer'> <FaPhoneAlt/>  Whatsapp : +8801928895121 </p>
                        <Link to='https://www.facebook.com/joy.kundu.12327'><p className='flex gap-2 cursor-pointer'> <FaFacebookSquare/> Facebook : Joy kundu </p></Link>
                        <p className='flex gap-2 cursor-pointer'> <FaUserCircle/> Contact : +8801928895121</p>
                        
                    </div>
                       
                    </div>
                </div>
                {/*  */}
            </div>


            <div className="p-4  bg-[#151515] footer-center text-neutral-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Music Instrument </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;