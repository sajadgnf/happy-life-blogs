import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;