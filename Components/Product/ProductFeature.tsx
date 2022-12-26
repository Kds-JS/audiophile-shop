import React from 'react';
import { ProductIncludes } from 'product';



const ProductFeature = ({features, includedItems} : { features : string; includedItems: ProductIncludes[] }) => {
    const featuresArr = features.split(/\r?\n/).filter((item) => item !== '');

    return (
        <div className='grid gap-x-40 gap-y-8 grid-cols-1 lg:grid-cols-3 mt-[50px]'>
                <div className='col-span-2'>
                    <h2 className='text-black'>Feature</h2>
                    {featuresArr.map((item, index) => {
                    return (
                        <p key={index} className="mt-[25px]">
                        {item}
                        </p>
                    );
                    })}
                </div>

                <div className='flex flex-col md:flex-row lg:flex-col gap-y-6 gap-x-40 '>
                    <h2 className='text-black'>IN THE BOX</h2>
                    <div className='flex flex-col gap-2'>
                        {includedItems.map((item, index) => {
                            return(
                                <div className='flex gap-6 items-center' key={index}>
                                    <span className='text-primary-800 font-semibold'>{item.quantity}x</span>
                                    <span className='font-semibold'>{item.item}</span>
                                </div>
                            )
                        })}
                        
                        
                    </div>
                </div>
            </div>
    );
};

export default ProductFeature;