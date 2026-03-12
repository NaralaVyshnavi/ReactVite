import React from  "react";
import './Header.css';
function Header(){
    return (
        <div className="navbar">
            <div className="iconBox">
              <i class="bi bi-leaf icon"></i>
                <p className="iconContent">yshhhhhh</p>
            </div>
            <div className="menuBox">
                <ul className="menu">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>FAQs</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="authenticationBox">
                <button>Login</button>
                <button>Sign-Up</button>
            </div>
        </div>
    )
}
export default Header;