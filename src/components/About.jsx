import { MdOutlineImportantDevices } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiPaintRoll } from 'react-icons/bi';
import { TbCode } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import CountUp from 'react-countup';
import React from 'react';

// Services Data
const services = [
  {
    id: 1,
    icon: <TbCode size={30} />,
    name: 'Web Development',
    description:
      'With a focus on web development, I create visually appealing and functional websites. Let me transform your concepts into a compelling digital presence, enhancing your impact in the online realm.',
  },
  {
    id: 2,
    icon: <BiPaintRoll size={30} />,
    name: 'UX/UI Designs',
    description:
      'Specializing in UX/UI design, I create intuitive interfaces blending aesthetics with functionality for engaging interactions. Lets shape an unforgettable user journey',
  },
  {
    id: 3,
    icon: <MdOutlineImportantDevices size={30} />,
    name: 'Responsive Design',
    description:
      'I specialize in Responsive Design, crafting websites for flawless user experiences. Your site will captivate and function seamlessly on any screen.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className='section h-[1000px] md:h-[1100px] lg:h-[1200px] xs:h-[1800px] w-full bg-[#0a192f] px-6 py-6 pt-32'
      id='services'
      ref={ref}
    >
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center '>
        <div className='flex flex-col lg:flex-row '>
          {/* Text & Image*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten'
          >
            <h2 className='text-4xl font-bold inline border-b-[3px] border-pink-600 font-lato'>
              About Me
            </h2>
            <h3 className='max-w-[600px] font-semibold font-montserrat text-2xl py-2'>
              I'm A Front-End Developer & UX/UI Designer With Almost 4 Years Of
              Experiencie In The Area
            </h3>
            <p className='max-w-[700px] text-lg font-montserrat pr-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              repellendus tempore dicta ea eius ducimus velit quis nostrum
              officiis cupiditate.
            </p>
            {/* Stats Starts */}
            <div className='flex gap-x-6 lg:gap-x-10 py-4'>
              <div>
                <div className='text-4xl font-montserrat text-gray-300 '>
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className='font-lato text-sm tracking-[2px] '>
                  <span>
                    Years Of <br /> Experience
                  </span>
                </div>
              </div>
              <div>
                <div className='text-4xl font-montserrat text-gray-300 '>
                  {inView ? <CountUp start={0} end={32} duration={3} /> : null}
                </div>
                <div className='font-lato text-sm tracking-[2px] '>
                  <span>
                    Projects <br /> Complete
                  </span>
                </div>
              </div>
              {/* <div>
                <div className='text-4xl font-montserrat text-gray-300'>
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className='font-lato text-sm tracking-[2px] '>
                  <span>
                    Years Of <br /> Experience
                  </span>
                </div>
              </div> */}
            </div>
            {/* Stats Ends */}
            <button className='btn btn-outline mt-2 w-[175px]'>
              <a
                href={'cv.pdf'}
                className='flex items-center text-center text-base gap-2'
                target='_blank'
              >
                <BsFillPersonLinesFill size={18} />
                My Resume
              </a>
            </button>
          </motion.div>
          {/* Services Start*/}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col'
          >
            {/* Services List*/}
            <div className='gap-12 xs:grid xs:grid-cols-1'>
              {services.map((service, index) => {
                // destructure service
                const { id, icon, name, description } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[250px] py-2'
                    key={index}
                  >
                    <div className=' max-w-[476px] py-2 h-[800px] '>
                      <h4 className='text-2xl tracking-wider font-lato font-semibold py-2 mb-5'>
                        {icon} {name}
                      </h4>
                      <p className='font-montserrat leading-tight'>
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
