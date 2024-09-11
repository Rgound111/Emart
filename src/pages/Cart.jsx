import React, { useEffect, useState } from 'react';
import { cartBg } from '../assests/index';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const productData = useSelector((state) => state.emart.productData);
  const userInfo = useSelector((state) => state.emart.userInfo);
  const [totalPrice, setTotalPrice] = useState(0);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalPrice(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign In to Checkout");
    }
  };

  return (
    <div>
      <img className='w-full h-60 object-cover' src={cartBg} alt="Cart" />
      <div className='max-w-screen-xl mx-auto py-20 flex flex-col lg:flex-row'>
        <CartItem />
        {productData.length > 0 ? (
          <div className='w-full lg:w-1/3 bg-[#f9f8f8] px-4 py-6'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400'>
              <h2 className='text-2xl font-medium'>Cart Totals</h2>
              <p className='flex items-center text-base gap-4'>
                Subtotal{" "}
                <span className='font-titleFont font-bold text-lg'>${totalPrice}</span>
              </p>
              <p className='flex items-start text-base gap-4'>
                Shipping{" "}
                <span className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
              </p>
            </div>
            <p className='font-titleFont font-semibold flex items-center justify-between mt-6'>
              Total <span className='text-xl font-bold'>${totalPrice}</span>
            </p>
            <button onClick={handleCheckout} className='w-full text-base bg-black text-white py-3 mt-6'>
              Proceed to Checkout
            </button>
            {payNow && (
              <div className='flex justify-center items-center mt-4 w-full'>
                <StripeCheckout
                  stripeKey='pk_test_51Nmy6ISDBMJvueTa8VXGBPG1CmVT1SqvBwpCefFqLRZrN2GqkTK4KHuOYC6hBUUTAizF9Xvoj4Mf8TmASqn1Ph1h00r8HOC3Wd'
                  name='Emart Online Shopping'
                  amount={totalPrice * 100}
                  label='Pay to Emart'
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        ) : (
          <p className='flex flex-col justify-center items-center py-10'>
            <span className='text-base font-medium font-titleFont tracking-wide hover:text-gray-700'>
              Please add some products to the cart
            </span>
            <Link to={'/'}>
              <button className='flex items-center justify-center mt-2 px-6 py-2 bg-gray-600 text-white hover:bg-gray-800 duration-300'>
                <BsArrowLeft />
                Go Shopping
              </button>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
