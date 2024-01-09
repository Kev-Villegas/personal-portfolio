import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaBehanceSquare } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='pl-10 fixed w-full h-[75px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <Link to='home' offset={0} spy={true} smooth={true} duration={500}>
          <h3 className='cursor-pointer font-semibold font-nunito text-xl'>
            KV
          </h3>
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='font-nunito'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
            style={{ transition: 'color 0.3s' }}
            className='hover:text-blue-500'
          >
            Home
          </Link>
        </li>
        <li className='font-nunito'>
          <Link
            to='about'
            smooth={true}
            duration={500}
            offset={-175}
            spy={true}
            style={{ transition: 'color 0.3s' }}
            className='hover:text-blue-500'
          >
            About
          </Link>
        </li>
        <li className='font-nunito'>
          <Link
            to='services'
            smooth={true}
            duration={500}
            offset={70}
            spy={true}
            style={{ transition: 'color 0.3s' }}
            className='hover:text-blue-500'
          >
            Services
          </Link>
        </li>
        <li className='font-nunito'>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            offset={-30}
            spy={true}
            style={{ transition: 'color 0.3s' }}
            className='hover:text-blue-500'
          >
            Skills
          </Link>
        </li>
        <li className='font-nunito'>
          <Link
            to='work'
            smooth={true}
            duration={500}
            offset={-150}
            style={{ transition: 'color 0.3s' }}
            className='hover:text-blue-500'
          >
            Work
          </Link>
        </li>
        <li className='font-nunito'>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            offset={-75}
            spy={true}
            style={{ transition: 'color 0.3s' }}
            className='hover:text-blue-500'
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 font-semibold text-2xl'>
          <Link
            offset={-50}
            onClick={handleClick}
            to='home'
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            offset={-425}
            onClick={handleClick}
            to='about'
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            offset={125}
            onClick={handleClick}
            to='services'
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            offset={-50}
            onClick={handleClick}
            to='skills'
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            offset={-50}
            onClick={handleClick}
            to='work'
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            offset={-50}
            onClick={handleClick}
            to='contact'
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/kevin--villegas/'
              target='_blank'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Kev-Villegas'
              target='_blank'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.behance.net/kevinvillegas1973'
              target='_blank'
            >
              Behance <FaBehanceSquare size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={'cv.pdf'}
              target='_blank'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
