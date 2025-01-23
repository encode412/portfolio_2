import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '../../../../components';
import {
  GithubIcon,
  Linkedin02Icon,
  TwitterIcon,
  WhatsappIcon,
} from 'hugeicons-react';

const HeroSection = () => {
  return (
    <section className="relative mb-16 w-full md:mb-24" name="home">
      <div
        className="h-[80vh] w-full bg-cover bg-center bg-no-repeat md:h-screen"
        style={{
          backgroundImage: 'url("/hero_bg4.jpg")',
        }}
      >
        <div className="flex h-[80vh] flex-col items-center justify-center gap-y-8 px-5 pt-10 text-center transition-all duration-1000 ease-out md:h-screen md:gap-y-10 lg:gap-y-12">
          <div className="text-3xl font-bold uppercase leading-[2.8rem] tracking-[3px] md:text-[52px] md:leading-none">
            Hello, I&apos;m Timothy Onyeacholam
          </div>
          <div className="text-center text-lg font-normal text-dark md:w-3/4 md:text-xl md:leading-8 lg:w-[42%] lg:text-2xl">
            Where code meets creativity. A skilled Frontend Developer designing
            and building responsive, intuitive, and high-performance web
            applications that deliver exceptional user experiences.
          </div>
          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="work"
            className="mx-auto w-[60%] md:w-[15%]"
          >
            <Button className="w-full">Projects</Button>
          </ScrollLink>
        </div>
      </div>
      <div className="absolute right-0 top-[40%] hidden w-[4%] bg-primary drop-shadow-sm md:block">
        <div className="flex flex-col items-center justify-center gap-y-4 px-2 py-2">
          <Link
            target="_blank"
            to="https://github.com/encode412"
            className="flex w-full cursor-pointer justify-center rounded-[5px] py-3 transition-all duration-200 ease-in hover:bg-[#efefef]"
          >
            <GithubIcon size={30} strokeWidth={1.7} />
          </Link>
          <Link
            to="https://x.com/tee_blaqc"
            target="_blank"
            className="flex w-full cursor-pointer justify-center rounded-[5px] py-3 transition-all duration-200 ease-in hover:bg-[#efefef]"
          >
            <TwitterIcon size={30} strokeWidth={1.7} />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/timothy-onyeacholam-12365920a/"
            className="flex w-full cursor-pointer justify-center rounded-[5px] py-3 transition-all duration-200 ease-in hover:bg-[#efefef]"
          >
            <Linkedin02Icon size={30} strokeWidth={1.7} />
          </Link>
          <Link
            target="_blank"
            to="https://wa.me/+2348120975429"
            className="flex w-full cursor-pointer justify-center rounded-[5px] py-3 transition-all duration-200 ease-in hover:bg-[#efefef]"
          >
            <WhatsappIcon size={30} strokeWidth={1.7} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
