import React from 'react'
import { githubLogo } from '../assests/index'

const Login = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-10 py-10'>
            <div className='w-full flex justify-center items-center gap-10'>
                <div className='w-60 text-base h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-700 cursor-pointer duration-300'>
                    <img className='w-10' src={githubLogo} alt="githubLogoImg" />
                    <span className='text-sm text-gray-900'>Sign in With Google</span>
                </div>
                <button className='text-white text-base px-8 py-3 bg-black rounded-md tracking-wide hover:bg-gray-800 duration-300'> Sign out</button>
            </div>
            <div className='w-full flex justify-center items-center gap-10'>
                <div className='w-60 text-base h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-700 cursor-pointer duration-300'>
                    <img className='w-10' src={githubLogo} alt="githubLogoImg" />
                    <span className='text-sm text-gray-900'>Sign in With Google</span>
                </div>
                <button className='text-white text-base px-8 py-3 bg-black rounded-md tracking-wide hover:bg-gray-800 duration-300'> Sign out</button>
            </div>
        </div>
    )
}

export default Login


