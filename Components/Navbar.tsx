import React, { useState } from 'react';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai';
import logo from 'assets/images/shared/desktop/logo.svg';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const showMenu = () => {
        setShowMobileMenu(!showMobileMenu);
        setShowCart(false);
    }

    const showCartModal = () => {
        setShowMobileMenu(false);
        setShowCart(!showCart);
    }

    return (
        <header className='bg-primary-600 text-white px-[4%] md:px-[6%] xl:px-[13%] border-b border-opacity-20 border-secondary-600 relative'>

            <nav>
                <div className='flex justify-between items-center py-[30px]' >
                    <div className='text-[35px] block lg:hidden' onClick={showMenu}>
                        {!showMobileMenu ? <HiOutlineMenuAlt1/> : <AiOutlineClose/>}
                    </div>

                    <Link href="/">
                        <Image src={logo} alt="logo" />  
                    </Link>

                    <div className='hidden lg:flex gap-4 font-medium uppercase'>
                        <Link href="/" className='hover:text-primary-800 transition-colors duration-150'>
                            Home
                        </Link>
                        <Link href="/headphones" className='hover:text-primary-800 transition-colors duration-150'>
                        Headphones
                        </Link>
                        <Link href="/speakers" className='hover:text-primary-800 transition-colors duration-150'>
                            Speakers
                        </Link>
                        <Link href="/earphones" className='hover:text-primary-800 transition-colors duration-150'>
                        Earphone
                        </Link>
                    
                    </div>

                    <div className=' relative cursor-pointer' onClick={showCartModal}>
                        <AiOutlineShoppingCart className='text-[30px]'/>
                        <div className='bg-primary-800 text-white h-[20px] w-[20px] rounded-full absolute -top-1 -right-2 flex justify-center items-center font-bold'>
                            5
                        </div>
                    </div>

                    
                </div>

                <div className={`py-[50px] bg-white shadow-2xl rounded-lg absolute m-auto top-[130%] left-[10%] right-[10%] ${!showMobileMenu ? 'hidden ' : 'block'}`} >
                <div className='flex justify-center items-center flex-col gap-4 font-medium uppercase text-black text-[20px]'>
                        <Link href="/" className='hover:text-primary-800 transition-colors duration-150'>
                            Home
                        </Link>
                        <Link href="/headphones" className='hover:text-primary-800 transition-colors duration-150'>
                        Headphones
                        </Link>
                        <Link href="/speakers" className='hover:text-primary-800 transition-colors duration-150'>
                            Speakers
                        </Link>
                        <Link href="/earphones" className='hover:text-primary-800 transition-colors duration-150'>
                        Earphone
                        </Link>
                    
                    </div>
                </div>    
            </nav>  
            
            <div className={`cart-modal h-[100vh] absolute m-auto top-[100%] left-0 right-0 ${!showCart ? 'hidden' : 'block'}`}>
                <div className='flex items-center lg:items-start justify-center md:justify-end mt-[50px] mr-0 md:mr-[6%] lg:mr-[12%] text-[18px]'>
                    <div className='p-[30px] w-[92%] md:w-[70%] lg:w-[40%] bg-white shadow-2xl text-black rounded-lg'>
                        <div className='flex justify-between'>
                            <h3>CART (2) </h3>
                            <button className='text-secondary-600 underline hover:text-primary-800'>Remove all</button>
                        </div>

                        <div className='flex justify-between items-center my-[25px]'>
                            <div className='flex gap-4'>
                                <Image src="/assets/images/product-yx1-earphones/mobile/image-product.jpg" alt="image" width={70} height={70}/>
                                <div className='flex flex-col gap-3'>
                                    <span className='font-bold'>XX99 MK ll</span>
                                    <span className='text-secondary-600'>$2,999.00</span>
                                </div>

                            </div>

                            <div>
                                Input
                            </div>
                        </div>

                        <div className='flex justify-between my-[25px] items-center'>
                            <span className='text-secondary-600'>TOTAL</span>
                            <span className='font-bold'>$5,998.00</span>
                        </div>

                        <Link href="/">
                            <button className='w-[100%] py-[15px] bg-primary-800 text-white font-bold hover:opacity-80'>CHECKOUT</button>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;