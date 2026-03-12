import React from "react";
import './Hero.css';
function Hero(){
    return (
        <div className="Hero-Section">
            <div className="intro-Box">
                <b className="image-Content">FASHION</b>
                <img src="https://images.pexels.com/photos/12498985/pexels-photo-12498985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Plant"  className="intro-img"/>
            </div>
            <div className="intro-Content-Box">
                <h1>Organic Fashion</h1>
                <p>Plant-based clothing is made from natural fibers such as cotton, hemp, bamboo, and linen that come directly from plants. These fabrics are biodegradable, breathable, and environmentally friendly. Unlike synthetic materials, plant-based clothes reduce pollution and support sustainable fashion. Choosing plant-based clothing helps protect the planet while providing comfort, durability, and a natural feel for everyday wear.</p>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}
export default Hero;