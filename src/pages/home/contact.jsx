import Image from 'next/image';
import React from 'react';
import vectorOne from "../../assets/Images/vector-one.png"

const Contact = () => {
    return (
        <section className='md:h-[631px] lg:h-[631px] xl:h-[631px] 2xl:h-[631px] h-[1027px] bg-white-white flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center md:items-start lg:items-start xl:items-start 2xl:items-start md:pt-[120px] lg:pt-[120px] xl:pt-[120px] 2xl:pt-[120px] md:gap-[74px] lg:gap-[74px] xl:gap-[74px] 2xl:gap-[74px]  contact-bg md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20 relative'>
            <div className='mt-[30px]  md:mt-0 lh:mt-0 xl:mt-0 2xl:mt-0'>
                <p className='font-medium text-xl leading-[45px] text-black-600'><span className='text-primary-600'>Contact</span> Me</p>
                <h3 className='font-semibold text-5xl leading-[45px] text-black-600 uppercase'>Let’s Talk</h3>
            </div>
            <div className='flex justify-between flex-wrap-reverse md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap md:gap-[70px] lg:gap-[70px] xl:gap-[70px] 2xl:gap-[70px] gap-[56px]'>
                <div className=' bg-white-white md:w-[434px] lg:w-[434px] xl:w-[434px] 2xl:w-[434px] md:h-[293px] lg:h-[293px] xl:h-[293px] 2xl:h-[293px] w-[302px] h-[253px] shadow-2xl rounded-md flex flex-col justify-center items-center gap-[40px] p-[9px] mb-[360px] mx-auto md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 z-20'>
                    <div className='md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] w-[283px] h-[153px] flex flex-col justify-center items-center gap-[34px] pt-5 md:pt-0 lg:pt-0 xl: 2xl:pt-0'>
                        <div className='flex items-center gap-[10px]'>
                            <div className='relative '>
                                <label className='text-gray-400 w-[52px] h-[28px] font-light text-base leading-[28px] bg-white-white absolute left-[10px] top-[-14px]'>Name*</label>
                                <input type="text" className='pl-2 md:w-[182px] lg:w-[182px] xl:w-[182px] 2xl:w-[182px] w-[137px] h-[35px] border-2 border-gray-300 outline-none rounded-lg' />
                            </div>
                            <div className='relative'>
                                <label className='text-gray-400 w-[52px] h-[28px] font-light text-base leading-[28px] bg-white-white absolute left-[10px] top-[-14px]'>Email*</label>
                                <input type="text" className='pl-2 md:w-[182px] lg:w-[182px] xl:w-[182px] 2xl:w-[182px] w-[137px] h-[35px] border-2 border-gray-300 outline-none rounded-lg' />
                            </div>
                        </div>
                        <div className='relative'>
                            <label className='text-gray-400 w-[64px] h-[28px] font-light text-base leading-[28px] bg-white-white absolute left-[10px] top-[-14px]'>Message</label>
                            <input type="text" className='pl-2 md:w-[374px] lg:w-[374px] xl:w-[374px] 2xl:w-[374px] w-[283px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[70px] h-[83px] border-2 border-gray-300 outline-none rounded-lg' />
                        </div>
                    </div>
                    <div className=' ml-auto md:pr-[30px] lg:pr-[30px] xl:pr-[30px] 2xl:pr-[30px]'>
                        <button className='h-[40px] w-[125px] text-primary-600 border-2 border-primary-600  rounded-full shadow-[0px 15px 30px 0px #C63B2321] font-medium text-base'>
                            Submit
                        </button>
                    </div>
                </div>
                <div className='flex flex-col   items-end md:items-center lg:items-center xl:items-center 2xl:items-center md:mt-14 lg:mt-14 xl:mt-14 2xl:mt-14 mt-[115px] '>
                    <p className='w-[282px] h-[84px] font-normal text-base leading-[28px] text-gray-600 md:mt-[10.5rem] lg:mt-[10.5rem] xl:mt-[10.5rem] 2xl:mt-[10.5rem] pl-[64px]'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</p>
                </div>
            </div>
            <div className='absolute md:bottom-[105px] lg:bottom-[105px] xl:bottom-[105px] 2xl:bottom-[105px] md:left-[13px] lg:left-[13px] xl:left-[13px] 2xl:left-[13px] left-0 bottom-[270px] z-10'>
                <Image src={vectorOne} width={160} height={152} alt="vector-image" />
            </div>
        </section>
    );
};

export default Contact;