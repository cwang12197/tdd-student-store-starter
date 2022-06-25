import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"
import About from "../About/About"
import Contact from "../Contact/Contact"



export default function App() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]) 
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" })
  const [checkoutMessage, setCheckoutMessage] = useState("")

  const URL = 'https://codepath-store-api.herokuapp.com/store'


  function handleOnToggle() {
    setIsOpen(!isOpen)
  } 
  
  function handleAddItemToCart(productId) {
   
    var itemIndex = -1
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        itemIndex = i
      }
    }
    var newShoppingCart = [...shoppingCart]
    
    if (itemIndex == -1) {
     
      var newItem = {
        itemId: productId,
        quantity: 1
      }
     
      newShoppingCart.push(newItem)

    } else {
      newShoppingCart[itemIndex].quantity++
    }
    setShoppingCart(newShoppingCart)
  }

  function handleRemoveItemFromCart(productId) {
    var itemIndex = -1
   
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        itemIndex = i
      }
    }
    var newShoppingCart = [...shoppingCart]
    
    if (itemIndex > -1) {
      newShoppingCart[itemIndex].quantity--
      if (newShoppingCart[itemIndex].quantity == 0) {
        newShoppingCart.splice(itemIndex, 1)
      }
    }
    setShoppingCart(newShoppingCart)
  }

    function handleOnCheckoutFormChange(name, value) {
      setCheckoutForm({
        ...checkoutForm,
        [name]: value,
      })
    }

  function handleOnSubmitCheckoutForm() {
    let newUser = {
      name: checkoutForm.name,
      email: checkoutForm.email
    }
    if (newUser.name == "" || newUser.email == "") {
      setCheckoutMessage("Error: Please input both your name and email");
      return;
    }
    if (shoppingCart.length == 0) {
      setCheckoutMessage("Error: Your shopping cart is empty");
      return;
    }

          setCheckoutMessage("Success!")
          setShoppingCart([])
          setCheckoutForm({ name: "", email: "" })
  
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
    }, [])

    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <div className="container">
              <Sidebar
                isOpen={isOpen}
                shoppingCart={shoppingCart}
                products={products}
                checkoutForm={checkoutForm}
                handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                handleOnToggle={handleOnToggle}
                checkoutMessage = {checkoutMessage}
              />
              <div className="wrapper">
                <div className="nav-wrapper">
                  <Navbar />
                </div>
                <Hero 
                />
                <div className="subnavbar-wrapper">
                  <SearchBar
                    products={products}
                    setProducts={setProducts}
                  />
                </div>
                <div className="home">
                  <Routes>
                    <Route path="/"
                      element={
                        <Home
                          products={products}
                          setProducts = {setProducts}
                          shoppingCart={shoppingCart}
                          handleAddItemToCart={handleAddItemToCart}
                          handleRemoveItemToCart={handleRemoveItemFromCart}
                        />
                      } />
                    <Route path="/products/:productId"
                      element={<ProductDetail
                        handleAddItemToCart={handleAddItemToCart}
                        handleRemoveItemToCart={handleRemoveItemFromCart}
                        shoppingCart={shoppingCart}
                        isFetching={isFetching}
                        error = {error}
                      />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <About></About>
                <Contact></Contact>
              </div>
            </div>
          </main>

        </BrowserRouter>
      </div>
    )
  }
