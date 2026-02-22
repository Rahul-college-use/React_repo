import React from 'react';
import Logo from './Logo';
import Nav_link from './Nav_link';
const Navbar = () => {
    return (
        <div className='h-20'>
            <div className="flex justify-between items-center px-6 py-2 bg-white shadow-md">

            <Logo/>
            <Nav_link />
             
            </div>
        </div>
    );
}

export default Navbar;
