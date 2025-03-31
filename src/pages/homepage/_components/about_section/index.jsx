import { motion } from 'framer-motion';
import { Icons, profile } from '../../../../constants/images';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div
      className="container mx-auto mb-16 overflow-hidden px-7 py-20 text-dark md:mb-24 md:px-20 lg:px-40"
      name="about"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="text-center text-3xl font-bold uppercase leading-[2.8rem] tracking-[3px] text-dark md:text-[52px] md:leading-none"
      >
        About me
      </motion.h2>
      <div className="mt-3 flex w-full flex-col items-center justify-between gap-y-10 md:flex-row md:gap-x-20">
        <div className="md:w-3/4">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="flex items-center"
          >
            <div className="flex flex-col gap-y-5">
              <img
                src={profile}
                className="mx-auto w-[25%] rounded-[50%]"
                alt=""
              />
              <div className="flex items-center justify-center gap-x-5">
                <img src={Icons} className="w-[25%]" alt="icons" />
                <img src={Icons} className="w-[25%]" alt="icons" />
              </div>
              <hr />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                className="text-center text-base text-secondary md:text-2xl"
              >
                I&apos;m passionate about building innovative digital products
                and experiences that leverage technology to drive positive
                change and impact users&apos; lives
              </motion.p>
              <hr />

              <div className="flex items-center justify-center gap-x-5">
                <img
                  src={Icons}
                  className="w-[25%] object-contain"
                  alt="icons"
                />
                <img
                  src={Icons}
                  className="w-[25%] object-contain"
                  alt="icons"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          className="w-full text-base text-dark md:text-lg"
        >
          <p>
            I&apos;m a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. <br /> <br /> Check out some of my work in
            the Projects section. I&apos;m also a co-founder of a local tech
            community at my university{' '}
            <Link
              target="_blank"
              to="https://etshub.org/"
              className="font-medium text-secondary transition-colors duration-200 ease-in-out"
            >
              (Education Technology Summit)
            </Link>{' '}
            where I like sharing content related to the stuff that I have
            learned over the years in Web Development so it can help other
            people of the Dev Community. <br />
            <br /> I&apos;m open to Job opportunities where I can contribute,
            learn and grow. If you have a good opportunity that matches my
            skills and experience then don&apos;t hesitate to contact me.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
