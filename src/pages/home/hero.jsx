import Image from "next/image";
import React from "react";
import heroBg from "../../assets/Images/hero-bg.png";
import vector from "../../assets/Images/vector-two.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="md:h-[761px] h-[1369px] lg:h-[731px] xl:h-[731px] 2xl:h-[731px] md:px-5 lg:px-0 xl:px-0 2xl:px-0 px-4  bg-secondary-600 flex flex-wrap md:flex-nowrap lg:justify-center xl:justify-center 2xl:justify-center md:justify-center justify-start items-center lg:gap-[42px] mg:gap-0  relative pt-[60px] md:pt-none lg:pt-none xl:pt-none 2xl:pt-none"
    >
      <div className="md:w-[400px] md:h-[448px] lg:w-[557px] xl:w-[557px] 2xl:w-[557px] w-auto lg:h-[372px] h-fit-content flex flex-col gap-[20px] mb-auto md:md-none lg:md-none xl:md-none 2xl:md-none">
        <h2 className="uppercase text-[40px] font-semibold leading-[50px] text-black-600">
          <span className="text-[32px] font-medium leading-[50px]">Hi!</span>{" "}
          <br />
          I’m <span className="text-primary-600">Isma</span> <br />
          UI/UX designer & Graphic Designer
        </h2>
        <p className="text-gray-600 font-normal text-lg leading-[30px] md:w-[395px] md:h-[90px] text-left">
          My aim is to create better interfaces and experiences, making the web
          and mobile applications easier and more pleasant to use.
        </p>
        <button className="h-[54px] w-[170px] py-4 bg-primary-600  rounded-full shadow-lg font-medium text-xl leading-[19px] text-white-white mt-[20px] hover:bg-white-white hover:border-2 hover:border-primary-600 hover:text-black-600  ease-in-out duration-500">
          Let’s Talk
        </button>
      </div>
      <div className="lg:h-[604px] md:mt-none lg:mt-none xl:mt-none 2xl:mt-none mt-[-17rem]  xl:h-[504px] 2xl:h-[604px] w-[330px] mb-auto md:w-[509px] md:h-[403px] lg:w-[573px] md:mb-[10px] lg:mb-none xl:mb-none 2xl:mb-none">
        <Image src={heroBg} alt="hero-bg-image" />
      </div>

      <div className="absolute lg:bottom-28 md:bottom-12 bottom-14  right-0 ">
        <Image src={vector} width={120} height={112} alt="vector" />
      </div>
    </section>
  );
};

export default Hero;
