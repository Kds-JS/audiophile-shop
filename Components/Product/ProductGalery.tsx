import React from 'react';
import {ProductGallery} from 'product';

const ProductGalery = ({productGallery} : {productGallery : ProductGallery}) => {
    // console.log(productGallery);

    return (
        <section className='my-[100px]'>
            <div className='grid gap-x-4 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 '>
                <div className='flex gap-6 lg:gap-9 flex-col lg:col-span-2'>
                    <picture>
                        <source media='(max-width: 768px)' srcSet={productGallery.first.mobile} />
                        <source media='(max-width: 1200px)' srcSet={productGallery.first.tablet} />
                        <source media='(min-width: 1201px)' srcSet={productGallery.first.desktop} />
                        <img src={productGallery.first.mobile} alt="product image" className=' rounded-lg '/>
                    </picture>

                    <picture>
                        <source media='(max-width: 768px)' srcSet={productGallery.second.mobile} />
                        <source media='(max-width: 1200px)' srcSet={productGallery.second.tablet} />
                        <source media='(min-width: 1201px)' srcSet={productGallery.second.desktop} />
                        <img src={productGallery.second.mobile} alt="product image" className=' rounded-lg '/>
                    </picture>
                </div>

                <div className='lg:col-span-3'>
                    <picture>
                        <source media='(max-width: 768px)' srcSet={productGallery.third.mobile} />
                        <source media='(max-width: 1200px)' srcSet={productGallery.third.tablet} />
                        <source media='(min-width: 1201px)' srcSet={productGallery.third.desktop} />
                        <img src={productGallery.third.mobile} alt="product image" className=' rounded-lg object-cover'/>
                    </picture>
                </div>

            </div>

        </section>
    );
};

export default ProductGalery;