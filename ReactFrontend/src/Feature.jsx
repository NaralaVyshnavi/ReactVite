import React from "react"; 
import './Feature.css';
function Feature(){
    return (
        <div className="Feature-Section">
            <h1>Why Choose Plant-Based Fashion</h1>
            <div className="features-container">
            <div className="feature">
                <h2>Sustainable Plant Fibers</h2>
                <p> Made from natural materials like organic cotton, bamboo,
                        hemp, and linen that are renewable and eco-friendly.</p>
            </div>
            <div className="feature">
                <h2>Eco-Friendly Production</h2>
                <p>Produced using sustainable processes that reduce
                        pollution, water usage, and environmental impact.</p>
            </div>
            <div className="feature">
                <h2>Breathable, Comfortable & Skin-Friendly</h2>
                <p>Lightweight and skin-friendly fabrics that provide
                        comfort, durability, and natural airflow.</p>
            </div>
            </div>
        </div>
    
    )
}
export default Feature;
