import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
//.. brings it one folder up, ../../ brings two folders up
export default function Home({products = "", setProducts, shoppingCart, handleAddItemToCart = "", handleRemoveItemToCart = ""}) {
  //console.log("products", products)
  return (
    <div className="home">
      <ProductGrid
        products={products}
        shoppingCart = {shoppingCart}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart = {handleRemoveItemToCart}  
      />

    </div>
  )
}
