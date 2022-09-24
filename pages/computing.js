import React from 'react'
import Image from "next/image";
import Product from '../models/Product';
import mongoose from 'mongoose';
import Link from 'next/link';


const computing = ({ products }) => {
  console.log(products)
  return (
    <div>

      <section className="text-gray-600 body-font shadow ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center flex-wrap -m-4">
          {Object.keys(products).map((item) => {

              return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}><div className="  lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer">
                <a className="block relative h-48 rounded overflow-hidden">
                  {/* <Image src={"/products[item].img"} className="m-auto h-[30vh] block" alt="Picture of the author" width={100} height={100}
                  /> */}
                   <img alt="product image" className="m-auto h-[30vh] block" src={products[item].img} />
                </a>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1">{products[item].price}</p>
                  {/* <div className="mt-1">
                    
                    
                    {products[item].color.includes('red') &&  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('pink') &&  <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('yellow') &&  <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('green') &&  <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('purple') &&  <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('black') &&  <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                  </div>
                  <div className="mt-1">
                    {products[item].size.includes('s') && <span className="border border-gray-300 px-1 mx-1">S</span>}
                    {products[item].size.includes('M') && <span className="border border-gray-300 px-1 mx-1">M</span>}
                    {products[item].size.includes('XL') && <span className="border border-gray-300 px-1 mx-1">xl</span>}
                    {products[item].size.includes('XXL') && <span className="border border-gray-300 px-1 mx-1">XXL</span>}
                    {products[item].size.includes('XXXL') && <span className="border border-gray-300 px-1 mx-1">XXXL</span>}
                  </div> */}
                </div>
              </div>
              </Link>
            })}

          </div>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps (context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: 'computing' })
  let computing = {}
    for (let item of products) {
      if (item.title in computing) {
        if (!computing[item.title].color.includes(item.color) && item.availableQty > 0) {
          computing[item.title].color.push(item.color)
        }
        if (!computing[item.title].size.includes(item.size) && item.availableQty > 0) {
          computing[item.title].size.push(item.size)
        }
      }
      else {
        computing[item.title] = JSON.parse(JSON.stringify(item))
        if (item.availableQty > 0) {
          computing[item.title].color = [item.color]
          computing[item.title].size = [item.size]
        }
      }
    }
  return {
      props: { products: JSON.parse(JSON.stringify(computing)) },// will be passed to the page component as props

    }
  }

  export default computing 