import { Link } from 'react-router-dom';
import { InstagramIcon, Linkedin01Icon, TwitterIcon } from 'hugeicons-react';

const Footer = () => {
  return (
    <div className="mt-10 snap-start bg-secondary pt-10 text-primary lg:h-[50rem]">
      <div className="container mx-auto flex h-full flex-col items-center gap-y-10 px-7 pb-10 pt-10 md:mx-10 md:flex-row lg:mx-auto lg:px-40">
        <div className="flex w-full flex-col gap-y-10">
          {/* <img src={whitelogo} alt="" className="w-32" /> */}
          <p className="text-3xl font-semibold md:w-[65%] md:text-4xl lg:w-[65%] lg:text-6xl">
            Lets collaborate and build something amazing together
          </p>
        </div>
        <div className="grid lg:w-1/2 grid-cols-1 gap-5 md:grid md:grid-cols-3 lg:grid lg:grid-cols-1">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-5">
              <p className="text-xl font-semibold uppercase">
                Find me on these online spaces too
              </p>
              <div className="flex items-center gap-x-4">
                <div className="flex flex-col gap-x-5">
                  <Link className="w-fit rounded-[50%] border-[.5px] border-[#fff] border-opacity-40 p-2">
                    <InstagramIcon size={25} color="#fff" />
                  </Link>
                </div>
                <div className="flex flex-col gap-x-5">
                  <Link className="w-fit rounded-[50%] border-[.5px] border-[#fff] border-opacity-40 p-2">
                    <TwitterIcon size={25} color="#fff" />
                  </Link>
                </div>
                <div className="flex flex-col gap-x-5">
                  <Link className="w-fit rounded-[50%] border-[.5px] border-[#fff] border-opacity-40 p-2">
                    <Linkedin01Icon size={25} color="#fff" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 md:hidden lg:hidden">
          <Link
            to="https://x.com/gywdeofficial"
            target="_blank"
            className="cursor-pointer"
          >
            {/* <img src={twitterFotterIcon} alt="" /> */}
          </Link>
          <Link
            to="https://www.instagram.com/gywde/"
            target="_blank"
            className="cursor-pointer"
          >
            {/* <img src={instaFotterIcon} alt="" /> */}
          </Link>
          <Link to="#" target="_blank" className="cursor-pointer">
            {/* <img src={facebookFotterIcon} alt="" />    */}
          </Link>
          {/* <Link
            to="https://www.linkedin.com/company/gywde"
            target="_blank"
            className="cursor-pointer"
          >
            <img src={lindlinIconFotter} alt="" />
          </Link> */}
        </div>
        <div className="flex gap-2 md:hidden lg:hidden">
          {/* <img src={whiteAppatore} alt="" className="md:w-[6rem] lg:w-[7rem]" />
          <img src={whitePlaystore} alt="" className="md:w-[6rem] lg:w-[7rem]" /> */}
        </div>
      </div>
      <div className="bg-secondary">
        <div className="w-full border-t border-[#fff]"></div>
        <div className="px-7 md:text-base text-sm flex items-center justify-center py-8 text-center md:mx-10">
          <p className="">
            Coded in Visual Studio Code by{' '}
            <span className="font-semibold text-[#aeb12a]">Tims.</span> Built
            with React.js and Tailwind CSS, deployed with Netlify. All text is
            set in the Roboto Condensed typeface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
