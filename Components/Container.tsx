import React, { ReactChild,ReactChildren } from 'react';
import BestGear from './BestGear';
import Footer from './Footer';
import Navbar from './Navbar';


interface AuxProps {
    children: ReactChild | ReactChildren;
  }
  

const Container = ({children}: AuxProps) => {
    return (
        <>
            <Navbar/>
                {children}
            <BestGear/>
            <Footer/>
        </>
    );
};

export default Container;