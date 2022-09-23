import Link from 'next/link';
import React from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';



const checkout = ({ cart,  subTotal, addToCart, removeFromCart }) => {
  return (
    <>
      <div className='container m-auto'>
        <h1 className="text-center font-bold text-5xl">Checkout</h1>
        <h2 className="text-center font-semibold text-2xl">1. Delivery Details</h2>
        <div className="mx-auto flex my-4 justify-center">

          <div className="w-1/2 m-1">
            <div className='px-2 w-full'>
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className=" w-1/2 m-1">
            <div className='px-2 w-full'>
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>



        </div>
        <div className=" mx-8 w-full">
          <div className='px-2 w-full'>
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea type="address" id="address" name="address" cols="10" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>
          </div>
        </div>
        <div className="mx-8 flex my-4 justify-center">
          <div className="w-1/2 m-1">
            <div className='px-2 w-full'>
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className=" w-1/2 m-1">
            <div className='px-2 w-full'>
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
              <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="mx-8  flex my-4 justify-center">
          <div className="w-1/2 m-1">
            <div className='px-2 w-full'>
              <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
              <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className=" w-1/2 m-1">
            <div className='px-2 w-full'>
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
              <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <h3 className="text-center font-semibold text-2xl">2. Review cart Details</h3>
        <div className="  sidecart  p-10 ">

          <ol className="font-semibold list-decimal">


            {Object.keys(cart).length=== 0 && < div className="my-4 font-semibold">your cart is empty</div>}
            {Object.keys(cart).map((k)=> {return <li key={k}>
             
              <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
                  <div className="flex font-semibold items-center jsutify-center w-1/3 text-lg">
                    <AiFillMinusCircle onClick={() => {removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="cursor-pointer text-pink-500" />
                    <span
                      className="mx-2 text-sm">{cart[k].qty}
                    </span>
                    <AiFillPlusCircle onClick={() => {
                      addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)
                    }} className="cursor-pointer text-pink-500" />
                  </div>
                </div>
              </li>
            })}
          </ol>
          <div className="total">subtotal=₹{subTotal}</div>
          <Link href={'/checkout'}><button className="flex m-1 text-white bg-pink-300 border-0 py-1 px-1 focus:outline-none hover:bg-pink-600 rounded text-sm"> Pay ₹{subTotal}</button></Link>

        </div>
      </div>
    </>
  )
}

export default checkout