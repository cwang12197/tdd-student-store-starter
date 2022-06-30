import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Orders from "../Orders/Orders";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [purchases, setPurchases] = useState([]);

  const URL = "http://localhost:3001/store";
  const PURCHASE_URL = "http://localhost:3001/store/purchases";

  React.useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        let newProducts = response.data.products;
        if (category !== "All Categories") {
          newProducts = newProducts.filter(
            (item) => item.category == category.toLowerCase()
          );
        }
        newProducts = newProducts.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(newProducts);
      })
      .catch((error) => {
        console.log(error);
        return <NotFound />;
      });
  }, [category, searchTerm]);
  React.useEffect(() => {
    axios.get(PURCHASE_URL).then((response) => {
      setPurchases(response.data.purchases);
    });
  }, []);

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  function handleAddItemToCart(productId) {
    var index = -1;
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        index = i;
      }
    }
    var newShoppingCart = [...shoppingCart];

    if (index == -1) {
      var newItem = {
        itemId: productId,
        quantity: 1,
      };

      newShoppingCart.push(newItem);
    } else {
      newShoppingCart[index].quantity++;
    }
    setShoppingCart(newShoppingCart);
  }

  function handleRemoveItemFromCart(productId) {
    var index = -1;

    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        index = i;
      }
    }
    var newShoppingCart = [...shoppingCart];

    if (index > -1) {
      newShoppingCart[index].quantity--;
      if (newShoppingCart[index].quantity == 0) {
        newShoppingCart.splice(index, 1);
      }
    }
    setShoppingCart(newShoppingCart);
  }

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm({
      ...checkoutForm,
      [name]: value,
    });
  }

  function handleOnSubmitCheckoutForm() {
    axios
      .post(URL, { shoppingCart: shoppingCart, user: checkoutForm })
      .then(function (response) {
        setCheckoutMessage("Success!");
        setShoppingCart([]);
        setCheckoutForm({ name: "", email: "" });
      })
      .catch(function (error) {
        setCheckoutMessage(error);
      });
  }
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
              checkoutMessage={checkoutMessage}
            />
            <div className="wrapper">
              <div className="nav-wrapper">
                <Navbar />
              </div>
              <div>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home
                        products={products}
                        setProducts={setProducts}
                        shoppingCart={shoppingCart}
                        handleAddItemToCart={handleAddItemToCart}
                        handleRemoveItemToCart={handleRemoveItemFromCart}
                        searchTerm={searchTerm}
                        handleSearchChange={handleSearchChange}
                        setCategory={setCategory}
                      />
                    }
                  />
                  <Route
                    path="/store/:productId"
                    element={
                      <ProductDetail
                        handleAddItemToCart={handleAddItemToCart}
                        handleRemoveItemToCart={handleRemoveItemFromCart}
                        shoppingCart={shoppingCart}
                        isFetching={isFetching}
                        setIsFetching={setIsFetching}
                        error={error}
                        setError={setError}
                      />
                    }
                  />
                  <Route
                    path="/store/purchases"
                    element={<Orders purchases={purchases} />}
                  />
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
  );
}
