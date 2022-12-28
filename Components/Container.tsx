import React, { ReactChild,ReactChildren } from 'react';
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
            <Footer/>
        </>
    );
};

export default Container;