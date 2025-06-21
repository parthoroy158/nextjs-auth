import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='text-center mt-10 space-x-2'>
            <Link href='/'>
                Home
            </Link>
            <Link href='/registration'>
                Registration
            </Link>
        </div>
    );
};

export default Navbar;