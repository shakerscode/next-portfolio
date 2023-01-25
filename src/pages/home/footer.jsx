import Image from 'next/image';
import footerLogo from '../../assets/Images/portfolio-logo.png'
import behance from '../../assets/Images/behance.png'
import dribble from '../../assets/Images/dribble.png'
import linkedin from '../../assets/Images/linkedin.png'

const Footer = () => {
    return (
        <section className='h-[196px] bg-secondary-600 flex justify-center items-center'>
            <div className='w-[1140px] h-[178px] bg-white-white rounded-full flex justify-evenly items-center'>
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
                <Image src={behance} width={55} height={55} alt=""/>
                <Image src={dribble} width={55} height={55} alt=""/>
                <Image src={linkedin} width={55} height={55} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Footer;