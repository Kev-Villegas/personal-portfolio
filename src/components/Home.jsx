import { GoBriefcase } from 'react-icons/go';
import { CiMail } from 'react-icons/ci';
import { Link } from 'react-scroll';
// import { Reveal } from './utils/Reveal';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaBehanceSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ['UX/UI Designer', 'Front-End Developer'],
    loop: 1,
    typeSpeed: 110,
    deleteSpeed: 40,
  });

  return (
    <div name='home' className='w-full h-screen px-6 py-6 bg-[#0a192f]'>
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.3 }}
        className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-screen '
      >
        <p className='text-pink-600 text-xl font-medium font-lato'>
          Hi, My Name Is
        </p>

        <h1 className='text-4xl sm:text-6xl font-semibold text-gray-200 font-lato'>
          Kevin Villegas
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-gray-300 font-lato'>
          I'm a {typeEffect}
        </h2>
        <p className='text-gray-400 py-3 text-lg max-w-[800px] font-montserrat'>
          Front-End Developer passionate about UX/UI. I merge coding and design
          to create exceptional digital experiences, seeking the perfect
          combination of innovative functionality and aesthetics captivating
        </p>
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='flex'
        >
          <Link to='contact' smooth={true} duration={500} className='mr-4'>
            <button
              type='button'
              className='w-[180px] h-[50px] text-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <CiMail size={25} className='mr-[10px]' />
              <span>Contact Me</span>
            </button>
          </Link>
          <Link to='work' smooth={true} duration={500}>
            <button className='flex items-center w-[155px] h-[50px] text-center justify-center  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
              <GoBriefcase size={23} className='mr-[10px]' />
              <span> Portfolio</span>
            </button>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className='flex py-6 space-x-3 text-center justify-start'
        >
          <a href='https://www.behance.net/kevinvillegas1973' target='_blank'>
            <FaBehanceSquare
              size={28}
              className='text-[#1769ff] cursor-pointer'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/kevin--villegas/'
            target='_blank'
          >
            <FaLinkedin size={28} className='text-[#0077B5] cursor-pointer' />
          </a>
          <a href='https://github.com/Kev-Villegas' target='_blank'>
            <FaGithub size={28} className='text-[#555555] cursor-pointer' />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
