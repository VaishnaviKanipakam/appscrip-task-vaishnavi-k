import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";

import "../App.css";

const ProductCard = ({ toggleSideFilters, sortProducts }) => {
  const [productsList, setProductsList] = useState([]);


  const getAllProducts = async () => {
    const url = "https://fakestoreapi.com/products";

    const options = {
      methos: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      const updatedData = data.map((eachProduct) => ({
        id: eachProduct.id,
        title: eachProduct.title,
        image: eachProduct.image,
        price: eachProduct.price
      }));
      setProductsList(updatedData);
      
    }
  };

  const geSortedProducts = () => {
    const sortedProducts = [...productsList]

    if(sortProducts === "low-to-high"){
      return sortedProducts.sort((a,b) => a.price - b.price)
    }

     if(sortProducts === "high-to-low"){
      return sortedProducts.sort((a,b) => b.price - a.price)
    }

    return sortedProducts
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ul
      className={`product-card-container ${
        toggleSideFilters ? "three-cols" : "four-cols"
      }`}
    >
      {geSortedProducts().map((eachProduct) => (
        <li key={eachProduct.id} className="product-card-item-container">
          <img
            src={eachProduct.image}
            alt={eachProduct.title}
            className="product-item-image"
          />
          <h3 className="product-title">{eachProduct.title}</h3>
          <div className="product-description-icon-container">
            <p className="product-description">
              <span className="product-sign-in">Sign in</span> or Create an
              account to see pricing
            </p>
            <CiHeart className="product-like-icon" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductCard;
