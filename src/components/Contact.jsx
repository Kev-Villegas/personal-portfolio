import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaBehanceSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const schema = z.object({
    name: z
      .string()
      .min(4, { message: 'Name must be at least 4 characters!' })
      .max(30),
    email: z.string().email().min(6).max(60),
    message: z
      .string()
      .min(15, { message: 'Message needs a minimum of 15 characters!' })
      .max(200),
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
    <section
      className='w-full h-[1400px] md:h-[1600px] lg:h-[900px] xs:h-[1400px] px-6 md:pt-56 bg-[#0a192f]'
      id='contact'
    >
      <div className='md:max-w-[500px] xs:max-w-[320px] mx-auto flex flex-col w-full h-full'>
        <div className='py-4 xs:w-[320px]'>
          <h1 className='text-4xl  text-white border-b-2 border-pink-600 inline'>
            Contact Me
          </h1>
        </div>

        {/* <div className='w-full'> */}
          <div className='flex flex-col lg:flex-row w-[325px] '>
            {/* Text & Image*/}
            <div className='w-[400px] xs:w-[320px] justify-start mt-12 '>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-2xl leading-none mb-5 w-[320px] '>
                Please Check My Socials Or Fill Out The Form If You Want To
                Contact Me!
              </h2>
              <div className='space-y-4 text-center justify-center'>
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
                  className='flex items-center text-orange-700'
                  target='_blank'
                >
                  <SiGmail size={25} />
                  <span className='font-medium font-montserrat text-lg px-3 py-1 text-gray-300'>
                    kevin.villegas1973@gmail.com
                  </span>
                </a>
              </div>
            </div>
            {/* Form Start */}
            <form
              className='flex flex-col w-[600px] xs:w-[320px] py-3'
              onSubmit={handleSubmit(submitData)}
            >
              <label className='block mt-7'>
                <span className='mb-1'>Full Name</span>
              </label>
              <input
                {...register('name')}
                className='bg-[#ccd6f6] p-2 rounded-md xs:w-[300px] sm:w-[600px] md:w-[500px] lg:w-[400px]'
                type='text'
                placeholder='Name...'
                name='name'
              />
              {errors.name && (
                <span className='text-red-600'>{errors.name.message}</span>
              )}
              <label className='block mt-7'>
                <span className=''>Email Address</span>
              </label>
              <input
                {...register('email')}
                className='p-2 bg-[#ccd6f6] rounded-md xs:w-[300px] sm:w-[600px] md:w-[500px] lg:w-[400px]'
                type='email'
                placeholder='Email...'
                name='email'
              />
              {errors.email && (
                <span className='text-red-600'>{errors.email.message}</span>
              )}
              <label className='block mt-8'>
                <span className=''>Your Message</span>
              </label>
              <textarea
                {...register('message')}
                className='bg-[#ccd6f6] p-2 rounded-md resize-none xs:w-[300px] sm:w-[600px] md:w-[500px] md:h-[100px] xs:h-[250px] lg:w-[400px] '
                name='message'
                rows='10'
                placeholder='Message...'
              ></textarea>
              {errors.message && (
                <span className='text-red-600'>{errors.message.message}</span>
              )}
              <button className='btn btn-outline px-4 py-4 mt-6 w-[150px] justify-center text-center'>
                Send Message
              </button>
            </form>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
