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
  const [error, setError] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]) 
  const [checkoutForm, setCheckoutForm] = useState({ email: "", name: "" })
  const URL = 'https://codepath-store-api.herokuapp.com/store'


  function handleOnToggle() {
    setIsOpen(!isOpen)
  } 
  
  function handleAddItemToCart(productId) {
    var newShoppingCart = [...shoppingCart];
    if (!newShoppingCart[productId]) newShoppingCart[productId] = {}
    newShoppingCart[productId].quantity = (newShoppingCart[productId].quantity ?? 0) + 1
    setShoppingCart(newShoppingCart)
  }  

  function handleRemoveItemFromCart(productId) {
    var newShoppingCart = [...shoppingCart]
    if (!newShoppingCart[productId]) {
      newShoppingCart[productId] = {}
      newShoppingCart[productId].quantity = 0;
    }
    if (newShoppingCart[productId].quantity == 0) newShoppingCart.filter((id) => {products.itemId !== id});
    else { newShoppingCart[productId].quantity = (newShoppingCart[productId].quantity ?? 0) - 1 }
    setShoppingCart(newShoppingCart)

    
    }

    function handleOnCheckoutFormChange(name, value) {
      setCheckoutForm({
        ...checkoutForm,
        [name]: value,
      })
    }

    function handleOnSubmitCheckoutForm() {
      axios.post("http://localhost:3001/store", { user: checkoutForm, shoppingCart: shoppingCart })
        .then((response) => {
          setShoppingCart([])
          setCheckoutForm({ email: "", name: "" })
        })
        .catch((error) => { setError(error); console.log(error) })
  
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
                error = {error}
                setError = {setError}
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
