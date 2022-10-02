import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


function MyApp ({ Component, pageProps }) {




  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)

  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const cart = JSON.parse(localStorage.getItem('myCart'))
    } else {
      try {
        if (localStorage.getItems("myCart")) {
          setCart(JSON.parse(localStorage.getItems("myCart")))
          saveCart(JSON.parse(localStorage.getItems("myCart")))

        }
      }
      catch (error) {
        console.error(error);
        localStorage.clear()
      }
     


    }

    // JWT token authentication  save in localStorage
    const token =localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query])


  // Logout form the account in the webiste


  const logout =() => {
    localStorage.removeItem("token ") 
    setUser({ value:null})
    setKey(Math.random())
    
    
  }



  // save cart to local storage
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))


    // calculate subtotal
    let subt = 0;
    let keys = Object.keys(myCart)

    for (let i = 0; i < keys.length; i++) {
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
      newCart[itemCode] = { qty: 1, price, name, size, variant }
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


  // Buy now button functionality..

  const buyNow = (itemCode, qty, price, name, size, variant) => {

    let newCart = { itemCode: { qty: 1, price, name, size, variant } }

    setCart(newCart)
    console.log(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  return <><Navbar Logout= {logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} /><Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} /> <Footer /></>
}

export default MyApp
