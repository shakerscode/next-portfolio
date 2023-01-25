import { cardDetails } from '@/components/constanse/constanse';
import Image from 'next/image';
import React, { useState } from 'react';

const Service = () => {
    const [number, setNumber] = useState(0)
    return (
        <section className='bg-secondary-600 h-[895px] flex flex-col justify-center items-center gap-[80px]'> 
                <div className='w-[783px]'>
                    <p className='text-xl font-medium text-primary-600 leading-[45px] text-center'>Services</p>
                    <h1 className='text-5xl font-semibold text-black-600 leading-[45px] text-center mt-[10px]'>What I Can Do</h1>
                    <p className='text-lg font-normal text-gray-600 leading-[24px] text-center mt-[20px]'>I have 2 years of experience in Ui Ux Design services such as Desktop Interface Designs, Mobile / Tablet UI Design, Interface Wireframes, and Prototyping. </p>
                </div>
                <div className='flex justify-center items-center gap-[50px] w-[1140px] h-[377px]'>
                    {
                        cardDetails.map((cD, i) =>
                            <div onMouseOver={() => setNumber(i)} key={i} className={`${i === number ? "shadow-2xl" : ""} flex flex-col justify-center items-center gap-[15px] w-[347px] h-[377px] bg-white-white rounded-md hover:shadow-2xl cursor-pointer active:shadow-xl `}>
                                <div>
                                    <Image src={cD.icon} width={90} height={85} alt="card-icon" />
                                </div>
                                <h1 className='font-semibold text-[26px]   text-center '>{cD.title}</h1>
                                <p className='font-normal text-base  text-center w-[296px]'>{cD.desc}</p>
                            </div>
                        )
                    }
                </div> 
        </section>
    );
};

export default Service;