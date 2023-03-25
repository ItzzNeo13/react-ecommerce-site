import React from "react";
// Importing products array from products.js file.
import { PRODUCTS } from "../../products" 
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="title"><h1>Neo's Tech Stack</h1></div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    );
}