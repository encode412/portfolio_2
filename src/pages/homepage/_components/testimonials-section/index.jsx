import { motion } from 'framer-motion';
import { QuoteDownIcon, QuoteUpIcon } from 'hugeicons-react';

const TestimonialSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      name="testimonials"
      className="bg-[#719cca]"
    >
      <div className="container mx-auto mb-16 px-7 md:px-20 lg:px-40 py-10 lg:py-20 text-dark md:mb-24">
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          className="text-center text-3xl font-bold uppercase leading-[2.8rem] tracking-[3px] text-dark md:text-[52px] md:leading-none"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className="my-2 text-center text-lg capitalize font-medium text-primary md:text-2xl"
        >
          Thing&apos;s people have said
        </motion.p>

        <div className="mt-10">
          <div className="flex md:flex-row gap-8 flex-col w-full items-center justify-between">
            <div className="flex md:w-[75%] md:order-first order-last flex-col justify-end gap-y-2 md:text-xl">
              <QuoteUpIcon color="#ffffff" strokeWidth={2} size={45} />
              <p>
                {' '}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                ratione quasi aspernatur excepturi, perspiciatis quam in earum
                numquam sequi, dolor nisi. Esse dignissimos optio nulla dolorum
                saepe quos odio quod. Labore dicta, nisi tenetur inventore
                delectus unde sequi exercitationem harum quidem soluta nesciunt.
                Ab, perspiciatis? <br /> <br /> Ipsam atque molestias distinctio
                deserunt repudiandae alias delectus enim laudantium culpa
                excepturi. Deserunt, aut obcaecati.
              </p>{' '}
              <QuoteDownIcon
                color="#ffffff"
                strokeWidth={2}
                className="ml-auto"
                size={45}
              />
            </div>
            <div className="flex md:order-last order-first flex-col gap-y-2">
              <img src="" className="" alt="" />
              <p className="text-base text-center md:text-lg font-medium">
                Joshua Adewale, <br /> <span className="text-secondary">Graphic Designer,</span> <br />
                <span className="text-secondary">TED Media X.</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
