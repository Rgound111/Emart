import React from 'react';
import { logo, paymentLogo1 } from '../assests';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='py-10 md:py-20 font-titleFont bg-black text-[#949494]'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/*============= LogoIcon Start here ===============*/}
        <div className='flex flex-col gap-7 items-center lg:items-start'>
          <img className='w-28' src={logo} alt="Logo" />
          <p className='text-white text-sm tracking-wide text-center lg:text-left'>ReactBd.com</p>
          <img className='w-60' src={paymentLogo1} alt="paymentlogo" />
          <div className='flex text-lg gap-6'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
        {/*============= LogoIcon End here ===============*/}
        {/*============= Locate Us Start here ===============*/}
        <div className='text-center lg:text-left'>
          <h2 className='text-2xl text-white font-semibold mb-4'>Locate Us</h2>
          <div className='text-base flex flex-col gap-3'>
            <p>Kalyan, Thane 400322</p>
            <p>Mobile: 091535 36829</p>
            <p>Phone: 00372 66292</p>
            <p>Email: Emart@gmail.com</p>
          </div>
        </div>
        {/*============= Locate Us End here ===============*/}
        {/*============= Profile Start here ===============*/}
        <div className='text-center lg:text-left'>
          <h2 className='text-2xl text-white font-semibold mb-4'>Profile</h2>
          <div className='flex flex-col gap-3 text-base'>
            <p className='hover:text-white flex gap-2 justify-center lg:justify-start items-center cursor-pointer'><BsPersonFill />My Account</p>
            <p className='hover:text-white flex gap-2 justify-center lg:justify-start items-center cursor-pointer'><BsPaypal />My Checkout</p>
            <p className='hover:text-white flex gap-2 justify-center lg:justify-start items-center cursor-pointer'><FaHome />My Order Tracking</p>
            <p className='hover:text-white flex gap-2 justify-center lg:justify-start items-center cursor-pointer'><MdLocationOn />Help & Support</p>
          </div>
        </div>
        {/*============= Profile End here ===============*/}
        {/*============= Subscribe Start here ===============*/}
        <div className='flex flex-col items-center lg:items-start'>
          <input className='text-sm px-4 py-2 bg-transparent border mb-3 w-full lg:w-auto' placeholder='Email' type='text' />
          <button className='text-sm border px-4 py-2 text-white hover:bg-gray-900 active:text-black active:bg-white w-full lg:w-auto'>
            Subscribe
          </button>
        </div>
        {/*============= Subscribe End here ===============*/}
      </div>
    </div>
  );
};

export default Footer;
