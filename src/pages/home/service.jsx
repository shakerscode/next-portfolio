import { cardDetails } from '@/components/constanse/constanse';
import Image from 'next/image';
import React, { useState } from 'react';
import redCircle from '../../assets/Images/red-circle.png'

const Service = () => {
    const [number, setNumber] = useState(0)
    return (
        <section className='bg-secondary-600 h-[1798px] md:h-[895px] lg:h-[895px] xl:h-[895px] 2xl:h-[895px] flex flex-col md:justify-center lg:justify-center xl:justify-center 2xl:justify-center justify-start items-center gap-[80px] relative main-bg '> 
                <div className='md:w-[783px] lg:w-[783px] xl:w-[783px] 2xl:w-[783px] w-[302px] px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0 mt-[60px] md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0'>
                    <p className='text-xl font-medium text-primary-600 leading-[45px] text-center'>Services</p>
                    <h1 className='text-5xl font-semibold text-black-600 leading-[45px] text-center mt-[10px]'>What I Can Do</h1>
                    <p className='md:w-[675px] lg:w-[675px] xl:w-[675px] 2xl:w-[675px] text-lg font-normal text-gray-600 leading-[24px] text-center mt-[20px]'>I have 2 years of experience in Ui Ux Design services such as Desktop Interface Designs, Mobile / Tablet UI Design, Interface Wireframes, and Prototyping. </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:gap-[18px] lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] gap-[40px] md:w-[886px] lg:w-[1140px] xl:w-[1140px] 2xl:w-[1140px] w-auto h-[377px]'>
                    {
                        cardDetails.map((cD, i) =>
                            <div onMouseOver={() => setNumber(i)} key={i} className={`${i === number ? "shadow-2xl" : ""} flex flex-col justify-center items-center gap-[15px] md:w-[282px] lg:w-[347px] xl:w-[347px] 2xl:w-[347px] w-[302px] h-[400px] md:h-[405px] lg:h-[377px] xl:h-[377px] 2xl:h-[377px] card-z-index bg-white-white rounded-md hover:shadow-2xl cursor-pointer active:shadow-xl`}>
                                <div>
                                    <Image src={cD.icon} width={90} height={85} alt="card-icon" />
                                </div>
                                <h1 className='font-semibold text-[26px] md:w-[253px] text-center px-14 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>{cD.title}</h1>
                                <p className='font-normal text-base  text-center w-[296px] md:w-[252px] px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>{cD.desc}</p>
                            </div>
                        )
                    }
                </div> 
                <div className='absolute bottom-[100px] left-[30.8rem] z-index'>
                    <Image src={redCircle} width={60} height={60} alt="rd-circle"/>
                </div>
        </section>
    );
};

export default Service;