import ProductCategory from 'Components/ProductCategory';
import React from 'react';
import {products} from 'Data/products.json';

export default function HeadphonesPage (props){
    // console.log(props.product)
    return (
        <div>
            <ProductCategory products={props.product}/>
        </div>
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