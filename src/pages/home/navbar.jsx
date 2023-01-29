import Menubar from '@/components/icons/menubar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import websiteLogo from '../../assets/Images/portfolio-logo.png'

const Navbar = () => {
    return (
        <header className='w-{100%} h-[120px] bg-secondary-600 flex   justify-center lg:justify-around xl:justify-around 2xl:justify-around gap-8 items-center'>
            <div className='md:pl-5 pl-0 w-[226px] flex justify-center items-center'> 
            <Link href={"/"}>
                <Image src={websiteLogo} width={226} height={56} alt="website-logo" />
            </Link>
            </div>
            <div className='flex justify-center items-center gap-[50px] '>
                <nav className='md:flex hidden lg:flex xl:flex 2xl:flex list-none gap-[30px] w-[307px]'>
                    <Link href={"/"}><li className='text-gray-600 font-medium text-base leading-[19px] hover:text-black-600'>Home</li></Link>
                    <Link href={"/"}><li className='text-gray-600 font-medium text-base leading-[19px] hover:text-black-600'>About</li></Link>
                    <Link href={"/"}><li className='text-gray-600 font-medium text-base leading-[19px] hover:text-black-600'>Services</li></Link>
                    <Link href={"/"}><li className='text-gray-600 font-medium text-base leading-[19px] hover:text-black-600'>Projects</li></Link>
                </nav>
                <div className='block md:hidden lg:hidden xl:hidden 2xl:hidden'>
                    <Menubar/>
                </div>
                <button className='hidden md:block lg:block xl:block 2xl:block lg:h-[54px] md:h-10 md:w-[140px] sm:h-10 sm:w-[140px] lg:w-[170px] text-primary-600 border-2 border-primary-600 rounded-full   font-medium text-xl leading-[19px]'>
                    HIRE ME
                </button>
            </div>
        </header >
    ); 
};

export default Navbar;