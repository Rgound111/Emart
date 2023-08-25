import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineClose } from "react-icons/md"
import { HiOutLineArrowLeft } from 'react-icons/hi'
import { BsArrowLeft } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify';
import { decreamentQuantity, deleteItem, increamentQuantity, resetItem } from '../redux/emartSlice'
import { Link } from 'react-router-dom'


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
                    onClick={()=> 
                    dispatch(decreamentQuantity({
                      _id : item._id,
                      title : item.title,
                      image : item.image,
                      price : item.price,
                      quantity : 1,
                      description : item.description,
                    }))}
                    className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>-</button>
                  {item.quantity}
                  <button
                    onClick={()=> 
                    dispatch(increamentQuantity({
                      _id : item._id,
                      title : item.title,
                      image : item.image,
                      price : item.price,
                      quantity : 1,
                      description : item.description,
                    }))}
                    className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>+</button>
                </div>
              </div>
              <p className='w-14'>${item.quantity * item.price}</p>
            </div>
          ))
        }
      </div>
      <button
        onClick={() =>
          dispatch(resetItem()) & toast.error("Your Cart is Empty!")
        }
        className='text-white bg-red-500 py-1 px-6 mt-5 ml-7 hover:bg-red-800 duration-300'>
        Reset Cart
      </button>
      <Link to={'/'}>
        <button className='flex items-center justify-center mt-5 ml-7 gap-1 text-gray-400 hover:text-black duration-300'>
          <BsArrowLeft />
          go shopping
        </button>
      </Link>
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
