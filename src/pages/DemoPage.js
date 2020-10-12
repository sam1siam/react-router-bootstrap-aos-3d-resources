import React from 'react'
import Demo from "../components/Demo.js";
import Marketplace from "../components/Marketplace.js";
import Posts from "../components/Posts.js";
import ScrollToTop from "../components/ScrollToTop.js";

const DemoPage = () => {
    return (
    <div style={{ marginTop: "90px" }}>
      <Demo />
      <Marketplace />
      <Posts />
      <ScrollToTop />
    </div>
    )
}

export default DemoPage
