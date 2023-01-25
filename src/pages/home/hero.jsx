 import Image from 'next/image';
import React from 'react';
import heroBg from '../../assets/Images/hero-bg.png'
import vector from '../../assets/Images/vector-two.png'


const Hero = () => {
    return (
        <section id='home' className='h-[731px] bg-secondary-600 flex justify-center items-center gap-[42px] relative'>
            <div className='w-[557px] h-[372px] flex flex-col gap-[20px]'>
                <h2 className='uppercase text-[40px] font-semibold leading-[50px] text-black-600'>
                    <span className='text-[32px] font-medium leading-[50px]'>Hi!</span> <br />
                    I’m <span className='text-primary-600'>Isma</span> <br />
                    UI/UX designer & Graphic Designer
                </h2>
                <p className='text-gray-600 font-normal text-lg leading-[30px] text-left'>My aim is to create better interfaces and experiences, making the web and mobile applications easier and more pleasant to use.</p>
                <button className='h-[54px] w-[170px] bg-primary-600  rounded-full shadow-lg font-medium text-xl leading-[19px] text-white-white mt-[20px]'>
                Let’s Talk
                </button>
            </div>
            <div className='h-[604px] w-[573px] mb-[10px]'>
                <Image src={heroBg} width={604} height={573} alt="hero-bg-image"/>
            </div>
            
            <div className='absolute bottom-28 right-0 '>
                <Image src={vector} width={160} height={152} alt="vector"/>
            </div>
        </section>
    );
};

export default Hero;
