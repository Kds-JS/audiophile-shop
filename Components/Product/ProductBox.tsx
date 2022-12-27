import React,{useState} from 'react';
import {formatPrice} from 'utils/helpers';

import {ProductTypes} from 'product';
import { useAppSelector, useAppDispatch } from 'redux/app/hooks';
import {addItemToCart} from 'redux/features/cartSlice';


const ProductBox = ({product} : { product: ProductTypes }) => {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(1);

    const incAmount = () => {
        setAmount((prevState) => prevState + 1);
    };

    const decAmount = () => {
        setAmount((prevState) => {
        if (prevState === 1) {
            return 1;
        }
        return prevState - 1;
        });
    };

  const addToCart = () => {
    const item = {
        id : product.slug,
        name: product.shortName,
        price: product.price,
        amount,
        img: product.image.desktop,
    };
    dispatch(addItemToCart(item));
    // dispatch(toggleCartAside());
    setAmount(1);
  };

    return (
        <div className='grid justify-center items-center gap-6 grid-cols-1 md:grid-cols-2 mt-[50px]'>

        <picture>
            <source media='(max-width: 768px)' srcSet={product.image.mobile} />
            <source media='(max-width: 1200px)' srcSet={product.image.tablet} />
            <source media='(min-width: 1201px)' srcSet={product.image.desktop} />
            <img src={product.image.mobile} alt={product.name} />
        </picture>

        <div className='pl-0 lg:pl-[20%] '>
            {product.new && <p className='mb-[20px] text-primary-800 tracking-widest font-medium'>NEW PRODUCT</p>}
            <h3 className='text-black tracking-wider'>{product.name}</h3>
            <p className='mt-[25px] mb-[35px] text-secondary-700'>{product.description}</p>

            <div className='font-bold text-black'>
                {formatPrice(product.price)}
            </div>
            
            <div className='flex gap-4 items-center my-[25px]'>

                <div className=' py-[12px] px-[20px] bg-secondary-800 flex justify-between w-[130px] text-black font-semibold'>
                    <span className='cursor-pointer' onClick={decAmount}>-</span>
                    <span className='cursor-pointer'>{amount}</span>
                    <span className='cursor-pointer' onClick={incAmount}>+</span>
                </div>

                <div>
                    <button className='btn-primary bg-primary-800 text-white hover:opacity-70' onClick={addToCart}>ADD TO CART</button>
                </div>

            </div>
         </div>
        </div>
    );
};

export default ProductBox;