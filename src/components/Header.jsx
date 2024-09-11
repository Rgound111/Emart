import React, { useState } from 'react';
import { logo } from '../assests/index';
import { cart1 } from '../assests/index';
import { icon } from '../assests/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Importing icons for menu

const Header = () => {
  const productData = useSelector((state) => state.emart.productData);
  const userInfo = useSelector((state) => state.emart.userInfo);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <div className='w-full h-20 border-b-[1px] border-gray-800 bg-white font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 md:px-8'>
        {/* Logo */}
        <Link to={'/'}>
          <div>
            <img className='w-20 md:w-28' src={logo} alt="NavLogo" />
          </div>
        </Link>

        {/* Menu Toggle Button (for mobile) */}
        <button className='md:hidden text-2xl' onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />} {/* X for closing, Menu icon for opening */}
        </button>

        {/* Nav Links (Desktop) */}
        <div className='hidden md:flex items-center gap-4 md:gap-8'>
          <ul className='flex items-center gap-4 md:gap-8'>
            <Link to={'/'} className='text-sm md:text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>
              Home
            </Link>
            <li className='text-sm md:text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>
              Pages
            </li>
            <li className='text-sm md:text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>
              Shop
            </li>
            <li className='text-sm md:text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>
              Element
            </li>
            <li className='text-sm md:text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>
              Blog
            </li>
          </ul>

          {/* Cart and User Icons */}
          <Link to={"/cart"}>
            <div className='relative'>
              <img className='w-6 md:w-9' src={cart1} alt="cartImage" />
              <span className='absolute w-4 md:w-6 top-[0.8px] left-1 md:left-2 text-xs md:text-sm flex justify-center items-center font-titleFont font-semibold'>
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to={"/login"}>
            <img className='w-8 md:w-10 rounded-full' src={userInfo ? userInfo.image : icon} alt="logo" />
          </Link>
          {userInfo && (
            <p className='text-sm md:text-xl text-black font-normal hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200'>
              {userInfo.name}
            </p>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white w-full absolute top-20 left-0 z-50'>
          <ul className='flex flex-col items-center gap-4 p-4'>
            <Link to={'/'} className='text-sm text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200' onClick={closeMenu}>
              Home
            </Link>
            <li className='text-sm text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200' onClick={closeMenu}>
              Pages
            </li>
            <li className='text-sm text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200' onClick={closeMenu}>
              Shop
            </li>
            <li className='text-sm text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200' onClick={closeMenu}>
              Element
            </li>
            <li className='text-sm text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200' onClick={closeMenu}>
              Blog
            </li>
          </ul>

          {/* Cart and User Icons in Mobile Menu */}
          <div className='flex justify-center gap-4 mt-4'>
            <Link to={"/cart"} onClick={closeMenu}>
              <div className='relative'>
                <img className='w-6' src={cart1} alt="cartImage" />
                <span className='absolute w-4 top-[0.8px] left-1 text-xs flex justify-center items-center font-titleFont font-semibold'>
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to={"/login"} onClick={closeMenu}>
              <img className='w-8 rounded-full' src={userInfo ? userInfo.image : icon} alt="logo" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
