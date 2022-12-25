import Image from 'next/image';
import React from 'react';


const BestGear = () => {
    return (
        <section className='my-[100px] px-[4%] md:px-[6%] xl:px-[13%]'>
            <div className='grid items-center gap-8 grid-cols-1 lg:grid-cols-2'>
                <div className='order-2 lg:order-1 md:px-[5%] lg:px-0 lg:pr-[25%] text-center lg:text-left'>
                    <h2 className='text-black tracking-widest'>BRINGING YOU THE <span className='text-primary-800'>BEST</span> AUDIO GEAR</h2>
                    <p className='mt-[25px]'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>

                <div className='bestgear-bg order-1 lg:order-2'>

                </div>
            </div>
        </section>
    );
};

export default BestGear;