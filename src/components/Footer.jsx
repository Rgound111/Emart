import React from 'react'
import {logo ,paymentLogo1} from '../assests'

const Footer = () => {
  return (
    <div className='py-20 font-titleFont bg-black text-[#949494]'>
    <div className='max-w-screen-xl mx-auto'>
        {/*=============  LogoIcon  Start here    ===============*/}
        <div className='flex flex-col gap-7'>
            <img className='w-28' src={logo} alt="Logo" />
            <p className='text-white text-sm tracking-wide'>ReactBd.com</p>
            <img className='w-60' src={paymentLogo1} alt="paymentlogo" />
        </div>
        {/*=============  LogoIcon   End here     ===============*/}
        {/*=============  Locateus  Start here   ===============*/}
        {/*=============  Locateus  End here     ===============*/}
        {/*=============  Profile  Start here    ===============*/}
        {/*=============  Profile  End here     ===============*/}
        {/*=============  Suscribe   Start here  ===============*/}
        {/*=============  Suscribe   End here   ===============*/}
    </div>
    </div>
  )
}

export default Footer
