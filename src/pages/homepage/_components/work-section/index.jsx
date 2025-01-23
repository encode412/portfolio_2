import { GithubIcon, JavaScriptIcon, ReactIcon } from 'hugeicons-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { VueJobs, Work01 } from '../../../../constants/images';

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
      title: 'Personal Date Night',
      description:
        'For when you need a break from your partner but already got a babysitter. Now couples can go to different events in similar locations and at the same time. A group programming project with Can Rozanes, Irene Truong and Jamie Yeung.',
      techStack: [
        { icon: ReactIcon, key: 'react' },
        { icon: GithubIcon, key: 'github' },
        { icon: JavaScriptIcon, key: 'javascript' },
      ],
      image: Work01,
      link: '#',
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
