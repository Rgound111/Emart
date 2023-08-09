import React from 'react'
import ProductsCard from './ProductsCard'

const products = () => {
  return (
    <div className='py-10'> 
      <div className='flex items-center   flex-col gap-6'>
        <h1 className='py-2 bg-black w-80 text-white text-center text-2xl rounded-sm uppercase'>Shop Everyday</h1>
        <span className='h-[2px] bg-black w-32'></span>
        <p className='max-w-[700px] text-gray-500 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A est placeat neque dolor ratione labore saepe, rerum eum molestiae illum excepturi reiciendis esse quis veniam aspernatur. Laudantium ea sequi, accusantium corrupti natus enim corporis nihil, et veniam, aperiam explicabo consequuntur.
        </p>
      </div>
      <div className='text-center text-gray-700 text-xl py-4'>
        <ProductsCard/>
      </div>
    </div>
  )
}

export default products
