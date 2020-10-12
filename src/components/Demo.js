import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const Demo = () => {
    useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])
    return (
        <div data-aos="fade" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="Demo-Main">
        <div className="Demo-Text">
          <h1>
            Free Demo <span>Available!</span>
          </h1>
          <p>
            Try our free demo with tons of great features and multiple categories which are ready to use.
          </p>
          <button>Try Demo</button>
         
        </div>
        </div>
        
    )
}

export default Demo
