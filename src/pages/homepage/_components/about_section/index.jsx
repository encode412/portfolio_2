import { motion } from 'framer-motion';
import { Icons } from '../../../../constants/images';

const AboutSection = () => {
  return (
    <div
      className="container mx-auto mb-16 px-7 md:px-20 lg:px-40 text-dark md:mb-24"
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
      <div className="mt-20 flex md:flex-row flex-col w-full items-start justify-between gap-y-10 md:gap-x-20">
        <div className="md:w-1/2">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="flex items-center"
          >
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center justify-center gap-x-10">
                <img src={Icons} className="w-[25%]" alt="icons" />
                <img src={Icons} className="w-[25%]" alt="icons" />
              </div>
              <hr />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                className="text-center text-base md:text-2xl text-secondary"
              >
                I have a passion for ideating, designing, and creating products
                and experiences that make an impact to the world.
              </motion.p>
              <hr />

              <div className="flex items-center justify-center gap-x-10">
                <img src={Icons} className="w-[25%] object-contain" alt="icons" />
                <img src={Icons} className="w-[25%] object-contain" alt="icons" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          className="md:w-1/2 text-base text-dark md:text-lg"
        >
          <p>
            I have 3 years of experience in UI/UX design in various tech
            companies. <br /> <br /> I&apos;m currently a Product Designer at First
            Circle, a fast-growing fintech company providing financial services
            to SMEs. I&apos;m also a co-founder of Effective Altruism Philippines, a
            local chapter of the global EA movement. <br /> <br /> While in
            university, I did 6 internships, including being a UI/UX Apprentice
            at Stampede (a Malaysian UX agency), a Product Design Intern at
            Kalibrr (a YC startup), and a UX Research Intern at Shopee (#1
            E-Commerce App in SE Asia). <br /> <br /> I&apos;ve also had experience
            launching a web app called HangTime, which my friend and I
            co-created. Since HangTime&apos;s release in January 2017, we&apos;ve amassed
            9,000+ users. I&apos;ve also held positions in UX and startup university
            organizations, such as being the VP for HR at UX Society and the
            president of ASES Manila. <br /> <br /> Scroll down to find case
            studies of my designs and my most popular articles on UI/UX design
            and self-development.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
