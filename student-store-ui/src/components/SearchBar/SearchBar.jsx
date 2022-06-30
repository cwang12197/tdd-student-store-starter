import axios from "axios"
import { useState } from 'react'
import * as React from "react"
import NotFound from "../NotFound/NotFound"
import "./SearchBar.css"

export default function SearchBar({
    products,
    setProducts,
    searchTerm,
    handleSearchChange,
    setCategory }) {

    return (
        <><span className="search-bar">
            <input type="text"
                name="search"
                placeholder="Search"
                onChange={handleSearchChange}>

            </input>
        </span><div className="categories">
                <ul className="category-menu">
                    <li> <button onClick={() => { setCategory("All Categories") }}>All Categories</button></li>
                    <li> <button onClick={() => { setCategory("clothing") }}>Clothing</button></li>
                    <li> <button onClick={() => { setCategory("food") }}>Food</button></li>
                    <li> <button onClick={() => { setCategory("accessories") }}>Accessories</button></li>
                    <li> <button onClick={() => { setCategory("tech") }}>Tech</button></li>
                </ul>
            </div></>
    )

}
