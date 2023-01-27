
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { slideImage } from '@/components/constanse/constanse';
import Image from 'next/image';
import Left from '@/components/icons/left';
import Right from '@/components/icons/right';


const Portfolio = () => {
    return (
        <section className='h-[875px] w-[100%] flex flex-col m-auto justify-center gap-20 mx-auto bg-white-white'>
            <div className='flex justify-between w-[1140px] items-center mx-auto'>
                <div>
                    <p className='text-xl font-semibold leading-[45px] text-primary-600 text-left'>Portfolio</p>
                    <h2 className='text-[40px] font-semibold leading-[50px] text-black-600 mt-[10px] text-left'>Recent Projects</h2>
                </div>
                <div className='flex justify-center gap-5 mt-10'>
                    <button className='button-prev-slide cursor-pointer w-[50px] h-[50px] flex justify-center items-center text-primary-600 hover:bg-primary-600 hover:text-white-white border-2 border-primary-600 rounded-full p-0 m-0'><Left /></button>
                    <button className='button-next-slide  cursor-pointer w-[50px] h-[50px] flex justify-center items-center text-primary-600 hover:bg-primary-600 hover:text-white-white border-2 border-primary-600 rounded-full p-0 m-0'><Right /></button>
                </div>
            </div>
            <div className='w-[1138px] h-[450px] flex justify-center items-center mx-auto' >
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: true,
                    }}
                    slidesPerView={3}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide"
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    loop={true}
                    modules={[Autoplay, EffectCoverflow, Navigation]}
                    className="mySwiper"
                >
                    {
                        slideImage.map((sI, i) =>
                            <SwiperSlide key={i} className='mr-0 flex justify-center items-center w-[800px]'>
                                <div className='swiper-img shadow-md'><Image src={sI.url} width={400} height={450} alt="rating-star" /></div> 
                            </SwiperSlide>
                        )
                    }


                </Swiper>
            </div>
        </section>
    );
};

export default Portfolio;