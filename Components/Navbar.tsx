import React, { useState, useEffect } from 'react';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import logo from 'assets/images/shared/desktop/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from 'utils/helpers';

import { useAppSelector, useAppDispatch } from 'redux/app/hooks';
import { toggleCartInfo, clearCart, incItemAmount, decItemAmount } from 'redux/features/cartSlice';
import {  toggleCartModal} from 'redux/features/modalSlice';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  amount: number;
  img: string;
}

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showModal, setShowModal] = useState(false);

  const newCart = useAppSelector((state) => state.cart);
  const newModal = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const toggleModal = () => {
    dispatch(toggleCartModal());
  };

  useEffect(() => {
    setCart(newCart.cart);
    updateCartInfos();
  }, [newCart]);

  useEffect(() => {
    setShowModal(newModal.isCartOpen);
  }, [newModal]);


  const updateCartInfos = () => {
      dispatch(toggleCartInfo());
  }

  const showMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };



  return (
    <header className="bg-primary-600 text-white px-[4%] md:px-[6%] xl:px-[13%] border-b border-opacity-20 border-secondary-600 relative">
      <nav>
        <div className="flex justify-between items-center py-[30px]">
          <div className="text-[35px] block lg:hidden" onClick={showMenu}>
            {!showMobileMenu ? <HiOutlineMenuAlt1 /> : <AiOutlineClose />}
          </div>

          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>

          <div className="hidden lg:flex gap-4 font-medium uppercase">
            <Link
              href="/"
              className="hover:text-primary-800 transition-colors duration-150"
            >
              Home
            </Link>
            <Link
              href="/category/headphones"
              className="hover:text-primary-800 transition-colors duration-150"
            >
              Headphones
            </Link>
            <Link
              href="/category/speakers"
              className="hover:text-primary-800 transition-colors duration-150"
            >
              Speakers
            </Link>
            <Link
              href="/category/earphones"
              className="hover:text-primary-800 transition-colors duration-150"
            >
              Earphone
            </Link>
          </div>

          <div className=" relative cursor-pointer" 
          onClick={() => {
            toggleModal()
            setShowMobileMenu(false)
          }}
          >
            <AiOutlineShoppingCart className="text-[30px]" />
            <div className="bg-primary-800 text-white h-[20px] w-[20px] rounded-full absolute -top-1 -right-2 flex justify-center items-center font-bold">
              {newCart.amount}
            </div>
          </div>
        </div>

        <div
          className={`py-[50px] bg-white shadow-2xl rounded-lg absolute m-auto top-[130%] left-[10%] right-[10%] ${
            !showMobileMenu ? 'hidden ' : 'block'
          }`}
        >
          <div className="flex justify-center items-center flex-col gap-4 font-medium uppercase text-black text-[20px]">
            <Link
            onClick={() => setShowMobileMenu(false)}
              href="/"
              className="hover:text-primary-800 transition-colors duration-150"
            >
              Home
            </Link>
            <Link
              onClick={() => setShowMobileMenu(false)}
              href="/category/headphones"
              className="hover:text-primary-800 transition-colors duration-150"
            >
              Headphones
            </Link>
            <Link
              onClick={() => setShowMobileMenu(false)}
              href="/category/speakers"
              className="hover:text-primary-800 transition-colors duration-150"
            >
              Speakers
            </Link>
            <Link
              onClick={() => setShowMobileMenu(false)}
              href="/category/earphones"
              className="hover:text-primary-800 transition-colors duration-150"
            >
              Earphone
            </Link>
          </div>
        </div>
      </nav>

 
      <div className={`fixed inset-0 ${showModal ? 'flex' : 'hidden'}`}>
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30" onClick={toggleModal}></div>
        <div className="flex items-start justify-center md:justify-end  w-[100%] mr-0 md:mr-[6%] lg:mr-[12%] ">

          {cart.length == 0 ? (
              <div className="relative z-50 p-[30px] w-[92%] md:w-[70%] lg:w-[40%] bg-white shadow-2xl text-black rounded-lg mt-[150px]">
                <p className='text-black font-semibold text-[20px] text-center'>YOUR CART IS EMPTY. <br /> <br /> FILL IT!</p>
              </div>
          )
        :
        (

          <div className="relative z-50 p-[30px] w-[92%] md:w-[70%] lg:w-[40%] bg-white shadow-2xl text-black rounded-lg mt-[150px]">
            <div className="flex justify-between">
              <h3>CART ({newCart.amount}) </h3>
              <button
                className="text-secondary-600 underline hover:text-primary-800"
                onClick={() => dispatch(clearCart())}
              >
                Remove all
              </button>
            </div>

            {cart.length != 0 &&
              cart.map((item, index) => (
                <div
                  className="flex justify-between items-center my-[25px]"
                  key={index}
                >
                  <div className="flex gap-4">
                    <Image src={item.img} alt="image" width={70} height={70} />
                    <div className="flex flex-col gap-3">
                      <span className="font-bold">{item.name}</span>
                      <span className="text-secondary-600">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>

                  <div className=" py-[12px] px-[20px] bg-secondary-800 flex justify-between w-[130px] text-black font-semibold">
                    <span className="cursor-pointer" onClick={() => dispatch(decItemAmount(item.id))}>-</span>
                    <span className="cursor-pointer">{item.amount}</span>
                    <span className="cursor-pointer" onClick={() => dispatch(incItemAmount(item.id))}>+</span>
                  </div>
                </div>
              ))}

            <div className="flex justify-between my-[25px] items-center">
              <span className="text-secondary-600">TOTAL</span>
              <span className="font-bold">{formatPrice(newCart.total)}</span>
            </div>

            <Link href="/checkout" onClick={toggleModal}>
              <button className="w-[100%] py-[15px] bg-primary-800 text-white font-bold hover:opacity-80">
                CHECKOUT
              </button>
            </Link>
          </div>

          )
          }
          
          </div>
      </div>

    </header>
  );
};

export default Navbar;
