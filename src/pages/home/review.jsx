// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

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
        <section className='h-[596px]  flex justify-center items-center bg-secondary-600'>
            <div className='w-[1098px] h-[358px]' >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50} 
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
                            <SwiperSlide key={i} className='w-[1110px] flex justify-center items-center gap-[103px] pl-2'>
                                <div className='bg-white-white w-[541px] h-[265px] flex flex-col justify-center items-center px-8 gap-[10px] shadow-xl rounded-lg' >
                                    <div className='flex justify-between items-center w-[481px] h-8 '>
                                        <Image src={quote} width={30} height={30} alt="quote-img" />
                                        <div className='flex justify-end gap-1'>
                                            <Image src={star} width={13} height={13} alt="rating-star" />
                                            <Image src={star} width={13} height={13} alt="rating-star" />
                                            <Image src={star} width={13} height={13} alt="rating-star" />
                                            <Image src={starEmpty} width={13} height={13} alt="rating-star" />
                                            <Image src={starEmpty} width={13} height={13} alt="rating-star" />
                                        </div>
                                    </div>
                                    <p className='font-normal text-lg text-gray-600'>
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    </p>
                                    <div className='flex mr-auto  items-center gap-5'>
                                        <Image src={avatar} width={50} height={50} alt="" />
                                        <h4 className='font-medium text-xl text-gray-600'>{rC.name}</h4>
                                    </div>
                                </div>
                                <div className='w-[454px] h-[232px] '>
                                    <p className='font-medium text-xl leading-10 text-primary-600 text-right'>Reviews</p>
                                    <h2 className='font-semibold text-5xl text-black-600 text-right mt-3'>What Client Say</h2>
                                    <p className='font-normal leading-7 text-base text-gray-600 text-right mt-6'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    <div className='flex justify-center gap-5 mt-10'>
                        <button  className='button-prev-slide cursor-pointer w-[50px] h-[50px] flex justify-center items-center text-primary-600 hover:bg-primary-600 hover:text-white-white border-2 border-primary-600 rounded-full p-0 m-0'><Left /></button>
                        <button   className='button-next-slide  cursor-pointer w-[50px] h-[50px] flex justify-center items-center text-primary-600 hover:bg-primary-600 hover:text-white-white border-2 border-primary-600 rounded-full p-0 m-0'><Right /></button>
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Review;  