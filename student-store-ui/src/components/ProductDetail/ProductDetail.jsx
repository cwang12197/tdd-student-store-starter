import * as React from "react"
import { useState, useEffect } from 'react'
import "./ProductDetail.css"
import  ProductView  from '../ProductView/ProductView'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NotFound from "../NotFound/NotFound"

export default function ProductDetail({
    handleAddItemToCart = "",
    handleRemoveItemToCart = "",
    shoppingCart,
    isFetching,
    error }) {
    
    const [product, setProduct] = useState({})
    let { productId } = useParams();
    const URL = `https://codepath-store-api.herokuapp.com/store/`

    useEffect(() => {
        axios.get(`${URL}${productId}`).then(response => {
            setProduct(response.data.product )
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className="product-detail">
           {!error && <ProductView 
                product={product} 
                productId={productId}
                shoppingCart = {shoppingCart}
                handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemToCart={handleRemoveItemToCart}
                showDescription = {true}
              />
            }
            {isFetching &&
                <><h1 className="loading"> Loading...</h1>
                    <NotFound 
                /></>}
            
        </div>
    )
}