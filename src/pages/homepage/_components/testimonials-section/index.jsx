import { motion } from 'framer-motion';
import { QuoteDownIcon, QuoteUpIcon } from 'hugeicons-react';
import { useEffect, useState } from 'react';
import { direProfile, joshProfile } from '../../../../constants/images';

const testimonials = [
  {
    quote:
      'Timothy is a superbly talented web developer, and I would highly recommend him! He is skilled, creative, and detail-oriented, always providing unique solutions. Timothy is dependable and has a commitment to excellence, making him so much fun to work with. One of the best professionals I\'ve ever had the pleasure of working with.',
    author: 'Adewale Joshua Oladimeji',
    designation: 'Graphics and Brand Designer, Shopshare, ZeldaDevs.',
    portfolio: 'https://www.linkedin.com/in/joshua-adewale-15921122',
    image: joshProfile,
  },
  {
    quote:
      'Tim\'s a gem of a web developer and exceeded our expectations. Attention to the minutiae and innovative thinking transformed our website into a serious brand asset. He is a true collaborator who works transparently with his clients so that everything just flows. His new website has made leaps in our online profile and growth, now with real engagement. Tim is that partner who comes through and shows magic results for his clients and entirely believes in their success.',
    designation: 'Software Engineer, TechSpace.',
    author: 'Onaneye Joseph',
    portfolio: 'https://www.linkedin.com/in/onaneye-ayodeji-057180247/',
    image: direProfile,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % testimonials.length
      );
    }, 30000);

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
      className="relative mb-16 h-[70rem] bg-[#174677] md:mb-24 md:h-[42rem]"
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
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          className="my-2 text-center text-lg font-medium capitalize text-primary md:text-2xl"
        >
          Thing&apos;s people have said
        </motion.p> */}

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
              className="order-last flex flex-col justify-end gap-y-2 md:order-first md:w-[75%] md:text-lg"
            >
              <QuoteUpIcon color="#ffffff" strokeWidth={2} size={45} />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-10"
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
              className="order-first flex flex-col items-center justify-center gap-y-2 md:order-last"
            >
              <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full">
                <img
                  src={testimonials[currentIndex]?.image}
                  className="h-full w-full object-cover"
                  alt="profile"
                />
              </div>
              <motion.a
                href={testimonials[currentIndex]?.portfolio}
                target="_blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                className="text-center text-base font-medium md:text-lg"
              >
                {testimonials[currentIndex].author}, <br />
                <span className="text-primary">
                  {testimonials[currentIndex].designation}
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 left-[45%] mt-10 flex justify-center gap-2 md:left-[50%]"
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
