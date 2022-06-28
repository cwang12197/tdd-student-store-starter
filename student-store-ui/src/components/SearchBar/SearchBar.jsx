import axios from "axios"
import { useState } from 'react'
import * as React from "react"
import NotFound from "../NotFound/NotFound"
import "./SearchBar.css"

export default function SearchBar({products, setProducts }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("All Categories")
    const URL = "https://codepath-store-api.herokuapp.com/store"
    
    React.useEffect(() => {
        axios.get(URL).then((response) => {
            let newProducts = response.data.products
            if (category !== "All Categories") {
                newProducts = newProducts.filter(item => item.category == category.toLowerCase())
            }
            newProducts = newProducts.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setProducts(newProducts)
        }).catch((error) => {
            console.log(error)
            return <NotFound />
        })
       
    }, [category, searchTerm])

    return (
        <><span className="search-bar">
            <input type="text"
                name="search"
                placeholder="Search"
                onChange={((event) => setSearchTerm(event.target.value))}>

            </input>
        </span><div className="categories">
                <ul className = "category-menu">
        <li> <button onClick={() => { setCategory("All Categories") }}>All Categories</button></li>
                    <li> <button onClick={() => { setCategory("clothing") }}>Clothing</button></li>
                    <li> <button onClick={() => { setCategory("food") }}>Food</button></li>
                    <li> <button onClick={() => { setCategory("accessories") }}>Accessories</button></li>
                    <li> <button onClick={() => { setCategory("tech") }}>Tech</button></li>
                    </ul>
            </div></>
    )
}


