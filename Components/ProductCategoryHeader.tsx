import React from 'react';

type ProductCategoryType = {
    title : string
}
const ProductCategoryHeader = ({title} : ProductCategoryType) => {
    return (
        <div className='h-[245px] flex justify-center items-center bg-primary-600 text-white uppercase'>
            <h3>{title}</h3>
        </div>
    );
};

export default ProductCategoryHeader;