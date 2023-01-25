import Image from 'next/image';
import React from 'react';
import heroBg from '../../assets/Images/hero-bg.png'

const Hero = () => {
    return (
        <section className='h-[731px] bg-secondary-600 flex justify-center items-center gap-[42px]'>
            <div className='w-[557px] h-[372px] flex flex-col gap-[20px]'>
                <h2 className='uppercase text-[40px] font-semibold leading-[50px] text-black-600'>
                    <span className='text-[32px] font-medium leading-[50px]'>Hi!</span> <br />
                    I’m <span className='text-primary-600'>Isma</span> <br />
                    UI/UX designer & Graphic Designer
                </h2>
                <p className='text-gray-600 font-normal text-[18px] leading-[30px] text-left'>My aim is to create better interfaces and experiences, making the web and mobile applications easier and more pleasant to use.</p>
                <button className='h-[54px] w-[170px] bg-primary-600  rounded-full shadow-[0px 15px 30px 0px #C63B2321] font-medium text-xl leading-[19px] text-white-white mt-[20px]'>
                Let’s Talk
                </button>
            </div>
            <div className='h-[633px] w-[633px]'>
                <Image src={heroBg} width={633} height={633} alt="hero-bg-image"/>
            </div>
        </section>
    );
};

export default Hero;
