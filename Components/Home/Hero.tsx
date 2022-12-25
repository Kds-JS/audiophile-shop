import React from 'react';
import Link from 'next/link';
// import imagedesktop from '../../assets/images/home/mobile/image-hero.jpg'

const Hero = () => {
    return (
        <section className='hero-section px-[4%] md:px-[6%] xl:px-[13%] flex items-center justify-center lg:justify-start'>
            <div className='basis-[70%] md:basis-[50%] lg:basis-[35%] text-center lg:text-left'>
                <p className='mb-[20px] tracking-widest font-medium'>NEW PRODUCT</p>
                <h1 className='text-white tracking-wider'>XX99 MARK II HEADPHONES</h1>
                <p className='mt-[25px] mb-[35px] text-secondary-700'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <div>
                    <Link href="/" className='btn-primary bg-primary-800 text-white hover:bg-primary-900'>SEE PRODUCT</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;