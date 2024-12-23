import React from 'react';
import { Button } from '../../../../components';
import {
  Github01Icon,
  GithubIcon,
  Linkedin01Icon,
  Linkedin02Icon,
  TwitterIcon,
  TwitterSquareIcon,
  WhatsappIcon,
} from 'hugeicons-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <div
        className="h-[80vh] w-full bg-cover bg-center bg-no-repeat md:h-screen"
        style={{
          backgroundImage: 'url("/hero_bg4.jpg")',
        }}
      >
        <div className="flex h-[80vh] flex-col items-center justify-center gap-y-8 px-5 pt-10 text-center transition-all duration-1000 ease-out md:h-screen md:gap-y-10 lg:gap-y-12">
          <div className="text-3xl font-bold uppercase leading-[2.8rem] tracking-[3px] md:text-[52px] md:leading-none">
            Hello, I'm Timothy Onyeacholam
          </div>
          <div className="text-center text-lg font-normal text-dark md:w-3/4 md:text-xl md:leading-8 lg:w-[42%] lg:text-2xl">
            A highly skilled Frontend Developer crafting responsive,
            user-centered, and high-performance web applications that drive
            engagement and conversion.
          </div>
          <Button className="w-[60%] md:w-[15%]">Projects</Button>
        </div>
      </div>
      <div className="absolute right-0 top-[40%] hidden w-[4%] bg-primary drop-shadow-sm md:block">
        <div className="flex flex-col items-center justify-center gap-y-4 px-2 py-2">
          <div className="flex w-full cursor-pointer justify-center rounded-[5px] py-3 transition-all duration-200 ease-in hover:bg-[#efefef]">
            <GithubIcon size={30} strokeWidth={1.7} />
          </div>
          <div className="flex w-full cursor-pointer justify-center rounded-[5px] py-3 transition-all duration-200 ease-in hover:bg-[#efefef]">
            <TwitterIcon size={30} strokeWidth={1.7} />
          </div>
          <div className="flex w-full cursor-pointer justify-center rounded-[5px] py-3 transition-all duration-200 ease-in hover:bg-[#efefef]">
            <Linkedin02Icon size={30} strokeWidth={1.7} />
          </div>
          <div className="flex w-full cursor-pointer justify-center rounded-[5px] py-3 transition-all duration-200 ease-in hover:bg-[#efefef]">
            <WhatsappIcon size={30} strokeWidth={1.7} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
