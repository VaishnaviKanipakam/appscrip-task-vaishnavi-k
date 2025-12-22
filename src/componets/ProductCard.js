import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";

import "../App.css";

const ProductCard = () => {
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
    console.log("19", response);
    if (response.ok === true) {
      const data = await response.json();
      console.log("22", data);
      const updatedData = data.map((eachProduct) => ({
        id: eachProduct.id,
        title: eachProduct.title,
        image: eachProduct.image,
      }));
      setProductsList(updatedData);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (  
    <ul className="product-card-container">
      {productsList.map((eachProduct) => (
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
