import BestGear from 'Components/BestGear';
import Category from 'Components/Category';
import React from 'react';
import Hero from './Hero';
import Product from './HomeProduct';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="my-[100px] px-[4%] xl:px-[13%]">
        <Category />
      </div>
      <Product />
      < BestGear/>
    </>
  );
};

export default Home;
