import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import ProductDetail  from "../ProductDetail/ProductDetail"
/* const {data} = await axios(URL), data.products = the array of objects where URL equals the information then console.log(data) */

export default function App() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]) //contains itemId and quantity
  const URL = 'https://codepath-store-api.herokuapp.com/store'


  function handleOnToggle(isOpen) {
    setIsOpen(!isOpen)
  } //can also pass in value that is the previous value because then it will be a function otherwise
  //when doing onclick it will call the function where its already a function so needs a () => to become a function definition for ()

  function handleAddItemToCart(productId) {
    let checkExist = false;

    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        shoppingCart[i].quantity += 1;
        checkExist = true;
        break;
      }
    }
    if (!checkExist) {
      let newItem = { itemId: productId, quantity: 1 }
      setShoppingCart([...shoppingCart, newItem]) //adds it to the beginning of the array
    }
    console.log("adding product", productId)
    console.log(shoppingCart)
  }  

    function handleRemoveItemFromCart(productId) {
      for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].itemId == productId) {
          if (shoppingCart[i].quantity == 1) {
            let temp = shoppingCart.filter(item => item.itemId !== productId)
            setShoppingCart(temp)
          }
          shoppingCart[i].quantity -= 1;
        }
        return;
      }
      console.log("removing product",productId)
      console.log(shoppingCart)
    }

    function handleOnCheckoutFormChange(name, value) {
      //TODO
    }

    function handleOnSubmitCheckoutForm() {
      //some axios post with user field
    }

    React.useEffect(() => {
      setIsFetching(true)
      axios.get(URL).then((response) => {
        setProducts(response.data.products);
        setIsFetching(false)
      }).catch(function (error) {
        if (products.length == 0) {
          setError("Error: Length of Products is 0")
        }
      })
    })

    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <div className="container">
              <Sidebar
                isOpen={isOpen}
                //shoppingCart={shoppingCart}
                products={products}
                // checkoutForm={checkOutForm}
                handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                handleOnToggle={handleOnToggle}
              />
              <div className="wrapper">
                <div className="nav-wrapper">
                  <Navbar />
                </div>
                <div className="home">
                  <Routes>
                    <Route path="/"
                      element={
                        <Home
                          products={products}
                          handleAddItemToCart={handleAddItemToCart}
                          handleRemoveItemToCart={handleRemoveItemFromCart}
                        />
                      } />
                    {/* ask how to change into variable */}
                    <Route path="/products/:productId"
                      element={<ProductDetail
                        handleAddItemToCart={handleAddItemToCart}
                        handleRemoveItemToCart={handleRemoveItemFromCart}
                      />} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        
        </BrowserRouter>
      </div>
    )
  }

//userInfo.address.city checks if all is false || 'no value yet' then return backup value