import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
//.. brings it one folder up, ../../ brings two folders up
export default function Home({products = "", handleAddItemToCart = "", handleRemoveItemToCart = ""}) {
  //console.log("products", products)
  return (
    <div className="home">
      <Hero> </Hero>
      {/* <SubNavbar></SubNavbar> */}
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart = {handleRemoveItemToCart}  
      />

    </div>
  )
}
