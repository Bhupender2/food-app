import "../CSS/Navbar.css";
import Logo from "../Images/Logo.png";

function Navbar(){
    return(
        <nav className="Navbar">
            <div className="logo">
                <img className="My-Logo" src={Logo} alt="logo"></img>
            </div>
            <div className="nav_links">
            <div className="links">Home</div>
            <div className="links">Menu</div> 
            <div className="links">About Us</div>
            <div className="links">Contact Us</div>
            <div className="links">
                <span class="material-symbols-outlined cart" >shopping_cart</span> 
            </div>

            </div>
        </nav>
    );
}

export default Navbar;