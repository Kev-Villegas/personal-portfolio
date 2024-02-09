import { zodResolver } from '@hookform/resolvers/zod';
import { FaBehanceSquare } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Swal from 'sweetalert2';
import React from 'react';
import { z } from 'zod';

const Contact = () => {
  const schema = z.object({
    name: z
      .string()
      .min(4, { message: 'Name must be at least 4 characters!' })
      .max(30),
    email: z.string().email().min(6).max(60),
    message: z
      .string()
      .min(10, { message: 'Message needs a minimum of 10 characters!' })
      .max(500),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    fetch('https://getform.io/f/7673bb37-857a-443a-aaa3-92cde345d545', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(reset())
      .finally(
        Swal.fire({
          icon: 'success',
          title: 'Your message has been send',
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };
  return (
    <section className='section h-[1000px] md:h-[1100px] lg:h-[1200px] xs:h-[1200px] w-full bg-[#0a192f] px-6 py-6' id='contact'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
        <div className='mb-4'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12'
          >
            <h2 className='font-heading mb-4 font-bold border-b-[3px] border-pink-600 inline tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl'>
              Contact
            </h2>
          </motion.div>
        </div>
        <div className='flex items-stretch justify-center'>
          <div className='grid md:grid-cols-2'>
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='h-full pr-6'
            >
              <p className='mt-3 mb-6 text-xl max-w-[500px] font-secondary font-medium'>
                Please Check My Socials Or Fill Out The Form If You Want To
                Contact Me!
              </p>
              <div className='space-y-4 text-center justify-center font-primary '>
                <a className='flex items-center text-orange-600'>
                  <IoLocation size={30} />
                  <span className='font-medium font-montserrat text-lg px-3 py-1 text-gray-300'>
                    Córdoba / Argentina
                  </span>
                </a>
                <a
                  href='https://www.behance.net/kevinvillegas1973'
                  className='flex items-center text-blue-600'
                  target='_blank'
                >
                  <FaBehanceSquare
                    size={28}
                    className='text-[#1769ff] cursor-pointer'
                  />
                  <span className='font-medium font-montserrat text-lg px-3 py-1 text-gray-300'>
                    /kevin--villegas
                  </span>
                </a>
                <a
                  href='https://www.linkedin.com/in/kevin--villegas/'
                  className='flex items-center'
                  target='_blank'
                >
                  <FaLinkedin
                    size={28}
                    className='text-[#0077B5] cursor-pointer'
                  />
                  <span className='font-medium font-montserrat text-lg px-3 py-1 text-gray-300'>
                    /kevinvillegas1973
                  </span>
                </a>
                <a
                  href='https://www.behance.net/kevinvillegas1973'
                  className='flex items-center text-blue-600'
                  target='_blank'
                >
                  <FaGithub
                    size={28}
                    className='text-[#555555] cursor-pointer'
                  />
                  <span className='font-medium font-montserrat text-lg px-3 py-1 text-gray-300'>
                    /Kev-Villegas
                  </span>
                </a>
                <a
                  className='flex items-center text-orange-700'
                  target='_blank'
                >
                  <SiGmail size={25} />
                  <span className='font-medium font-montserrat text-lg px-3 py-1 text-gray-300'>
                    kevin.villegas1973@gmail.com
                  </span>
                </a>
              </div>
            </motion.div>
            <motion.form
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className='card h-fit max-w-6xl py-3'
              onSubmit={handleSubmit(submitData)}
              id='form'
            >
              <h2 className='mb-4 text-xl font-semibold font-primary'>
                Please fill the form if you want to contact me! :3
              </h2>
              <div
                id='contactForm'
                className='h-full pr-6 font-secondary'
              
              >
                <div className='mb-6'>
                  <div className='mx-0 mb-1 sm:mb-4'>
                    <div className='mx-0 mb-1 sm:mb-4'>
                      <label
                        htmlFor='name'
                        className='pb-1 text-xs uppercase tracking-wider'
                      ></label>
                      <input
                        type='text'
                        {...register('name')}
                        id='name'
                        autoComplete='given-name'
                        placeholder='Your name'
                        className='mb-2 w-full rounded-md border bg-slate-950 border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-95000 sm:mb-0'
                        name='name'
                      />
                      {errors.name && (
                        <span className='text-red-600'>
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className='mx-0 mb-1 sm:mb-4'>
                      <label
                        htmlFor='email'
                        className='pb-1 text-xs uppercase tracking-wider'
                      ></label>
                      <input
                        {...register('email')}
                        type='email'
                        id='email'
                        autoComplete='email'
                        placeholder='Your email address'
                        className='mb-2 w-full rounded-md border bg-slate-950 border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0'
                        name='email'
                      />
                      {errors.email && (
                        <span className='text-red-600'>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='mx-0 mb-1 sm:mb-4'>
                    <label
                      htmlFor='textarea'
                      className='pb-1 text-xs uppercase tracking-wider'
                    ></label>
                    <textarea
                      {...register('message')}
                    typeof='text'
                      id='message'
                      name='message'
                      cols='30'
                      rows='5'
                      placeholder='Write your message...'
                      className='mb-2 w-full rounded-md border resize-none bg-slate-950 border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0'
                    ></textarea>
                    {errors.message && (
                      <span className='text-red-600'>
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
