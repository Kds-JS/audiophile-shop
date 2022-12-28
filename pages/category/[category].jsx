import React from 'react';
import {products} from 'Data/products.json';
import ProductCategory from 'Components/ProductCategory';
import BestGear from 'Components/BestGear';

export default function HeadphonesPage (props){
    // console.log(props.product)
    return (
        <>
            <ProductCategory products={props.product}/>
            <BestGear/>
        </>


    );
};

export async function getStaticProps(context){

    const category = context.params.category;
    // console.log(slug);
    const product = products.filter(item => item.category == category);


    return {
        props: {
            product
        }
    }
}

export async function getStaticPaths(){

    const data = products;

    const paths = data.map(item => ({
        params: {category: item.category}
    }))

    return {
        paths,
        fallback: false
    }
}