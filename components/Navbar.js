import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { 
  AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link href='/'><Image
                src={logo}
                alt="Picture of the author"
                width={100}
                height={100}
              /></Link>
              
            <span className="ml-3 text-xl">Ecommerce</span>
          </a>
          <nav className="md:ml-auto font-bold flex flex-wrap items-center text-base justify-center">
            <Link href='/electronics'><a className="mr-5 hover:text-gray-900">Electronics</a></Link>
            <Link href={'/clothing'}><a className="mr-5 hover:text-gray-900">Clothing</a></Link>
           
            <Link href={'/computing'}><a className="mr-5 hover:text-gray-900">Computing</a></Link>
            <Link href={'/digitalservices'}><a className="mr-5 hover:text-gray-900">Digital Services</a></Link>
            <Link href={'/blogs'}><a className="mr-5 hover:text-gray-900">Blogs</a></Link>
            <Link href={'/electronics'}><a className="mr-5 hover:text-gray-900">Contact Us</a></Link>
          </nav>
          <div>

            <AiOutlineShoppingCart className="text-2xl"/>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
