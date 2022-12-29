import React from 'react';
import speaker from'assets/images/home/desktop/image-speaker-zx9.png';
import Link from 'next/link';
import Image from 'next/image';

const HomeProduct = () => {
    return (
        <section className='mx-[4%] md:mx-[6%] xl:mx-[13%]'>
            <div className='bg-circlesbg bg-no-repeat bg-center bg-cover bg-primary-800 rounded-lg shadow-md'>
            <div className='grid gap-6 grid-cols-1 xl:grid-cols-2 h-[560px] px-[10%] xl:px-0 py-[10%] xl:py-0'>
                <div className='relative overflow-hidden'>
                    <div className='xl:absolute -bottom-5 right-10 flex justify-center xl:block'>
                        <Image src={speaker} alt="speaker" className='w-[130px] md:w-[150px] xl:w-[400px]'/>
                    </div>
                    
                </div>

                <div className='flex flex-col justify-center text-center xl:text-left '>
                    <h1 className='text-white'>ZX9 SPEAKER</h1>
                    <p className='mt-[25px] mb-[35px] text-white lg:mr-20 md:px-[20%] lg:px-0'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <div>
                    <Link href="/products/zx9-speaker" className='btn-primary bg-primary-600 text-white hover:bg-primary-700'>SEE PRODUCT</Link>
                    </div>
                </div>

            </div>
            </div>

            <div className='bg-speakerbgmobile md:bg-speakerbgtablet lg:bg-speakerbgdesktop h-[320px] bg-no-repeat bg-center bg-cover mt-[50px] rounded-lg shadow-md flex flex-col justify-center px-[12%]'>
                <div>
                    <h2 className='text-black'>ZX7 SPEAKER</h2>
                    <div className='mt-[30px]'>
                    <Link href="/products/zx7-speaker" className='btn-primary text-black border border-black transition-all duration-30 hover:bg-black hover:text-white'>SEE PRODUCT</Link>
                    </div>
                </div>
            </div>

            <div className='mt-[50px]'>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 '>
                    <div className='bg-earphonebgmobile md:bg-earphonebgtablet lg:bg-earphonebgdesktop bg-no-repeat bg-center bg-cover rounded-lg shadow-sm h-[320px]'>

                    </div>

                    <div className='rounded-lg shadow-sm bg-secondary-800 flex flex-col justify-center px-[20%] h-[320px]'>
                        <div>
                            <h2 className='text-black'>YX1 EARPHONES</h2>
                            <div className='mt-[30px]'>
                            <Link href="/products/yx1-earphones" className='btn-primary text-black border border-black transition-all duration-300 hover:bg-black hover:text-white'>SEE PRODUCT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeProduct;