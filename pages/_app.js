import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'


function MyApp ({ Component, pageProps }) {

 


  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const cart = JSON.parse(localStorage.getItem('myCart'))
    }else{
    try {
      if (localStorage.getItems("myCart")) {
        setCart(JSON.parse(localStorage.getItems("myCart")))
        saveCart(JSON.parse(localStorage.getItems("myCart")))
      
      }}
     catch (error) {
      console.error(error);
      localStorage.clear()
    }

  
  }} , [])


   
    // save cart to local storage
    const saveCart =  (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))


    // calculate subtotal
    let subt = 0;
    let keys = Object.keys(myCart)
     
    for (let i = 0; i<keys.length; i++) {
      console.log(keys)
      
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);


  }


  // Add items to the cart
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] =  { qty: 1, price, name, size, variant }
    }

    // cart not clear due to refresh
    setCart(newCart)
    console.log(newCart)
    saveCart(newCart)
  }
    // clear the cart
  const clearCart = () => {
    setCart({})
    saveCart({})
  }

    // remove from cart
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)

  }


  return <><Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} /><Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} /> <Footer /></>
}

export default MyApp
