import ProductCategoryHeader from 'Components/ProductCategoryHeader';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {products} from 'Data/products.json';
import Category from 'Components/Category';

const Speakers = () => {
    console.log(products);

    return (
        <>
            <ProductCategoryHeader title='speakers'/>
            <section className='my-[120px] px-[4%] md:px-[6%] xl:px-[13%]'>
                <div className='grid justify-center items-center gap-6 grid-cols-1 lg:grid-cols-2'>
                    <div >
                        <Image src={products[5].image.desktop} alt="head" className='rounded-lg hidden lg:block' width={1080} height={1120}/>
                        <Image src={products[5].image.tablet} alt="head" className='rounded-lg hidden md:block lg:hidden' width={562} height={960}/>
                        <Image src={products[5].image.mobile} alt="head" className='rounded-lg md:hidden' width={654} height={654}/>
                    </div>

                    <div className=' text-center lg:text-left pl-0 lg:pl-[20%] '>
                        <p className='mb-[20px] text-primary-800 tracking-widest font-medium'>NEW PRODUCT</p>
                        <h2 className='text-black tracking-wider'>{products[5].name}</h2>
                        <p className='mt-[25px] mb-[35px] text-secondary-700'>{products[5].description}</p>
                        <div>
                            <Link href="/" className='btn-primary bg-primary-800 text-white hover:bg-primary-900'>SEE PRODUCT</Link>
                        </div>
                     </div>
                </div>

                <div className='grid justify-center items-center gap-6 grid-cols-1 lg:grid-cols-2 my-[150px]'>
                    <div className=' text-center lg:text-left pr-0 lg:pr-[20%] order-2 md:order-1'>
                        <p className='mb-[20px] text-primary-800 tracking-widest font-medium'>NEW PRODUCT</p>
                        <h2 className='text-black tracking-wider'>{products[4].name}</h2>
                        <p className='mt-[25px] mb-[35px] text-secondary-700'>{products[4].description}</p>
                        <div>
                            <Link href="/" className='btn-primary bg-primary-800 text-white hover:bg-primary-900'>SEE PRODUCT</Link>
                        </div>
                     </div>

                    <div className='order-1 md:order-2'>
                        <Image src={products[4].image.desktop} alt="head" className='rounded-lg hidden lg:block' width={1080} height={1120}/>
                        <Image src={products[4].image.tablet} alt="head" className='rounded-lg hidden md:block lg:hidden' width={562} height={960}/>
                        <Image src={products[4].image.mobile} alt="head" className='rounded-lg md:hidden' width={654} height={654}/>
                    </div>

                    
                </div>

                
            </section>

            <div className='my-[100px] px-[4%] md:px-[6%] xl:px-[13%]'>
                <Category/>
            </div>
        </>
    );
};

export default Speakers;