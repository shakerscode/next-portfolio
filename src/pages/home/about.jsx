 import Image from 'next/image';
import aboutImage from '../../assets/Images/about-image.png';
import figma from '../../assets/Images/userfigma.png'
import photoshop from '../../assets/Images/photoshop.png'
import behance from '../../assets/Images/behance.png'
import dribble from '../../assets/Images/dribble.png'
import linkedin from '../../assets/Images/linkedin.png'
import gmail from '../../assets/Images/gmail.png'
import vectorThree from '../../assets/Images/vector-three.png'
import vectorOne from '../../assets/Images/vector-one.png'
import Down from '@/components/icons/down';
import Tick from '../../assets/Images/tick.png'
import down from '../../assets/Images/Down.png'


const About = () => {
    return (
        <section className='md:h-[790px] md:max-w-[1024px] lg:h-[740px] xl:h-[740px] 2xl:h-[740px] h-[1361px] bg-white-white flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap justify-center items-center md:gap-3 lg:gap-[90px] md:pt-auto  relative'>
            <div className='md:w-[478px] md:h-[447px] lg:w-[562px] xl:w-[562px] 2xl:w-[562px] mt-[270px] md:mt-[50px]  xl:mt-[70px] 2xl:mt-[70px] lg:mt-[70px] w-[317px]'>
                <Image src={aboutImage} alt="about-image" />
            </div>

            <div className='lg:w-[552px] xl:w-[552px] 2xl:w-[552px] w-[302px] h-[580px] md:w-[398px] lg:h-auto xl:h-[414px] 2xl:h-[414px] md:h-[461px] flex flex-col gap-[10px] mt-[-170px] md:mt-0 xl:mt-[70px] px-5 md:px-0 md:gap-none'>
                <p className='uppercase text-xl font-medium leading-[45px]'><span className='text-primary-600'>About</span> Me </p>
                <h2 className='uppercase text-5xl font-semibold leading-[45px] text-black-600'>
                    Who I am
                </h2>
                <p className='text-gray-600 font-normal text-lg md:text-base leading-[24px]  text-left mt-[10px] md:p-none md:mt-none md:h-120px'>I am a UX/UI designer who loves creating pixel-perfect designs and unique user experiences. I take pride in providing exceptional customer service while delivering a product that exceeds my client’s expectations every single time. </p>
                <div className=' flex items-center gap-1 md:gap-[10px] lg:gap-[20px] xl:gap-[20px] 2xl:gap-[20px] mt-[10px]'>
                    <div className='lg:w-[276px] md:w-[168px]'>
                        <div className='flex items-center md:gap-[5px] lg:gap-[18px] xl:gap-[18px] 2xl:gap-[18px] gap-1 text-gray-600 font-normal text-lg md:text-base leading-[24px] text-left'>
                        <Image src={Tick} width={24} height={24} alt="about-image" />
                            <p>Figma Web Designs</p>
                        </div>
                        <div className='flex items-center md:gap-[5px] lg:gap-[18px] xl:gap-[18px] 2xl:gap-[18px] gap-1 text-gray-600 font-normal text-lg md:text-base leading-[24px] text-left'>
                        <Image src={Tick} width={24} height={24} alt="about-image" />
                            <p> Mobile Application Designs</p>
                        </div>
                        <div className='flex items-center md:gap-[5px] lg:gap-[18px] xl:gap-[18px] 2xl:gap-[18px] gap-1 text-gray-600 font-normal text-lg md:text-base leading-[24px] text-left'>
                        <Image src={Tick} width={24} height={24} alt="about-image" />
                            <p>Graphics Designs</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[23px] mt-[10px] md:mt-none'>
                        <div className='md:w-[180px] lg:w-[250px] xl:w-[250px] 2xl:w-[250px] w-[146px] bg-white-white h-[7px] rounded-full border-2 border-primary-600'>
                            <div className='w-[132px] md:w-[162px] lg:w-[225px] xl:w-[225px] 2xl:w-[225px] h-full mr-6 md:mr-none rounded-full bg-primary-600'></div></div>
                        <div className='md:w-[180px] lg:w-[250px] xl:w-[250px] 2xl:w-[250px] w-[146px] h-[7px] rounded-full border-2 border-primary-600'><div className='w-[117px] md:w-[145px] lg:w-[225px] xl:w-[225px] 2xl:w-[225px] h-full mr-10 md:mr-none rounded-full bg-primary-600'></div></div>
                        <div className='md:w-[180px] lg:w-[250px] xl:w-[250px] 2xl:w-[250px] w-[146px] h-[7px] rounded-full border-2 border-primary-600'><div className='w-[123px] md:w-[152px] lg:w-[225px] xl:w-[225px] 2xl:w-[225px] h-full mr-8 md:mr-none rounded-full bg-primary-600'></div></div>
                    </div>
                </div>
                <button className='shadow-lg h-[54px] py-4 w-[217px] bg-primary-600  rounded-full shadow-[0px 15px 30px 0px #C63B2321] font-medium text-xl leading-[19px] text-white-white mt-[30px]'>
                    Download CV
                </button>
            </div>



            <div className='lg:w-[1140px] w-[210px] md:w-[700px] md:px-15px md:h-[178px] lg:h-[178px] xl:h-[178px] 2xl:h-[178px] bg-white-white rounded-full h-[614px] flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex lg:justify-evenly md:justify-center md:gap-2 gap-[50px] items-center absolute top-[-22%] md:top-[-13%] footer-shadow'>
                <div className='pt-[50px] md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0'>
                    <p className='font-light text-center md:text-left lg:text-left xl:text-left 2xl:text-left text-gray-600 text-lg'>Tools & Skills</p>
                    <div className='flex items-start gap-[15px] mt-[16px]'>
                        <div className='cursor-pointer'><Image src={figma} width={55} height={55} alt="user-figma" /></div>
                        <div className='cursor-pointer'><Image src={photoshop} width={55} height={55} alt="user-photoshop" /></div>
                    </div>
                </div>
                <div className='md:h-[125px] w-[125px] md:w-0 lg:w-0 xl:w-0 2xl:w-0 h-0 border-2 border-r border-gray-200'></div>
                <div>
                    <p className='font-light text-center md:text-left lg:text-left xl:text-left 2xl:text-left text-gray-600 text-lg'>Check out my</p>
                    <div className='flex items-center gap-[15px] mt-[16px]'>
                        <div className='cursor-pointer'><Image src={behance} width={55} height={55} alt="behance-id" /></div>
                        <div className='cursor-pointer'><Image src={dribble} width={55} height={55} alt="dribble-id" /></div>
                        <div className='cursor-pointer'><Image src={linkedin} width={55} height={55} alt="lenkedin-id" /></div>
                    </div>
                </div>

                <div className='md:h-[125px] w-[125px] md:w-0 lg:w-0 xl:w-0 2xl:w-0 h-0 border-2 border-r border-gray-200'></div>
                <div className=''>
                    <p className='font-light text-center md:text-left lg:text-left xl:text-left 2xl:text-left text-gray-600 text-lg'>Contact me</p>
                    <div className='flex justify-center items-center gap-[15px] mt-[16px]'>
                        <Image src={gmail} width={55} height={55} alt="" />
                        <p className='md:font-medium lg:font-medium xl:font-medium 2xl:font-medium font-normal text-lg text-gray-600 '>ismanaveed99<br className='block md:hidden lg:hidden xl:hidden 2xl:hidden' />@gmail.com</p>
                    </div>
                </div>
            </div>
            <a href='#footer' className='absolute md:top-[-5%] lg:top-[-5%] xl:top-[-5.5%] 2xl:top-[-22%] md:right-2 lg:right-2 xl:right-2 2xl:right-2 right-[0px] top-[-2%] cursor-pointer w-[80px] md:w-[112px] lg:w-[112px] xl:w-[112px] 2xl:w-[112px] md:h-[112px] lg:h-[112px] xl:h-[112px] 2xl:h-[112px]'  id='#home'>
                <Image src={down} alt="down-arrow"/>
            </a>
            <div className='absolute bottom-16 right-0 md:block lg:block xl:block 2xl:block hidden'>
                <Image src={vectorThree} width={85} height={85} alt="vector-three" />
            </div>
            <div className='absolute bottom-[-7%] md:bottom-[-13%] lg:bottom-[-13%] xl:bottom-[-13%] 2xl:bottom-[-13%] left-0'>
                <Image src={vectorOne} width={160} height={152} alt="vector-one" />
            </div>
        </section>
    );
};

export default About;