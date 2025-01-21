  import { motion } from 'framer-motion';
  import {
    HtmlIcon,
    CssIcon,
    JsIcon,
    GitIcon,
    GithubIcon,
    ReactIcon,
    ApiIcon,
    SassIcon,
    CliIcon,
    VscodeIcon,
    WacIcon,
    ResponsiveIcon,
    VueIcon,
    TailwindCssICon,
    MaterialIcon,
  } from '../../../../constants/images';

  const SkillsSection = () => {
    const skills = [
      { icon: HtmlIcon, name: 'HTML' },
      { icon: CssIcon, name: 'CSS' },
      { icon: JsIcon, name: 'JavaScript' },
      { icon: ReactIcon, name: 'React' },
      { icon: ReactIcon, name: 'React Native' },
      { icon: VueIcon, name: 'Vue' },
      { icon: TailwindCssICon, name: 'Tailwind' },
      { icon: MaterialIcon, name: 'Material UI' },
      { icon: GitIcon, name: 'Git' },
      { icon: GithubIcon, name: 'GitHub' },
      { icon: ApiIcon, name: "Restful api's" },
      { icon: SassIcon, name: 'Sass' },
      { icon: CliIcon, name: 'Command Line' },
      { icon: VscodeIcon, name: 'Vs code' },
      { icon: WacIcon, name: 'Web Accesibility' },
      { icon: ResponsiveIcon, name: 'Responsive websites' },
    ];

    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="bg-[#719cca]"
        name="skills"
      >
        <div className="container mx-auto mb-16 px-7 md:px-20 lg:px-40 py-10 md:py-20 text-dark md:mb-24">
          <motion.h2
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="text-center text-3xl font-bold uppercase leading-[2.8rem] tracking-[3px] text-dark md:text-[52px] md:leading-none"
          >
            Skills and Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            className="my-2 text-center text-primary text-lg font-medium md:text-xl"
          >
            The skills, tools and technologies I use to bring your products to
            life:
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
            className="mt-10 grid gap-10 lg:grid-cols-4 md:grid-cols-3 grid-cols-2"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: index * 0.1,
                }}
                className="flex w-full flex-col items-center gap-y-1 text-center text-xl font-semibold uppercase"
              >
                <img src={skill.icon} alt={`${skill.name}-icon`} className="md:w-fit w-[50%] object-contain" />
                <p className='md:text-base text-sm'>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };

  export default SkillsSection;

  