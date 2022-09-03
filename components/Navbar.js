import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';
import { useRef } from 'react';
import {
  AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle
} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs';





const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {


  console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')


    }
  }
  const ref = useRef()

  return (

        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow sticky top-0 bg-white z-10">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href='/'><Image
              src={logo}
              alt="Picture of the author"
              width={50}
              height={50}
            /></Link>

            <span className="ml-3 text-xl">Ecommerce</span>
          </a>
          <nav className="md:ml-auto font-bold flex flex-wrap items-center text-base justify-center">
            <Link href={'/electronics'}><a className="mr-5 hover:text-gray-900">Electronics</a></Link>
            <Link href={'/clothing'}><a className="mr-5 hover:text-gray-900">Clothing</a></Link>

            <Link href={'/computing'}><a className="mr-5 hover:text-gray-900">Computing</a></Link>
            <Link href={'/digitalservices'}><a className="mr-5 hover:text-gray-900">Digital Services</a></Link>
            <Link href={'/blogs'}><a className="mr-5 hover:text-gray-900">Blogs</a></Link>
            <Link href={'/electronics'}><a className="mr-5 hover:text-gray-900">Contact Us</a></Link>
          </nav>
          <div onClick={toggleCart}>

            <AiOutlineShoppingCart className="text-2xl" />
          </div>
          <div ref={ref} className=" w-100 h-[100vh] sidecart absolute top-1 right-0 bg-pink-100 p-10 transition-transform translate-x-full transform">
            <h2 className="font-bold text-xl">
              Shopping Cart
            </h2>
            <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-600">
              <AiFillCloseCircle />
            </span>
            <ol className="font-semibold list-decimal">
              
              
              {Object.keys(cart).length ==0 && < div className="my-4 font-semibold">your cart is empty</div>}
              {Object.keys(cart).map((k)=>{return <li key={k}>
                           
                  <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">{cart[k].name} </div>
                  <div className="flex font-semibold items-center jsutify-center w-1/3 text-lg"><AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="cursor-pointer text-pink-500" /><span className="mx-2 text-sm">{cart[k].qty}</span> <AiFillPlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className="cursor-pointer text-pink-500" /></div>
                </div>
              </li>})}
           </ol>
           <span className="total">Subtotal={subTotal}</span>
            <div className='flex'>
            <Link href={'/checkout'}><button className="flex m-1 text-white bg-pink-300 border-0 py-1 px-1 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className=" m-1"/> Checkout</button></Link>
            
            <button onClick={clearCart} className="flex m-1 text-white bg-pink-300 border-0 py-1 px-1 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear cart</button>
            </div>

          </div>
        </div>
  
  );
};

export default Navbar