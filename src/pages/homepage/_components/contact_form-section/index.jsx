import { Button } from '../../../../components';
import { Link } from 'react-router-dom';
import { plane } from '../../../../constants/images';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactFormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setSuccessMessage(null);
    setErrorMessage(null);

    const newErrors = {};

    if (!name) {
      newErrors.name = 'Please enter your name';
    }

    if (!email) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!message) {
      newErrors.message = 'Please enter a message';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitting(true);

      try {
        const response = await fetch(
          `https://formspree.io/f/${import.meta.env.VITE_FORM_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          }
        );

        if (response.ok) {
          setSuccessMessage('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
          setIsSubmitting(false);

          setTimeout(() => {
            setSuccessMessage(null);
          }, 3000);
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        setErrorMessage('Error sending message. Please try again.');
        setIsSubmitting(false);
        console.log(error);
      }
    }
  };

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
        <form
          className="flex w-full flex-col gap-y-5 lg:gap-y-10"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col gap-y-2">
            <label className="text-lg font-medium text-[#1a1a1a] lg:text-xl">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-[10px] border border-[#d8d8d8] px-3 py-3 text-base outline-none"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-lg font-medium text-[#1a1a1a] lg:text-xl">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-[10px] border border-[#d8d8d8] px-3 py-3 text-base outline-none"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-lg font-medium text-[#1a1a1a] lg:text-xl">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-[10px] border border-[#d8d8d8] px-3 py-2 text-lg outline-none"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <Button
            width="fit-content"
            className="!border"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {successMessage && (
            <p className="mb-4 text-lg font-medium text-green-500">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="mb-4 text-lg font-medium text-red-500">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
