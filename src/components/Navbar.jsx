import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaBehanceSquare } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
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
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='font-nunito'>
          <Link
            to='home'
            smooth={true}
            duration={500}
            offset={-20}
            spy={true}
            className='hover:font-medium hover:border-b-2 hover:border-b-pink-500 '
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
            className='hover:font-medium hover:border-b-2 hover:border-b-pink-500 '
          >
            About
          </Link>
        </li>
        <li className='font-nunito'>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            offset={-250}
            spy={true}
            className='hover:font-medium hover:border-b-2 hover:border-b-pink-500 '
          >
            Skills
          </Link>
        </li>
        <li className='font-nunito'>
          <Link
            to='work'
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            className='hover:font-medium hover:border-b-2 hover:border-b-pink-500 '
          >
            Work
          </Link>
        </li>
        <li className='font-nunito'>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            offset={-110}
            spy={true}
            className='hover:font-medium hover:border-b-2 hover:border-b-pink-500'
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
            to='home'
            offset={-50}
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            to='about'
            offset={-425}
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            to='skills'
            offset={-50}
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            to='work'
            offset={-50}
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className='py-6 font-semibold text-2xl'>
          <Link
            to='contact'
            offset={-50}
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
