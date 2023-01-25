import Image from 'next/image';
import footerLogo from '../../assets/Images/portfolio-logo.png'
import behance from '../../assets/Images/behance.png'
import dribble from '../../assets/Images/dribble.png'
import linkedin from '../../assets/Images/linkedin.png'
import Up from '@/components/icons/up';
const Footer = () => {
    return (
        <footer id='footer' className='h-[196px] bg-secondary-600 flex justify-center items-center relative'>
            <a href='#home' className='absolute top-[-22%] right-2 cursor-pointer' id='#home'>
                <Up/>
            </a>
            <div className='w-[1140px] h-[178px] bg-white-white rounded-full flex justify-evenly items-center absolute top-[-50%] footer-shadow'>
                <div>
                    <Image src={footerLogo} width={226} height={56} alt=""/>
                </div>
                <div className='h-[125px] border-2 border-r border-gray-200'></div>
                <div className='flex justify-center items-center gap-[16px] text-gray-600'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Projects</p>
                    <p>Services</p>
                </div>
                <div className='h-[125px] border-2 border-r border-gray-200'></div>
                <div className='flex items-center gap-[15px]'> 
                <div className='cursor-pointer'><Image src={behance} width={55} height={55} alt=""/></div>
                <div className='cursor-pointer'><Image src={dribble} width={55} height={55} alt=""/></div>
                <div className='cursor-pointer'><Image src={linkedin} width={55} height={55} alt=""/></div>
                </div>
            </div> 
                <p className='text-center text-gray-600 text-base font-normal mt-28'>@{new Date().getFullYear()} Portfolio Webpage - All Rights Reversed</p> 
        </footer>
    );
};

export default Footer;