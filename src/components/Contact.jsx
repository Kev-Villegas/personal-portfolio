import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';

const Contact = () => {
  const schema = z.object({
    name: z
      .string()
      .min(4, { message: 'Name must be at least 4 characters!' })
      .max(18),
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
    fetch('https://getform.io/f/3055c8c3-8dac-4326-8bc5-1232396d5bf5', {
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
        method='POST'
        action='https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>Fill The Form To Contact Me!</p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
          rounded-sm
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
          rounded-sm
        />
        <textarea
          rounded-sm
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
