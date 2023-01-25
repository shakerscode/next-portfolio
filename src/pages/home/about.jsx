import Tick from '@/components/icons/tick';
import Image from 'next/image';
import aboutImage from '../../assets/Images/about-image.png';

const About = () => {
    return (
        <section className='h-[740px] bg-white-white flex justify-center items-center gap-[90px]'>
            <div>
                <Image src={aboutImage} width={601} height={562} alt="about-image" />
            </div>
            <div className='w-[552px] h-[414px] flex flex-col gap-[10px]'>
                <p className='uppercase text-xl font-medium leading-[45px]'><span className='text-primary-600'>About</span> Me </p>
                <h2 className='uppercase text-[48px] font-semibold leading-[45px] text-black-600'>
                    Who I am
                </h2>
                <p className='text-gray-600 font-normal text-[18px] leading-[24px] text-left mt-[10px]'>I am a UX/UI designer who loves creating pixel-perfect designs and unique user experiences. I take pride in providing exceptional customer service while delivering a product that exceeds my client’s expectations every single time. </p>
                <div className='flex items-center gap-[20px] mt-[10px]'>
                    <div className='w-[276px] '>
                        <div className='flex items-center gap-[18px] text-gray-600 font-normal text-[18px] leading-[24px] text-left'>
                            <Tick size={24} />
                            <p>Figma Web Designs</p>
                        </div>
                        <div className='flex items-center gap-[18px] text-gray-600 font-normal text-[18px] leading-[24px] text-left'>
                            <Tick size={24} />
                            <p> Mobile Application Designs</p>
                        </div>
                        <div className='flex items-center gap-[18px] text-gray-600 font-normal text-[18px] leading-[24px] text-left'>
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
                <button className='h-[54px] w-[217px] bg-primary-600  rounded-full shadow-[0px 15px 30px 0px #C63B2321] font-medium text-xl leading-[19px] text-white-white mt-[30px]'>
                    Download CV
                </button>
            </div>
        </section>
    );
};

export default About;