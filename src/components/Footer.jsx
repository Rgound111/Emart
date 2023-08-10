import React from 'react'
import {logo ,paymentLogo1} from '../assests'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram,FaHome } from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'
import {BsPersonFill, BsPaypal} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='py-20 font-titleFont bg-black text-[#949494]'>
    <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        {/*=============  LogoIcon  Start here    ===============*/}
        <div className='flex flex-col gap-7'>
            <img className='w-28' src={logo} alt="Logo" />
            <p className='text-white text-sm tracking-wide'>ReactBd.com</p>
            <img className='w-60' src={paymentLogo1} alt="paymentlogo" />
            <div className='flex text-lg gap-6'>
              <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
              <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
              <FaFacebook className='hover:text-white duration-300 cursor-pointer'/>
              <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
              <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
            </div>
        </div>
        {/*=============  LogoIcon   End here     ===============*/}
        {/*=============  Locateus  Start here   ===============*/}
        <div>
        <h2 className='text-2xl text-white font-semibold mb-4 mt-4'>Locate Us</h2>
        <div className='text-base flex flex-col gap-3'>
          <p>Kalyan, Thane 400322</p>
          <p>Mobile : 091535 36829</p>
          <p>Phone : 00372 66292</p>
          <p>e-mail :Emart@gmail.com</p>
        </div>
        </div>
        {/*=============  Locateus  End here     ===============*/}
        {/*=============  Profile  Start here    ===============*/}
        <div>
        <h2 className='text-2xl text-white font-semibold mb-4 mt-4'>Profile</h2>
        <div className='flex flex-col gap-3 text-base'>
          <p className='hover:text-white flex gap-2 text-center items-center cursor-pointer'><BsPersonFill/>my account</p>
          <p className='hover:text-white flex gap-2 text-center items-center cursor-pointer'><BsPaypal/>my checkout</p>
          <p className='hover:text-white flex gap-2 text-center items-center cursor-pointer'><FaHome/>my order tracking</p>
          <p className='hover:text-white flex gap-2 text-center items-center cursor-pointer'><MdLocationOn/>help & support</p>
        </div>

        </div>
        {/*=============  Profile  End here     ===============*/}
        {/*=============  Suscribe   Start here  ===============*/}
        <div className='flex flex-col justify-center '>
          <input className='text-sm px-4 py-2 bg-transparent border' placeholder='email' type="text" />
          <button className='text-sm border px-4 py-2 text-white hover:bg-gray-900 active:text-black active:bg-white'>Suscribe</button>
        </div>
        {/*=============  Suscribe   End here   ===============*/}
    </div>
    </div>
  )
}

export default Footer
