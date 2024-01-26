import Portfolio from '../assets/projects/portfolioCover.webp';
import gymDesign from '../assets/projects/gymDesign.webp';
import gameHub from '../assets/projects/gameHub.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import React from 'react';

const Work = () => {
  return (
    <section
      className='w-full h-[1000px] md:h-[1600px] lg:h-[1000px] xs:h-[1800px] px-6 py-6 bg-[#0a192f]'
      id='work'
    >
      <div className='max-w-[1000px] xs:w-full mx-auto px-4 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col lg:flex-row gap-x-10 '>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* Text */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className='text-4xl leading-tight text-accent font-primary'>
                My Latest Work
              </h2>
              <p className='max-w-sm py-4 font-secondary'>
                Please take a look at my latest projects :D
              </p>
              <a href='https://www.behance.net/kevinvillegas1973' target='_blank'>
                <button className='btn btn-outline mb-[22px] font-tertiary w-[170px] '>
                  View All Projects
                </button>
              </a>
            </motion.div>

            {/* Project 1 */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl gap-y-10'
            >
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-15 transition-all duration-300'></div>
              <img
                className='group-hover:opacity-10 group-hover:scale-125 transition-all duration-500'
                src={gameHub}
                alt='gameHub'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-15'>
                <span className='text-4xl text-green-700'>
                  Front-End Project
                </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-15'>
                <span className='text-3xl text-white'>Rawg Game Hub</span>
              </div>
            </motion.div>
          </div>

          {/* Project 2 & 3 */}
          <div className='flex-1 flex flex-col gap-y-12'>
            {/* Project 2 */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            >
              {/* Overlay */}
              <div className='group-hover:bg-black/100 group-hover:bg-blend-darken w-full h-full absolute z-15 transition-all duration-300'></div>
              <img
                className='group-hover:opacity-30 group-hover:scale-125 transition-all duration-500'
                src={Portfolio}
                alt='Portfolio'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-15'>
                <span className='text-4xl text-green-700'>
                  Front-End Project
                </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-15'>
                <span className='text-3xl text-white'>Personal Portfolio</span>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            >
              {/* Overlay */}
              <div className='group-hover:bg-black/100 group-hover:bg-blend-darken w-full h-full absolute z-15 transition-all duration-300'></div>
              <img
                className='group-hover:opacity-40 group-hover:scale-125 transition-all duration-500'
                src={gymDesign}
                alt='gymDesign'
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-15'>
                <span className='text-4xl text-green-700'>UX/UI Design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-15'>
                <span className='text-3xl text-white'>Gym Landing Page</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
