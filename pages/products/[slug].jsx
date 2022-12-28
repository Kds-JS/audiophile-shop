import Link from 'next/link';
import React from 'react';
import {products} from 'Data/products.json';
import { GetStaticPaths } from 'next';

// import {ProductTypes} from 'product';

import Category from 'Components/Category';
import ProductFeature from 'Components/Product/ProductFeature';
import ProductBox from 'Components/Product/ProductBox';
import ProductGalery from 'Components/Product/ProductGalery';
import OtherProduct from 'Components/Product/OtherProduct';
import BestGear from 'Components/BestGear';

const product = (props) => {
    const product = props.product;
    
    return (
        <>

        <section className='px-[4%] md:px-[6%] xl:px-[13%] py-[50px]'>
            <Link href="/" className='hover:text-primary-800 '>Go Back</Link>
           
            
            <ProductBox product={product[0]}/>

            <ProductFeature features={product[0].features} includedItems={product[0].includedItems}/>

            <ProductGalery productGallery = {product[0].gallery}/>

            <OtherProduct otherProduct = {product[0].others}/>

            <div className='mt-[150px]'>
                <Category/>
            </div>

        </section>

        <BestGear/>
        
        </>
    )
};

export default product;




export async function getStaticProps(context){

    const slug = context.params.slug;
    // console.log(slug);
    const product = products.filter(item => item.slug == slug);


    return {
        props: {
            product
        }
    }
}

export async function getStaticPaths(){

    const data = products;

    const paths = data.map(item => ({
        params: {slug: item.slug}
    }))

    return {
        paths,
        fallback: false
    }
}