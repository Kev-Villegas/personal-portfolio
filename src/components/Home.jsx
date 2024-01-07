import { GoBriefcase } from 'react-icons/go';
import { CiMail } from 'react-icons/ci';
import { Link } from 'react-scroll';
import { Reveal } from './utils/Reveal';
import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
        <Reveal>
          <p className='text-pink-600 text-2xl'>Hi, My Name Is</p>

          <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>
            Kevin Villegas
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-gray-300'>
            I'm a Front-End Developer.
          </h2>
          <p className='text-gray-400 py-4 text-xl max-w-[800px]'>
            Front-End Developer Specializing in building and ocassionally
            designing exepcional digital experiences. Currently, I'm focused on
            become a Full-Stack Developer!
          </p>
        </Reveal>
        <Reveal>
          <div className='flex items-center gap-3 md:flex-row'>
            {/* Primer botón */}

            <Link to='contact' smooth={true} duration={500} className='mr-4'>
              <button
                type='button'
                className='w-full md:w-auto rounded-md text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'
              >
                <CiMail size={24} className='mr-2' />
                Contact Me
                <span className='group-hover:rotate-90 duration-300 ml-3'></span>
              </button>
            </Link>

            {/* Segundo botón */}
            <Link to='work' smooth={true} duration={500}>
              <button className='w-full md:w-auto rounded-md text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                <GoBriefcase size={24} className='mr-2' />
                View Work
              </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
