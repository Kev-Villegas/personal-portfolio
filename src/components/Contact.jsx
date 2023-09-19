import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';

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
    console.log('It Worked', data);
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
    <div
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
    >
      <form
        onSubmit={handleSubmit(submitData)}
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Please Fill The Email To Contact Me!
          </p>
        </div>
        <input
          {...register('name')}
          className='bg-[#ccd6f6] p-2 rounded-md'
          type='text'
          placeholder='Name...'
          name='name'
        />
        {errors.name && (
          <span className='text-red-600'>{errors.name.message}</span>
        )}
        <input
          {...register('email')}
          className='my-4 p-2 bg-[#ccd6f6] rounded-md'
          type='email'
          placeholder='Email...'
          name='email'
        />
        {errors.email && (
          <span className='text-red-600'>{errors.email.message}</span>
        )}
        <textarea
          {...register('message')}
          className='bg-[#ccd6f6] p-2 rounded-md resize-none	'
          name='message'
          rows='10'
          placeholder='Message...'
        ></textarea>
        {errors.message && (
          <span className='text-red-600'>{errors.message.message}</span>
        )}
        <button
          type='submit'
          className='text-white rounded-md border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
