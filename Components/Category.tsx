import React from 'react';
import headphone from 'assets/images/shared/desktop/image-headphones.png';
import earphone from 'assets/images/shared/desktop/image-earphones.png';
import speaker from 'assets/images/shared/desktop/image-speakers.png';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineNavigateNext } from 'react-icons/md';

const Category = () => {
    return (
        <section>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-3 '>

                <Link href="/category/headphones">
                <div className='category-card relative h-[200px] flex flex-col justify-end shadow-sm'>
                    <div className='h-[165px] bg-secondary-800 flex flex-col items-center justify-end pb-[20px] rounded-md'>
                        <p className='text-black font-medium'>HEADPHONES</p>
                        <button className='flex mt-[15px] items-center font-medium'>SHOP <MdOutlineNavigateNext className='text-[25px]'/></button>
                    </div>
                    <div className='absolute top-0 left-[30%] md:left-[25%] lg:left-[30%]'>
                        <Image src={headphone} alt="headphone" width={130}/>
                    </div>
                </div>
                </Link>

                <Link href="/category/speakers">
                <div className='category-card relative h-[200px] flex flex-col justify-end shadow-sm '>
                    <div className='h-[165px] bg-secondary-800 flex flex-col items-center justify-end pb-[20px] rounded-md'>
                        <p className='text-black font-medium'>SPEAKERS</p>
                        <button className='flex mt-[15px] items-center font-medium'>SHOP <MdOutlineNavigateNext className='text-[25px]'/></button>
                    </div>
                    <div className='absolute top-0 left-[30%] md:left-[25%] lg:left-[30%]'>
                        <Image src={speaker} alt="headphone" width={130}/>
                    </div>
                </div>
                </Link>

                <Link href="/category/earphones">
                <div className='category-card relative h-[200px] flex flex-col justify-end shadow-sm'>
                    <div className='h-[165px] bg-secondary-800 flex flex-col items-center justify-end pb-[20px] rounded-md'>
                        <p className='text-black font-medium'>EARPHONES</p>
                        <button className='flex mt-[15px] items-center font-medium'>SHOP <MdOutlineNavigateNext className='text-[25px]'/></button>
                    </div>
                    <div className='absolute top-0 left-[30%] md:left-[25%] lg:left-[30%]'>
                        <Image src={earphone} alt="headphone" width={130}/>
                    </div>
                </div>
                </Link>
            </div>
        </section>
    );
};

export default Category;