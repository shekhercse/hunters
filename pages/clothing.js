import React from 'react'
import Image from "next/image";
import Product from '../models/Product';
import mongoose from 'mongoose';
import Link from 'next/link';


const clothing = ({products}) => {
  console.log(products)
  return (
    <div>

      <section className="text-gray-600 body-font shadow">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
           { products.map((item)=>{
           
           <Link passHref={true} key={item._id} href={`/Product/${item.slug}`}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  src={item.img}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">item.category</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">item.title</h2>
                <p className="mt-1">item.price</p>
              </div>
              </div>
            </Link>})}

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
    let products = await Product.find()
  return {
    props: {products: JSON.parse(JSON.stringify(products))},// will be passed to the page component as props
    
  }
}

export default clothing