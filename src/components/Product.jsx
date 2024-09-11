import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/emartSlice';
import { toast, ToastContainer } from 'react-toastify';

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const location = useLocation();
  let [baseQty, setBaseQty] = useState(1);

  useEffect(() => {
    setDetails(location.state.product);
  }, [location.state.product]);

  return (
    <div className='p-10'>
      <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10'>
        <div className='relative w-full lg:w-2/5'>
          <img
            className='w-full h-[550px] object-cover'
            src={details.image}
            alt="productImage"
          />
          {details.isNew && (
            <div className='absolute top-4 right-4'>
              <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>Sale</p>
            </div>
          )}
        </div>
        <div className='w-full lg:w-3/5 flex flex-col gap-8 lg:gap-12 justify-center'>
          <div>
            <h2 className='font-semibold text-2xl lg:text-4xl'>{details.title}</h2>
            <div className='flex items-center gap-4 mt-3'>
              <p className='line-through font-base text-gray-500'>${details.oldPrice}</p>
              <p className='text-xl lg:text-2xl font-medium'>${details.price}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <p className='text-gray-500 text-xs'>(1 customer review)</p>
          </div>
          <div className='text-gray-500'>{details.description}</div>
          <div className='flex flex-col lg:flex-row gap-4'>
            <div className='w-full lg:w-52 flex justify-between items-center p-3 text-gray-500 gap-4 border'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button
                  onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
                  className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>-</button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className='border h-5 font-normal text-lg flex justify-center items-center px-2 hover:text-white hover:bg-gray-700 duration-300 active:bg-black'>+</button>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(addToCart({
                  _id: details._id,
                  title: details.title,
                  image: details.image,
                  price: details.price,
                  quantity: baseQty,
                  description: details.description,
                }));
                toast.success(`${details.title} is added`);
              }}
              className='bg-black text-white py-3 px-6 active:bg-gray-800'>
              Add to Cart
            </button>
          </div>
          <p className='text-base text-gray-500'>
            Category: <span className='font-medium capitalize'>{details.category}</span>
          </p>
        </div>
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
  );
};

export default Product;
