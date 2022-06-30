import * as React from "react";
import { useState, useEffect } from "react";
import "./ProductDetail.css";
import ProductView from "../ProductView/ProductView";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail({
  handleAddItemToCart = "",
  handleRemoveItemToCart = "",
  shoppingCart,
  isFetching,
  setIsFetching,
error,
}) {
  const [product, setProduct] = useState({});
  let { productId } = useParams();

  useEffect(() => {
      setIsFetching(true);
    axios
      .get(`http://localhost:3001/store/${productId}`)
        .then(response => {
          console.log(`http://localhost:3001/store/${productId}`)
          setProduct(response.data.product);
          setIsFetching(false);
      })
  }, []);

  return (
    <div className="product-detail">
      {(
        < ProductView
          product={product}
          productId={product.id}
          shoppingCart={shoppingCart}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={true}
        />
      )}
      {isFetching && (
        <>
          <h1 className="loading"> Loading...</h1>
          <NotFound />
        </>
      )}
    </div>
  );
}
