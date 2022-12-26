import ProductCategoryHeader from 'Components/ProductCategoryHeader';
import React from 'react';
import Link from 'next/link';


import Category from 'Components/Category';

import {ProductTypes} from 'product';

const ProductCategory = ({products} : {products : ProductTypes[]}) => {
    // console.log(products);

    function numIsImpair(n:number) {
        return (n & 1) ? true : false;
      }

    return (
        <>
            <ProductCategoryHeader title={products[0].category}/>
            <section className='my-[120px] px-[4%] md:px-[6%] xl:px-[13%]'>
                {products.map((item, index) => {
                    if(numIsImpair(index)){
                        return(
                            <div className='grid justify-center items-center gap-6 grid-cols-1 lg:grid-cols-2 my-[150px]'>
                                <div className=' text-center lg:text-left pr-0 lg:pr-[20%] order-2 lg:order-1'>
                                    {item.new && <p className='mb-[20px] text-primary-800 tracking-widest font-medium'>NEW PRODUCT</p>}
                                    <h2 className='text-black tracking-wider'>{item.name}</h2>
                                    <p className='mt-[25px] mb-[35px] text-secondary-700'>{item.description}</p>
                                    <div>
                                        <Link href={`/products/${item.slug}`} className='btn-primary bg-primary-800 text-white hover:bg-primary-900'>SEE PRODUCT</Link>
                                    </div>
                                </div>

                                <div className='order-1 lg:order-2'>
                                    <picture>
                                        <source media='(max-width: 768px)' srcSet={item.image.mobile} />
                                        <source media='(max-width: 1200px)' srcSet={item.image.tablet} />
                                        <source media='(min-width: 1201px)' srcSet={item.image.desktop} />
                                        <img src={item.image.mobile} alt={item.name} />
                                    </picture>
                                </div>

                    
                            </div>
                        )
                    } else {
                        return(
                            <div className='grid justify-center items-center gap-6 grid-cols-1 lg:grid-cols-2' key={index}>
                                <picture>
                                    <source media='(max-width: 768px)' srcSet={item.image.mobile} />
                                    <source media='(max-width: 1200px)' srcSet={item.image.tablet} />
                                    <source media='(min-width: 1201px)' srcSet={item.image.desktop} />
                                    <img src={item.image.mobile} alt={item.name} />
                                </picture>
    
                                <div className=' text-center lg:text-left pl-0 lg:pl-[20%] '>
                                    {item.new && <p className='mb-[20px] text-primary-800 tracking-widest font-medium'>NEW PRODUCT</p>}
                                    <h2 className='text-black tracking-wider'>{item.name}</h2>
                                    <p className='mt-[25px] mb-[35px] text-secondary-700'>{item.description}</p>
                                    <div>
                                        <Link href={`/products/${item.slug}`} className='btn-primary bg-primary-800 text-white hover:bg-primary-900'>SEE PRODUCT</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

                
            </section>

            <div className='my-[100px] px-[4%] md:px-[6%] xl:px-[13%]'>
                <Category/>
            </div>
        </>
    );
};

export default ProductCategory;