import React from 'react';
import {ProductOthers} from 'product';
import Link from 'next/link';

const OtherProduct = ({otherProduct} : {otherProduct : ProductOthers[]}) => {
   console.log(otherProduct);

    return (
        <section className='my-[100px]'>
            <h2 className='mb-[50px] text-black text-center'>YOU MAY ALSO LIKE</h2>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
                {otherProduct.map((item,index) => {
                    return(
                        <div className='text-center' key={index}>
                            <picture>
                                <source media='(max-width: 768px)' srcSet={item.image.mobile} />
                                <source media='(max-width: 1200px)' srcSet={item.image.tablet} />
                                <source media='(min-width: 1201px)' srcSet={item.image.desktop} />
                                <img src={item.image.mobile} alt="product image" className=' rounded-lg object-cover'/>
                            </picture>

                            <h3 className='text-black my-[30px]'>{item.name}</h3>

                            <Link href={`/products/${item.slug}`} className='btn-primary bg-primary-800 text-white hover:opacity-70'>SEE PRODUCT</Link>
                        </div>
                    )
                })}

                
            </div>

        </section>
    );
};

export default OtherProduct;