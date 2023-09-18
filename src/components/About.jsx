import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-2xl font-semibold		'>
            <p>
              {' '}
              Pleasure to meet you! Feel free to browse through my portfolio and
              explore the projects I've been actively engaged in.
            </p>
          </div>
          <div className='text-xl'>
            <p>
              {' '}
              I'm a Front-End Developer with nearly 3 years of experience,
              always in pursuit of knowledge and eager to challenge my skills. I
              thrive on continuous learning and adapting to new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
