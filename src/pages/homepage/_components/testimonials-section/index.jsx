import { motion } from 'framer-motion';
import { QuoteDownIcon, QuoteUpIcon } from 'hugeicons-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ratione quasi aspernatur excepturi, perspiciatis quam in earum numquam sequi, dolor nisi.',
    author: 'Joshua Adewale',
    designation: 'Graphic Designer, TED Media X.',
  },
  {
    quote:
      'Labore dicta, nisi tenetur inventore delectus unde sequi exercitationem harum quidem soluta nesciunt. Ab, perspiciatis?',
    author: 'John Doe',
    designation: 'Software Engineer, ABC Corporation.',
  },
  {
    quote:
      'Labore dicta, nisi tenetur inventore delectus unde sequi exercitationem harum quidem soluta nesciunt. Ab, perspiciatis?',
    author: 'John Doe',
    designation: 'Software Engineer, ABC Corporation.',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % testimonials.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      name="testimonials"
      className="bg-[#174677]"
    >
      <div className="container mx-auto mb-16 px-7 py-10 text-dark md:mb-24 md:px-20 lg:px-40 lg:py-20">
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          className="text-center text-3xl font-bold uppercase leading-[2.8rem] tracking-[3px] text-primary md:text-[52px] md:leading-none"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className="my-2 text-center text-lg font-medium capitalize text-primary md:text-2xl"
        >
          Thing&apos;s people have said
        </motion.p>

        <div className="mt-10">
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            key={currentIndex}
            className="flex w-full flex-col items-center justify-between gap-8 text-primary md:flex-row"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
              className="order-last flex flex-col justify-end gap-y-2 md:order-first md:w-[75%] md:text-xl"
            >
              <QuoteUpIcon color="#ffffff" strokeWidth={2} size={45} />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
              >
                {testimonials[currentIndex].quote}
              </motion.p>
              <QuoteDownIcon
                color="#ffffff"
                strokeWidth={2}
                className="ml-auto"
                size={45}
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
              className="order-first flex flex-col gap-y-2 md:order-last"
            >
              <img src="" className="" alt="" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                className="text-center text-base font-medium md:text-lg"
              >
                {testimonials[currentIndex].author}, <br />
                <span className="text-primary">
                  {testimonials[currentIndex].designation}
                </span>
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
            className="mt-10 flex justify-center gap-2"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-500'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
