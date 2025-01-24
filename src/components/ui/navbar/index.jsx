import { Menu02Icon } from 'hugeicons-react';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-50 flex h-12 w-full items-center justify-between bg-primary px-7 font-medium uppercase tracking-[1px] drop-shadow-md md:h-10 md:px-12 lg:h-20 lg:px-20">
        <Link to="/" className="lg:text-xl">
          <span>Timothy Onyeacholam</span>
        </Link>
        <div className="text-lightgray hidden items-center justify-center md:flex md:space-x-10 md:text-sm lg:space-x-14 lg:text-base">
          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            offset={-170}
            to="home"
            className="group w-fit cursor-pointer"
          >
            Home{' '}
            <div className="h-[2px] w-0 bg-[#719cca] transition-all duration-500 group-hover:w-full"></div>
          </ScrollLink>
          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            offset={-170}
            to="about"
            className="group w-fit cursor-pointer"
          >
            About
            <div className="h-[2px] w-0 bg-[#719cca] transition-all duration-500 group-hover:w-full"></div>
          </ScrollLink>
          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            offset={-170}
            to="skills"
            className="group w-fit cursor-pointer"
          >
            Skills & Tools
            <div className="h-[2px] w-0 bg-[#719cca] transition-all duration-500 group-hover:w-full"></div>
          </ScrollLink>
          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            offset={-170}
            to="work"
            className="group w-fit cursor-pointer"
          >
            Work
            <div className="h-[2px] w-0 bg-[#719cca] transition-all duration-500 group-hover:w-full"></div>
          </ScrollLink>
          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            offset={-170}
            to="testimonials"
            className="group w-fit cursor-pointer"
          >
            Testimonials
            <div className="h-[2px] w-0 bg-[#719cca] transition-all duration-500 group-hover:w-full"></div>
          </ScrollLink>
          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            offset={-170}
            to="contact"
            className="group w-fit cursor-pointer"
          >
            Contact
            <div className="h-[2px] w-0 bg-[#719cca] transition-all duration-500 group-hover:w-full"></div>
          </ScrollLink>
        </div>

        <div className="block cursor-pointer md:hidden">
          <Menu02Icon color='#2f2f2f' onClick={() => setToggleMenu(true)} />
        </div>
      </div>

      {toggleMenu && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center gap-20 overflow-hidden bg-[#d5d5d5] px-6 pt-6 transition-all duration-150">
          <div className="flex w-full items-center justify-between">
            {/* <img src="/logo.png" alt="gywde" /> */}

            <span
              className="right-6 top-5 cursor-pointer text-2xl"
              onClick={() => setToggleMenu(false)}
            >
              X
            </span>
          </div>
          <ul className="w-full list-none">
            <li className="mt-12 cursor-pointer text-xl text-primary">
              <div className="flex items-center justify-center">
                <Link to="/" className="text-lightgray text-lg font-normal">
                  Home
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-xl text-primary">
              <div className="flex items-center justify-center">
                <Link
                  to="/about-us"
                  className="text-lightgray text-lg font-normal"
                >
                  About Us
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-xl text-primary">
              <div className="flex items-center justify-center">
                <Link
                  to="/services"
                  className="text-lightgray text-lg font-normal"
                >
                  Services
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-xl text-primary">
              <div className="flex items-center justify-center">
                <Link
                  to="/vendor"
                  className="text-lightgray text-lg font-normal"
                >
                  Be a Vendor
                </Link>
              </div>
            </li>
          </ul>
          <div className="mt-20 flex w-full flex-col items-center space-y-6 text-base">
            <Link to="#" className="mx-auto w-[100%]">
              {/* <Button
                className="w-full !text-base font-semibold  !text-lightgray hover:scale-95"
                children="Log in"
                backgroundColor={"transparent"}
                padding={"15px 30px"}
              /> */}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
