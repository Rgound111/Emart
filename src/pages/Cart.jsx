import React, { useEffect } from 'react'
import { cartBg } from '../assests/index'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {
  const productData = useSelector((state) => state.emart.productData)
  const userInfo = useSelector((state) => state.emart.userInfo)
  const [totalprice, setTotalprice] = useState()
  const [paynow, setPaynow] = useState(false)

  useEffect(() => {
    let price = 0;
    productData.map((item) =>
      price += item.price * item.quantity
    );
    setTotalprice(price.toFixed(2));
  }, [])

  const handleCheckout = () => {
    if (userInfo) {
      setPaynow(true)
    } else {
      toast.error("Please Sign In to Checkout")
    }
  }

  if (productData.length !== 0) {
    return (
      <div >
        <img className='w-full h-60 object-cover' src={cartBg} alt="CartImg" />
        <div className='max-w-screen-xl mx-auto py-20 flex'>
          <CartItem />
          <div className='w-1/3 bg-[#f9f8f8] px-4 py-6' >
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400'>
              <h2 className='text-2xl font-medium'>Cart totals</h2>
              <p className='flex items-center text-base gap-4'>
                Subtotal {" "}
                <span className='font-titleFont font-bold text-lg'> $ {totalprice}</span>
              </p>
              <p className='flex items-start text-base gap-4'>
                Shipping {" "}
                <span className=''> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
              </p>
            </div>
            <p className='font-titleFont font-semibold flex items-center justify-between mt-6'>
              Total <span className='text-xl font-bold'>$ {totalprice}</span>
            </p>
            <button onClick={handleCheckout} className='w-full text-base bg-black text-white py-3 mt-6 '>proceed to checkout</button>
            { paynow && <div>
              <StripeCheckout
              stripeKey=''
              name='Emart Online Shopping'
              amount={totalAmt * 100}
              label='Pay to emart'
              description={`Your Payment is your $${totalAmt}`}
              token={payment}
              email={userInfo.email}
              />
            </div> }
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <p className='flex flex-col  justify-center items-center py-2'>
        <span className=' text-base font-medium font-titleFont tracking-wide hover:text-gray-700 '>Please Add some Product to cart</span>
        <Link to={'/'}>
          <button className='flex items-center justify-center mt-2 ml-7 gap-1 text-gray-500 hover:text-black duration-300'>
            <BsArrowLeft />
            go shopping
          </button>
        </Link></p>
    )
  }
}

export default Cart
