import { GithubIcon, JavaScriptIcon, ReactIcon } from 'hugeicons-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  gywde,
  // GYWDE,
  llum,
  nxg,
  payina,
  royals,
  sawl,
  VueJobs,
} from '../../../../constants/images';

const WorkSection = () => {
  const workData = [
    {
      id: 1,
      title: 'Vue Jobs Listing',
      description:
        'VueJobsNow is a web application which allows users to create, read, update, and delete job listings. Using the composition API, the project uses Vue Router for navigation and Tailwind CSS for styling.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: VueJobs,
      link: 'https://vuejobsnow.netlify.app',
      github: 'https://github.com/encode412/job-listings',
    },
    {
      id: 2,
      title: 'Get Your Work Done Easily (GYWDE)',
      description:
        'As part of a talented development team, I helped build GYWDE, a cutting-edge platform connecting customers with trusted vendors for various services. With a seamless user interface and robust backend infrastructure, GYWDE streamlines the process of finding and hiring reliable service providers. My contributions included developing the vendor and admin dashboard, implementing the service booking system, ensuring secure payment processing and implementing various endpoints.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: gywde,
      link: 'http://gywde.com/',
    },
    {
      id: 3,
      title: 'Loom Screen Recorder UI Clone',
      description:
        'I re-created the frontend of Loom screen recorder official website. I got attracted to their beautiful UI. It was a great experience for me to build the frontend.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: llum,
      link: 'https://llum.netlify.app/',
      github: 'https://github.com/encode412/toom',
    },
    {
      id: 4,
      title: 'NextGen Hub',
      description:
        'As a key contributor to a high-performing development team, we developed the NextGen Hub landing page, where design meets functionality. This platform offers exciting career prospects in the ever-evolving field of technology, featuring seamless integrations and a user-friendly interface. My contributions included developing the responsive layout, implementing interactive elements and backend endpoints, and ensuring cross-browser compatibility.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: nxg,
      link: 'https://nextgenhub.com.ng/',
      // github: 'https://github.com/encode412/toom',
    },
    {
      id: 5,
      title: 'Payina',
      description:
        'I collaborated with a team of developers to build Payina, a cutting-edge web payment platform—an all-in-one solution to effortlessly manage your money. With secure transactions, seamless integration, and user-friendly features, Payina simplifies the process of sending, receiving, and tracking payments online. My contributions included developing the payment gateway integration, implementing secure transaction endpoints, and designing the user-friendly landing pages and dashboard.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: payina,
      link: 'https://payina.com.ng/',
      // github: 'https://github.com/encode412/toom',
    },
    {
      id: 7,
      title: 'Smart Approaches',
      description:
        'Together with a team of dedicated software developers to build Smart Approaches, a robust online learning ecosystem—empowering students to master in-demand tech skills. With modular courses, hands-on projects, recorded classes and expert mentorship, Smart Approaches streamlines the process of acquiring expertise in tech. My contributions included developing the landing page and the student dashboard, implementing the endpoints, and integrating the payment gateway.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: sawl,
      link: 'https://smartapproaches.org/',
      // github: 'https://github.com/encode412/toom',
    },
    {
      id: 6,
      title: 'Royals Restaurant',
      description:
        'Royals is a web template i created targeting the resturant and food industry, which anyone can use to present their own business online.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: royals,
      link: 'https://royalstemplate.netlify.app/',
      github: 'https://github.com/encode412/royals_template',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="container mx-auto mb-16 px-7 py-10 text-dark md:mb-24 md:px-20 lg:px-40 lg:py-20"
      name="work"
    >
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
        className="text-center text-3xl font-bold uppercase leading-[2.8rem] tracking-[3px] text-dark md:text-[52px] md:leading-none"
      >
        Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
        className="my-2 text-center text-lg font-medium capitalize text-dark md:text-xl"
      >
        A Selection of stuff i&apos;ve built
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
        className="flex flex-col"
      >
        {workData.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ x: -50 }}
            viewport={{ once: true }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: index * 0.1,
            }}
            className="flex w-full flex-col items-center gap-10 md:-mt-10 md:flex-row"
          >
            <div className="order-last flex md:order-first lg:w-1/2">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-lg font-medium text-secondary md:text-3xl">
                  {work.title}
                </h2>
                <p className="text-base md:text-xl md:!leading-[35px]">
                  {work.description}
                </p>
                <div className="flex items-center gap-x-5">
                  {work.techStack.map((item) => (
                    <item.icon key={item.key} size={26} />
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-x-5 font-medium">
                  <Link
                    target="_blank"
                    className="group w-fit text-lg md:text-xl"
                    to={work.link}
                  >
                    View live{' '}
                    <div className="h-[2px] w-0 bg-secondary transition-all duration-500 group-hover:w-full"></div>
                  </Link>
                  {work.github && (
                    <Link
                      target="_blank"
                      className="group w-fit text-lg md:text-xl"
                      to={work.github}
                    >
                      View Github Repo{' '}
                      <div className="h-[2px] w-0 bg-secondary transition-all duration-500 group-hover:w-full"></div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <img
              src={work.image}
              className="order-first w-full object-contain md:order-last md:w-1/2"
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WorkSection;
