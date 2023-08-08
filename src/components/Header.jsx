import React from 'react';
import {logo} from '../assests/index'
import {cart1} from '../assests/index'
import {icon} from '../assests/index'


const Header = () => {
    return (
        <div className='w-full h-20 border-b-[1px]  border-gray-800 bg-white font-titleFont'>
            <div className=' max-w-screen-xl mx-auto h-full  flex items-center justify-between'>
                <div>
                    <img className='w-28' src={logo} alt="NavLogo" />
                </div>
            <div className='flex items-center gap-8' >
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200 '>Home</li>
                    <li  className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  '>Pages</li>
                    <li  className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  '>Shop</li>
                    <li  className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  '>Element</li>
                    <li  className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  '>Blog</li>
                </ul>
                <div className='relative'>
                    <img  className='w-8' src={cart1} alt="cartImage" />
                    <span className='absolute w-6 top-0 left-1 text-sm flex justify-center items-center font-titleFont font-semibold' >0</span>
                </div>
                <img className='w-12 rounded-full' src={icon} alt="logo" />
            </div>
            </div>

        </div>
    )
}

export default Header
