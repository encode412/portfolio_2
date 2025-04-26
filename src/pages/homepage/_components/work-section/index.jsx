import { GithubIcon, JavaScriptIcon, ReactIcon } from 'hugeicons-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ets,
  gywde,
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
      id: 0,
      title: 'ETS Community',
      description:
        'ETS is a community platform that showcases the activities of its members. It serves as a hub for members to share their experiences and connect with one another. The platform is designed to be user-friendly and visually appealing, making it easy for members to navigate and engage with the content.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: ets,
      link: 'https://etshub.org',
      // github: 'https://github.com/encode412/job-listings',
    },
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
      title: 'Get Your Work Done Effortlessly (GYWDE)',
      description:
        'A platform that bridges the gap between brands and trusted vendors, facilitating effortless connections with over 2,000 verified service providers for a seamless consumer experience. GYWDE is a comprehensive solution for brands seeking reliable vendors, offering a user-friendly interface and a wide range of services to meet diverse needs.',
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
        'A clone of the official Loom screen recorder website, showcasing a beautiful UI. The project was a great experience in building a responsive and visually appealing frontend.',
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
        'NextGen Hub is a job portal that connects job seekers with top companies in Nigeria. It offers a user-friendly interface, advanced search filters, and personalized job recommendations to help users find their dream jobs quickly and easily.',
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
        'Payina is a payment platform that allows users to send and receive money online. It is a secure and easy-to-use platform that makes it easy to manage your money.',
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
        'An educational platform empowering individuals with knowledge and practical skills in Business Analysis, Data Analysis, and Software Development. Smart Approaches offers a comprehensive curriculum, hands-on projects, and expert mentorship to help learners excel in their chosen fields, with a focus on real-world applications and industry-relevant skills.',
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
        'Royals is a web template created targeting the resturant and food industry, which anyone can use to present their own business online.',
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
        A Selection of projects i&apos;ve built
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
