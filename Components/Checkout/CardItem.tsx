import React,{useEffect, useState} from 'react';


import { useAppSelector} from 'redux/app/hooks';

import Image from 'next/image';
import { formatPrice } from 'utils/helpers';

interface CartItem {
    id: string;
    name: string;
    price: number;
    amount: number;
    img: string;
  }

const CardItem = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const newCart = useAppSelector((state) => state.cart);



    useEffect(() => {
        setCart(newCart.cart);
    }, [newCart]);


    return (
        <div className='bg-white h-[590px] rounded-md shadow-sm py-[30px] px-[25px]' >
            <h3 className='text-black'>Summary</h3>

            {cart.length != 0 &&
              cart.map((item, index) => (
                <div
                  className="flex justify-between items-start my-[25px]"
                  key={index}
                >
                  <div className="flex gap-4">
                    <Image src={item.img} alt="image" width={70} height={70} />
                    <div className="flex flex-col gap-3">
                      <span className="font-bold text-black">{item.name}</span>
                      <span className="text-secondary-600">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>

                  <div className=" text-black font-semibold">
                   x{item.amount}
                  </div>
                </div>
              ))}

              <div className='flex justify-between items-center text-[17px] font-medium'>
                <span>TOTAL</span>
                <span className='text-black'>{formatPrice(newCart.total)}</span> 

              </div>

              <div className='flex justify-between items-center text-[17px] font-medium my-[25px]'>
                <span>SHIPPING</span>
                <span className='text-black'>$50.00</span> 

              </div>

              <div className='flex justify-between items-center text-[17px] font-medium'>
                <span>VAR (INCLUDED)</span>
                <span className='text-black'>{formatPrice(newCart.total * 0.2)}</span> 

              </div>

              <div className='flex justify-between items-center text-[17px] font-medium my-[25px]'>
                <span>GRAND TOTAL</span>
                <span className='text-black'>{formatPrice(newCart.total + 50)}</span> 

              </div>

              <input type="submit" value="CONTINUE & PAY" className='py-[15px] px-[25px] w-full bg-primary-800 hover:opacity-70 text-white font-bold'/>
        </div>
    );
};

export default CardItem;