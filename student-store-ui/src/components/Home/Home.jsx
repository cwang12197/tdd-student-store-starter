import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchBar from "../SearchBar/SearchBar";
import Hero from "../Hero/Hero";

export default function Home({
  products = "",
  setProducts,
  shoppingCart,
  handleAddItemToCart = "",
  handleRemoveItemToCart = "",
  searchTerm,
  handleSearchChange,
  setCategory,
}) {
  return (
    <>
      <Hero />
      <div className="subnavbar-wrapper">
        <SearchBar
          products={products}
          setProducts={setProducts}
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          setCategory={setCategory}
        />
      </div>
      <div className="home">
        <ProductGrid
          products={products}
          setProducts={setProducts}
          shoppingCart={shoppingCart}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      </div>
    </>
  );
}
