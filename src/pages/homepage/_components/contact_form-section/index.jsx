import { Button } from '../../../../components';
import { Link } from 'react-router-dom';
import { plane } from '../../../../constants/images';
import { motion } from 'framer-motion';

const ContactFormSection = () => {
  return (
    <div
      className="container mx-auto px-7 md:px-20 lg:mb-24 lg:px-40"
      id="contact"
    >
      <div className="flex flex-col items-start justify-between gap-x-10 lg:flex-row">
        <div className="flex flex-col justify-center gap-y-4 lg:w-3/4">
          <h2 className="text-2xl font-semibold text-secondary lg:text-[45px]">
            Get in Touch
          </h2>
          <p className="text-base lg:text-lg">
            Ask for my resume or see if we can build something amazing together?
            I’d love to hear from you! <br />
            <br /> Fill in your info in the form below and I look forward to
            hearing from you!
          </p>
          <p className="text-base lg:text-lg">
            or reach out manually to{' '}
            <Link
              to="mailto:timothyonyea@gmail.com"
              className="font-medium text-[#203f96a9]"
            >
              {' '}
              timothyonyea@gmail.com
            </Link>
          </p>
          <motion.img
            transition={{ duration: 1 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: '-50px' }}
            style={{ willChange: 'auto' }}
            src={plane}
            alt=""
            className="lg:w-5/6"
          />
        </div>
        <form className="flex w-full flex-col gap-y-5 lg:gap-y-10">
          <div className="flex w-full flex-col gap-y-2">
            <label className="text-lg font-medium text-[#1a1a1a] lg:text-xl">
              Email address
            </label>
            <input
              type="text"
              name="email"
              className="w-full rounded-[10px] border border-[#d8d8d8] px-3 py-3 text-base outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-lg font-medium text-[#1a1a1a] lg:text-xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full rounded-[10px] border border-[#d8d8d8] px-3 py-3 text-base outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-lg font-medium text-[#1a1a1a] lg:text-xl">
              Message
            </label>
            <textarea
              name="message"
              className="w-full rounded-[10px] border border-[#d8d8d8] px-3 py-2 text-lg outline-none"
            ></textarea>
          </div>
          <Button width="fit-content" className="!border">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
