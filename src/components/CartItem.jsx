import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from "react-icons/md";
import { BsArrowLeft } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import { decreamentQuantity, deleteItem, increamentQuantity, resetItem } from '../redux/emartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.emart.productData);

  return (
    <div className='w-full max-w-4xl px-4 md:px-6 lg:px-10 mx-auto'>
      <div className='w-full'>
        <h2 className='text-2xl font-titleFont mb-4'>Shopping Cart</h2>
      </div>
      <div>
        {
          productData.map((item) => (
            <div key={item._id} className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mt-6'>
              <div className='flex items-center gap-2'>
                <MdOutlineClose
                  onClick={() => dispatch(deleteItem(item._id)) & toast.error(`${item.title} is deleted`)}
                  className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300'
                />
                <img className='w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover' src={item.image} alt="productImg" />
              </div>
              <h2 className='w-full md:w-1/4 text-sm md:text-base'>{item.title}</h2>
              <p className='w-20 text-sm md:text-base'>${item.price}</p>
              <div className='w-full md:w-1/4 flex flex-col md:flex-row justify-between items-center p-3 text-gray-500 gap-4 border'>
                <p className='text-sm'>Quantity</p>
                <div className='flex items-center gap-4 text-sm font-semibold'>
                  <button
                    onClick={() =>
                      item.quantity > 1 && dispatch(decreamentQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      }))
                    }
                    className={`border h-8 px-2 font-normal text-lg flex justify-center items-center hover:text-white hover:bg-gray-700 duration-300 active:bg-black ${item.quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() =>
                      dispatch(increamentQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      }))
                    }
                    className='border h-8 px-2 font-normal text-lg flex justify-center items-center hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>
                    +
                  </button>
                </div>
              </div>
              <p className='w-20 text-sm md:text-base'>${item.quantity * item.price}</p>
            </div>
          ))
        }
      </div>
      <button
        onClick={() =>
          dispatch(resetItem()) & toast.error("Your Cart is Empty!")
        }
        className='text-white bg-red-500 py-2 px-6 mt-5 hover:bg-red-800 duration-300'>
        Reset Cart
      </button>
      <Link to={'/'}>
        <button className='flex items-center justify-center mt-5 gap-1 text-gray-400 hover:text-black duration-300'>
          <BsArrowLeft />
          Go Shopping
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
  );
}

export default CartItem;
