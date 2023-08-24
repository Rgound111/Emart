import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineClose } from "react-icons/md"
import { HiOutLineArrowLeft } from 'react-icons/hi'
import { toast, ToastContainer } from 'react-toastify';
import { deleteItem } from '../redux/emartSlice'


const CartItem = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.emart.productData);
  console.log(productData)

  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
        <h2 className='text-2xl font-titleFont'>shopping cart</h2>
      </div>
      <div>
        {
          productData.map((item) => (
            <div key={item._id} className='flex justify-between items-center gap-6 mt-6'>
              <div className='flex items-center gap-2'>
                <MdOutlineClose
                  onClick={() => dispatch(deleteItem(item._id)) & toast.error(`${item.title} is deleted`)}
                  className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 ' />
                <img className='w-32 h-32 object-cover'
                  src={item.image} alt="productImg" />
              </div>
              <h2 className='w-52'>{item.title}</h2>
              <p className='w-10'>${item.price}</p>
              <div className=' w-52 flex justify-between items-center p-3 text-gray-500 gap-4 border'>
                <p className='text-sm'>Quantity</p>
                <div className=' flex items-center gap-4 text-sm font-semibold'>
                  <button
                    className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>-</button>
                  {item.quantity}
                  <button
                    className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>+</button>
                </div>
              </div>
              <p className='w-14'>${item.quantity * item.price}</p>
            </div>
          ))
        }
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default CartItem
