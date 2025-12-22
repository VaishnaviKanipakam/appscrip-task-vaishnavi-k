import Header from "./componets/Header";
import Filters from "./componets/Filters";
import ProductCard from "./componets/ProductCard";
import Footer from "./componets/Footer";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [toggleSideFilters, setToggleSideFilters] = useState(true);

  // const onClickHideFilterButton = () => {
  //   console.log(toggleSideFilters)
  // }

  // useEffect (() => {
  //   onClickHideFilterButton()
  // }, [])

  return (
    <div className="app-contianer">
      <Header />
      <div className="discover-products-container">
        <h1 className="discover-products-heading">DISCOVER OUR PRODUCTS</h1>
        <p className="discover-products-description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className="recomended-hide-filter-container">
        <p className="items-count">3425 Items</p>
        <div className="app-arrow-filter-container">
          <MdKeyboardArrowLeft className="app-left-arrow" />
          <button
            onClick={() => setToggleSideFilters(prev => !prev)}
            className="app-hide-filter"
          >
            HIDE FILTER
          </button>
        </div>

        <select className="app-recomended">
          <option value="recomended">RECOMMENDED</option>
          <option value="newestfirst">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="popular">PRICE: HIGH TO LOW</option>
          <option value="popular">PRICE: LOW TO HIGH</option>
        </select>
      </div>

      <div className="filters-product-card-components-container">
        {toggleSideFilters && (<Filters />)}
        <div style={{
          width: toggleSideFilters ? "932px" : "100%"
        }}>
          <ProductCard toggleSideFilters={toggleSideFilters}/>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default App;
