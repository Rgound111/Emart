import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/emartSlice';
import { toast, ToastContainer } from 'react-toastify';

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = product.title;
  //  console.log(id)
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("")
  }

  const rootId = idString(id);
  // console.log(rootId)

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: { product }
    }
    )

  }

  return (
    <div className='group relative'>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img onClick={handleDetails} className='w-full h-full group-hover:scale-110 duration-500'
          src={product.image} alt="productImg" />
      </div> 

      <div className='border-[1px] px-2 py-4'>
        <div className='flex justify-between items-center'>

          <div>
            <h2 className='font-titleFont font-bold text-base'>
              {product.title.substring(0, 15)}
            </h2>
          </div>

          <div className='flex justify-end w-28 gap-2 relative overflow-hidden text-sm'>
            <div className='flex gap-2 transform  group-hover:translate-x-24 transition-transform duration-500'>
              <p className='line-through text-gray-500'>${product.oldPrice}</p>
              <p className='font-semibold'>${product.price}</p>
            </div>
            <p onClick={() =>
              dispatch(
                addToCart({
                  _id: product._id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: 1,
                  description: product.description,
                })) & toast.success(`${product.title} is added`)
              }
              className='absolute w-[100px] top-0 z-20 flex items-center text-gray-500 hover:text-gray-900 transform -translate-x-32 group-hover:translate-x-0 transition-transform duration-500 cursor-pointer'>add to cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className='absolute top-4 right-0'>
          {product.isNew && (<p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>Sale</p>)}
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
  )
}

export default ProductsCard
