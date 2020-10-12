import React, { useState } from "react";
import {FaArrowCircleUp} from 'react-icons/fa';

export default function ScrollToTop() {
  
const [showScroll, setShowScroll] = useState(false)
const checkScrollTop = () => {    
   if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)    
   } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)    
   }  
};
window.addEventListener('scroll', checkScrollTop)

const scrollTop = () =>{
   window.scrollTo({top: 0, behavior: 'smooth'});
};

  return (
      <div className="Scroll-Top-Div">
      <FaArrowCircleUp 
   className="Scroll-Top" 
   onClick={scrollTop} 
  style={{display: showScroll ? 'flex' : 'none'}}
/>
</div>
  );
}