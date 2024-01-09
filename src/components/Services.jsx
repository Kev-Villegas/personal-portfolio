import { MdOutlineFormatPaint } from 'react-icons/md';
import { LuMonitorSmartphone } from 'react-icons/lu';
import { TfiPaintRoller } from 'react-icons/tfi';
import { IoSearch } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa6';

const Services = () => {
  return (
    <div
      name='services'
      className='w-full h-calc(90vh) px-6 pt-52 bg-[#0a192f] text-gray-300 '
    >
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-calc(90vh)'>
        <div className='text-center mb-4'>
          <h1 className='text-4xl font-bold inline border-b-4 border-pink-600 font-lato'>
            Services I Offer
          </h1>
          <h2 className='text-lg text-gray-300 px-4 py-2 font-montserrat'>
            Take a look at the services I offer and take your website business
            to the next level
          </h2>
        </div>
        <section className='w-full py-4 text-center'>
          <div className='container mx-auto px-4 text-center'>
            <div className='grid gap-6 md:grid-cols-3 justify-center'>
              <div
                class='rounded-lg bg-card text-card-foreground transform hover:scale-105 transition-transform duration-200 ease-in-out border border-gray-200 shadow-lg'
                data-v0-t='card'
              >
                <div class='flex flex-col items-center space-y-4 p-4'>
                  <IoSearch size={50} />
                  <h3 class='text-xl font-lato font-bold'>
                    SEO & Optimization
                  </h3>
                  <ul className='text-sm text-gray-500 dark:text-gray-400 space-y-2 font-montserrat'>
                    <li className='flex items-center text-base'>
                      <FaCheck className='mr-2' />
                      Better visibility in search engines.
                    </li>
                    <li className='flex items-center text-base font-montserrat'>
                      <FaCheck className='mr-2' />
                      Targeted traffic increase.
                    </li>
                    <li className='flex items-center text-base'>
                      <FaCheck className='mr-2' />
                      Enhanced user experience and engagement.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class='rounded-lg bg-card text-card-foreground transform hover:scale-105 transition-transform duration-200 ease-in-out border border-gray-200 shadow-lg'
                data-v0-t='card'
              >
                <div class='flex flex-col items-center space-y-4 p-4'>
                  <TfiPaintRoller size={50} />

                  <h3 class='text-xl font-lato font-bold'>UX & UI</h3>
                  <ul className='text-sm text-gray-500 dark:text-gray-400 space-y-2 font-montserrat'>
                    <li className='flex items-center text-base'>
                      <FaCheck className='mr-2' />
                      Intuitive and visually appealing design.
                    </li>
                    <li className='flex items-center text-base'>
                      <FaCheck className='mr-2' />
                      Improved user satisfaction and engagement.
                    </li>
                    <li className='flex items-center text-base'>
                      <FaCheck className='mr-2' />
                      Conversion-focused user interface.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class='rounded-lg bg-card text-card-foreground transform hover:scale-105 transition-transform duration-200 ease-in-out border border-gray-200 shadow-lg'
                data-v0-t='card'
              >
                <div class='flex flex-col items-center space-y-4 p-4'>
                  <LuMonitorSmartphone size={50} />
                  <h3 class='text-xl font-lato font-bold'>Responsive Design</h3>
                  <ul className='text-sm text-gray-500 dark:text-gray-400 space-y-2 font-montserrat'>
                    <li className='flex items-center text-base'>
                      <FaCheck className='mr-2' />
                      Seamless user experience across devices.
                    </li>
                    <li className='flex items-center text-base'>
                      <FaCheck className='mr-2' />
                      Mobile-friendly layouts.
                    </li>
                    <li className='flex items-center text-base'>
                      <FaCheck className='mr-2' />
                      Improved accessibility and reach.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
