import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar">
            <div  className="logo">
                <i class="bi bi-vimeo"></i>
                <h1>Vyntra</h1>
            </div>
        <div>
            <ul>
               <li><Link to='/login' className="btn btn-primary">Login</Link></li>
               <li><Link to='/signup' className="btn btn-secondary">SignUp</Link></li>
            </ul>
        </div>
        </nav>
    )
}
export default Navbar;