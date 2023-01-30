// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import quote from '../../assets/Images/Quote.png'
import star from '../../assets/Images/star-full.png'
import starEmpty from '../../assets/Images/star-empty.png'
import avatar from '../../assets/Images/avatar.png'
import Image from 'next/image';
import { reviewContent } from '@/components/constanse/constanse';
import Left from '@/components/icons/left';
import Right from '@/components/icons/right';
import { Autoplay, Navigation } from "swiper";


const Review = () => {
    return (
        <section className='md:h-[596px] lg:h-[596px] xl:h-[596px] 2xl:h-[596px] h-[978px]  flex justify-center items-center bg-secondary-600'>
            <div className='md:w-auto lg:w-[1110px] xl:w-[1110px] 2xl:w-[1110px] w-[291px] md:h-[358px] lg:h-[358px] xl:h-[358px] 2xl:h-[358px]' >
                <Swiper
                    slidesPerView={1} 
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide"
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviewContent.map((rC, i) =>
                            <SwiperSlide key={i} className='md:w-[820px] lg:w-[1110px] xl:w-[1110px] 2xl:w-[1110px] w-[291px] flex-wrap-reverse flex justify-center items-center gap-[103px] md:gap-[23px] pl-2'>
                                <div className='bg-white-white md:w-[505px] lg:w-[541px] xl:w-[541px] 2xl:w-[541px] w-[302px] h-[265px] flex flex-col justify-start md:justify-center lg:justify-center xl:justify-center 2xl:justify-center items-center md:px-8 lg:px-8 xl:px-8 2xl:px-8 md:gap-[10px] lg:gap-[10px] xl:gap-[10px] 2xl:gap-[10px] shadow-xl rounded-lg' >
                                    <div className='flex justify-between items-center w-[242px] md:w-[481px] lg:w-[481px] xl:w-[481px] 2xl:w-[481px] h-8 mt-3 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                        <div className=''>
                                            <Image src={quote} width={30} height={30} alt="quote-img" />
                                        </div>
                                        <div className='flex justify-end gap-1'>
                                            <Image src={star} width={13} height={13} alt="rating-star" />
                                            <Image src={star} width={13} height={13} alt="rating-star" />
                                            <Image src={star} width={13} height={13} alt="rating-star" />
                                            <Image src={starEmpty} width={13} height={13} alt="rating-star" />
                                            <Image src={starEmpty} width={13} height={13} alt="rating-star" />
                                        </div>
                                    </div>
                                    <p className='font-normal leading-6 text-lg text-gray-600 w-[242px] md:w-auto lg:w-auto xl:w-auto 2xl:w-auto h-[140px] md:h-auto lg:h-auto xl:h-auto 2xl:h-auto mt-[10px] md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    </p>
                                    <div className='flex ml-[30px] mr-auto  items-center gap-5 w-[204px] h-[50px] mt-[10px] md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0'>
                                        <Image src={avatar} width={50} height={50} alt="" />
                                        <h4 className='font-medium text-xl text-gray-600'>{rC.name}</h4>
                                    </div>
                                </div>
                                <div className='w-[454px] md:w-[292px] h-[232px] pl-10 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0'>
                                    <p className='font-medium text-xl leading-10 text-primary-600 text-right'>Reviews</p>
                                    <h2 className='font-semibold text-5xl  text-black-600 text-right mt-3'>What Client Say</h2>
                                    <p className='font-normal leading-7 text-base text-gray-600 text-right mt-6'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    <div className='flex justify-end md:justify-center lg:justify-center xl:justify-center 2xl:justify-center gap-5 mt-10 '>
                        <button className='button-prev-slide cursor-pointer w-[50px] h-[50px] flex justify-center items-center text-primary-600 hover:bg-primary-600 hover:text-white-white border-2 border-primary-600 rounded-full p-0 m-0'><Left /></button>
                        <button className='button-next-slide  cursor-pointer w-[50px] h-[50px] flex justify-center items-center text-primary-600 hover:bg-primary-600 hover:text-white-white border-2 border-primary-600 rounded-full p-0 m-0'><Right /></button>
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Review;  