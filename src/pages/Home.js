import React from 'react'
import Slider from "../components/Slider.js";
import Categories from "../components/Categories.js";
import Demo from "../components/Demo.js";
import Marketplace from "../components/Marketplace.js";
import Posts from "../components/Posts.js";
import ScrollToTop from "../components/ScrollToTop.js";

const Home = () => {
    return (
    <div>
      <Slider />
      <Categories />
      <Demo />
      <Marketplace /> 
      <Posts />
      <ScrollToTop />
    </div>
    )
}

export default Home
