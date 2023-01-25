import Image from 'next/image';
import React from 'react';
import vectorOne from "../../assets/Images/vector-one.png"

const Contact = () => {
    return (
        <section className='h-[631px] bg-white-white flex justify-center items-start pt-[120px] gap-[74px] contact-bg mb-20 relative'>
            <div>
                <p className='font-medium text-xl leading-[45px] text-black-600'><span className='text-primary-600'>Contact</span> Me</p>
                <h3 className='font-semibold text-5xl leading-[45px] text-black-600 uppercase'>Let’s Talk</h3>
            </div>
            <div className=' bg-white-white w-[434px] h-[293px] shadow-2xl rounded-md flex flex-col justify-center items-center gap-[40px]'>
                <div className='w-[374px] h-[153px] flex flex-col justify-center items-center gap-[34px]'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='relative'>
                        <label className='text-gray-400 w-[52px] h-[28px] font-light text-base leading-[28px] bg-white-white absolute left-[10px] top-[-14px]'>Name*</label> 
                            <input type="text" className='pl-2 w-[182px] h-[35px] border-2 border-gray-300 outline-none rounded-lg' />
                        </div>
                        <div className='relative'> 
                        <label className='text-gray-400 w-[52px] h-[28px] font-light text-base leading-[28px] bg-white-white absolute left-[10px] top-[-14px]'>Email*</label> 
                            <input type="text" className='pl-2 w-[182px] h-[35px] border-2 border-gray-300 outline-none rounded-lg' />
                        </div> 
                    </div>
                    <div className='relative'> 
                            <label className='text-gray-400 w-[64px] h-[28px] font-light text-base leading-[28px] bg-white-white absolute left-[10px] top-[-14px]'>Message</label>
                            <input type="text" className='pl-2 w-[374px] h-[70px] border-2 border-gray-300 outline-none rounded-lg' />
                        </div> 
                </div>
                <div className=' ml-auto pr-[30px]'>
                <button className='h-[40px] w-[125px] text-primary-600 border-2 border-primary-600  rounded-full shadow-[0px 15px 30px 0px #C63B2321] font-medium text-base'>
                Submit
                </button>
                </div>
            </div>
            <div className='flex flex-col items-center mt-14'> 
                <p className='w-[282px] h-[84px] font-normal text-base leading-[28px] text-gray-600 mt-[10.5rem]'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</p>
            </div>
            <div className='absolute bottom-[105px] left-[13px]'>
                <Image src={vectorOne} width={160} height={152} alt="vector-image"/>
            </div>
        </section>
    );
};

export default Contact;