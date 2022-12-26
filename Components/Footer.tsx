import React from 'react';
import logo from 'assets/images/shared/desktop/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-primary-600 px-[4%] md:px-[6%] xl:px-[13%] py-[60px]'>
            <div className='flex gap-10 flex-col md:flex-row justify-between items-center ' >
               

                <Link href="/">
                    <Image src={logo} alt="logo" />  
                </Link>

                <div className='flex flex-col justify-center items-center md:flex-row gap-4 font-medium uppercase text-white'>
                    <Link href="/" className='hover:text-primary-800 transition-colors duration-150 '>
                        Home
                    </Link>
                    <Link href="/category/headphones" className='hover:text-primary-800 transition-colors duration-150'>
                    Headphones
                    </Link>
                    <Link href="/category/speakers" className='hover:text-primary-800 transition-colors duration-150'>
                        Speakers
                    </Link>
                    <Link href="/category/earphones" className='hover:text-primary-800 transition-colors duration-150'>
                    Earphone
                    </Link>
                   
                </div>

            </div>

            <div className='lg:w-[50%] my-[35px]'>
                <p className='text-secondary-700 text-center md:text-start'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
            </div>

            <div className='flex flex-col md:flex-row gap-6 items-center lg:items-start justify-between h-[100px]'>
                <p className=' lg:self-end  text-secondary-700'>Copyright 2021. All Rights Reserved</p>
                <div className='flex gap-4 text-white text-[1.5rem]'>
                    <FaFacebookSquare className='hover:text-primary-800 transition-colors duration-150 cursor-pointer'/>
                    <FaTwitter className='hover:text-primary-800 transition-colors duration-150 cursor-pointer'/>
                    <FaInstagram className='hover:text-primary-800 transition-colors duration-150 cursor-pointer'/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;