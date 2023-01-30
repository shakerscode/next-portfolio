import Image from 'next/image';
import footerLogo from '../../assets/Images/portfolio-logo.png'
import behance from '../../assets/Images/behance.png'
import dribble from '../../assets/Images/dribble.png'
import linkedin from '../../assets/Images/linkedin.png'
import up from '../../assets/Images/Up.png';
const Footer = () => {
    return (
        <footer id='footer' className='md:h-[196px] lg:h-[196px] xl:h-[196px] 2xl:h-[196px] h-[434px] bg-secondary-600 flex justify-center items-center relative'>
            <a href='#home' className='absolute md:top-[-22%] lg:top-[-22%] xl:top-[-22%] 2xl:top-[-22%] md:right-2 lg:right-2 xl:right-2 2xl:right-2 w-[80px] md:w-[112px] lg:w-[112px] xl:w-[112px] 2xl:w-[112px] md:h-[112px] lg:h-[112px] xl:h-[112px] 2xl:h-[112px] right-[0px] top-[-9%] cursor-pointer' id='#home'>
            <Image src={up} alt="down-arrow"/>
            </a>
            <div className='md:w-[1140px] lg:w-[1140px] xl:w-[1140px] 2xl:w-[1140px] md:h-[178px] lg:h-[178px] xl:h-[178px] 2xl:h-[178px] h-[597px] w-[210px] bg-white-white rounded-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:justify-evenly lg:justify-evenly xl:justify-evenly 2xl:justify-evenly justify-center gap-[40px] md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 items-center absolute md:top-[-50%] lg:top-[-50%] xl:top-[-50%] 2xl:top-[-50%] top-[-68%] footer-shadow'>
                <div className='md:w-[226px] lg:w-[226px] xl:w-[226px] 2xl:w-[226px] md:h-[56px] lg:h-[56px] xl:h-[56px] 2xl:h-[56px] w-[160px] h-[106px] flex justify-center items-center'>
                    <Image src={footerLogo} width={226} height={56} alt=""/>
                </div>
                <div className='md:h-[125px] w-[125px] md:w-0 lg:w-0 xl:w-0 2xl:w-0 h-0 border-2 border-r border-gray-200'></div>
                <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-[16px] text-gray-600'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Projects</p>
                    <p>Services</p>
                </div>
                <div className='md:h-[125px] w-[125px] md:w-0 lg:w-0 xl:w-0 2xl:w-0 h-0 border-2 border-r border-gray-200'></div>
                <div className='flex items-center gap-[15px]'> 
                <div className='cursor-pointer'><Image src={behance} width={55} height={55} alt=""/></div>
                <div className='cursor-pointer'><Image src={dribble} width={55} height={55} alt=""/></div>
                <div className='cursor-pointer'><Image src={linkedin} width={55} height={55} alt=""/></div>
                </div>
            </div> 
                <p className='text-center text-gray-600 text-base font-normal md:mt-28 lg:mt-28 xl:mt-28 2xl:mt-28 pb-8 md:pb-0 lg:pb-0 xl:pb-0 2xl:pn-0 md:w-auto lg:w-auto xl:w-auto 2xl:w-auto w-[210px] mt-auto'>@{new Date().getFullYear()} Portfolio Webpage - All Rights Reversed</p> 
        </footer>
    );
};

export default Footer;