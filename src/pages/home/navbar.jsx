import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import websiteLogo from '../../assets/Images/portfolio-logo.png'

const Navbar = () => {
    return (
        <header className='w-{100%} h-[120px] bg-secondary-600 flex justify-around items-center'>
            <Link href={"/"}>
                <Image src={websiteLogo} width={226} height={56} alt="website-logo" />
            </Link>
            <div className='flex justify-center items-center gap-[50px]'>
                <nav className='flex list-none gap-[30px]'>
                    <Link href={"/"}><li className='text-gray-600 font-medium text-base leading-[19px] hover:text-black-600'>Home</li></Link>
                    <Link href={"/"}><li className='text-gray-600 font-medium text-base leading-[19px] hover:text-black-600'>About</li></Link>
                    <Link href={"/"}><li className='text-gray-600 font-medium text-base leading-[19px] hover:text-black-600'>Services</li></Link>
                    <Link href={"/"}><li className='text-gray-600 font-medium text-base leading-[19px] hover:text-black-600'>Projects</li></Link>
                </nav>
                <button className='h-[54px] w-[170px] text-primary-600 border-2 border-primary-600 rounded-full shadow-[0px 15px 30px 0px #C63B2321] font-medium text-xl leading-[19px]'>
                    HIRE ME
                </button>
            </div>
        </header >
    ); 
};

export default Navbar;