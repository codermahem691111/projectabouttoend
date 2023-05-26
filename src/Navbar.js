import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('#dc2626');
        setTextColor('#4f46e5');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: '#f6feff' }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <NavLink href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            Captur
          </h1>
        </NavLink>
        <ul style={{ color: `${textColor}` }} className='hidden md:flex'>
          <li className='p-4'>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li className='p-4'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='p-4'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li className='p-4'>
            <NavLink to='/howwork'>How it Work</NavLink>
          </li>
          <li className='p-4'>
          <NavLink to='/dsc'>Study</NavLink>
        </li>
        <li className='p-4'>
        <NavLink to='/testo'>Testomonial</NavLink>
      </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block md:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link to='/home'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <NavLink to='/about'>About us</NavLink>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link to='/dsc'>Deases</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

