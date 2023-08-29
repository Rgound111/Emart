import React from 'react';
import { logo } from '../assests/index';
import { cart1 } from '../assests/index';
import { icon } from '../assests/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
 const productData = useSelector((state) => state.emart.productData)
console.log(productData)
    return (
        <div className='w-full h-20 border-b-[1px]  border-gray-800 bg-white font-titleFont sticky top-0 z-50'>
            <div className=' max-w-screen-xl mx-auto h-full  flex items-center justify-between'>
                <Link to={'/'}>
                    <div>
                        <img className='w-28' src={logo} alt="NavLogo" />
                    </div>
                </Link>
                <div className='flex items-center gap-8' >
                    <ul className='flex items-center gap-8'>
                        <Link to={'/'} className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200 '>Home</Link>
                        <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  '>Pages</li>
                        <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  '>Shop</li>
                        <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  '>Element</li>
                        <li className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  '>Blog</li>
                    </ul>
                    <Link to={"/cart"}>
                    <div className='relative'>
                        <img className='w-9' src={cart1} alt="cartImage" />
                        <span className='absolute w-6 top-[0.8px] left-2 text-sm flex justify-center items-center font-titleFont font-semibold' >
                            {productData.length}     
                        </span>
                    </div>
                    </Link>
                    <Link to={"/login"}>
                    <img className='w-12 rounded-full' src={icon} alt="logo" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header
