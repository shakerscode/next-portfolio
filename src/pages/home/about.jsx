 import Tick from '@/components/icons/tick';
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


const About = () => {
    return (
        <section className='h-[740px] bg-white-white flex justify-center items-center md:gap-8 lg:gap-[90px] relative'>
            <div className='md:w-[447px]'>
                <Image src={aboutImage} width={601} height={562} alt="about-image" />
            </div> 

            <div className='lg:w-[552px] md:w-[398px] lg:h-[414px] md:h-[461px] flex flex-col gap-[10px]'>
                <p className='uppercase text-xl font-medium leading-[45px]'><span className='text-primary-600'>About</span> Me </p>
                <h2 className='uppercase text-5xl font-semibold leading-[45px] text-black-600'>
                    Who I am
                </h2>
                <p className='text-gray-600 font-normal text-lg leading-[24px] text-left mt-[10px]'>I am a UX/UI designer who loves creating pixel-perfect designs and unique user experiences. I take pride in providing exceptional customer service while delivering a product that exceeds my client’s expectations every single time. </p>
                <div className='flex items-center gap-[20px] mt-[10px]'>
                    <div className='lg:w-[276px] '>
                        <div className='flex items-center gap-[18px] text-gray-600 font-normal text-lg leading-[24px] text-left'>
                            <Tick size={24} />
                            <p>Figma Web Designs</p>
                        </div>
                        <div className='flex items-center gap-[18px] text-gray-600 font-normal text-lg leading-[24px] text-left'>
                            <Tick size={24} />
                            <p> Mobile Application Designs</p>
                        </div>
                        <div className='flex items-center gap-[18px] text-gray-600 font-normal text-lg leading-[24px] text-left'>
                            <Tick size={24} />
                            <p>Graphics Designs</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[23px] mt-[10px]'>
                        <div className='w-[250px] bg-white-white h-[7px] rounded-full border-2 border-primary-600'><div className='w-[
225px] h-full mr-6 rounded-full bg-primary-600'></div></div>
                        <div className='w-[250px] h-[7px] rounded-full border-2 border-primary-600'><div className='w-[
225px] h-full mr-10 rounded-full bg-primary-600'></div></div>
                        <div className='w-[250px] h-[7px] rounded-full border-2 border-primary-600'><div className='w-[
225px] h-full mr-8 rounded-full bg-primary-600'></div></div>
                    </div>
                </div>
                <button className='shadow-lg h-[54px] w-[217px] bg-primary-600  rounded-full shadow-[0px 15px 30px 0px #C63B2321] font-medium text-xl leading-[19px] text-white-white mt-[30px]'>
                    Download CV
                </button>
            </div>



            <div className='lg:w-[1140px] md:w-fit-content md:px-14 h-[178px] bg-white-white rounded-full flex lg:justify-evenly md:justify-between md:gap-7 items-center absolute top-[-13%] footer-shadow'>
                <div>
                    <p className='font-light text-gray-600 text-lg'>Tools & Skills</p>
                    <div className='flex items-start gap-[15px] mt-[16px]'>
                        <div className='cursor-pointer'><Image src={figma} width={55} height={55} alt="user-figma" /></div>
                        <div className='cursor-pointer'><Image src={photoshop} width={55} height={55} alt="user-photoshop" /></div> 
                    </div>
                </div>
                <div className='h-[125px] border-2 border-r border-gray-200'></div>
                <div>
                    <p className='font-light text-gray-600 text-lg'>Check out my</p>
                    <div className='flex items-center gap-[15px] mt-[16px]'>
                        <div className='cursor-pointer'><Image src={behance} width={55} height={55} alt="behance-id" /></div>
                        <div className='cursor-pointer'><Image src={dribble} width={55} height={55} alt="dribble-id" /></div>
                        <div className='cursor-pointer'><Image src={linkedin} width={55} height={55} alt="lenkedin-id" /></div>
                    </div>
                </div>

                <div className='h-[125px] border-2 border-r border-gray-200'></div>
                <div>
                    <p className='font-light text-gray-600 text-lg'>Contact me</p>
                    <div className='flex items-center gap-[15px] mt-[16px]'>
                         <Image src={gmail} width={55} height={55} alt="" />
                         <p className='font-medium text-lg text-gray-600'>ismanaveed99@gmail.com</p>
                    </div>
                </div>
            </div> 
            <a href='#footer' className='absolute top-[-5.5%] lg:right-12 md:right-[-10px] cursor-pointer' id='#home'>
                <Down/>
            </a>
            <div className='absolute bottom-16 right-0'>
                <Image src={vectorThree} width={85} height={85} alt="vector-three" />
            </div>
            <div className='absolute bottom-[-13%] left-0'>
                <Image src={vectorOne} width={160} height={152} alt="vector-one" />
            </div>
        </section>
    );
};

export default About;