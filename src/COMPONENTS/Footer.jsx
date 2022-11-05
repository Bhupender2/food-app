import "../CSS/Footer.css";
import logo1 from "../Images/logo1.png";
function Footer(){
    return(
        <div className="About_company">
            <div className="outer_footer">
                <div className="address box">
                    <div className="logo1 section1"> 
                    <img  className="Logoo" src={logo1} alt="logo1_image"></img>
                    </div>
                    <div className="Adress1 section1">20, floor, Queenslad Victoria Building. 60 california street california USA</div>
                    <div className="phone-no section1"> <span className= "boldit">Phone:</span> +123 456 7890</div>
                    <div className="E-mail section1"><span className="boldit">Email:</span> support@validtheme.com</div>
                </div>
                <div className="Food_menu box">
                   <h2 className="mb">FOOD MENU</h2>
                  <ul>
                    <li>Salad</li>
                    <li>juices</li>
                    <li>burgers</li>
                    <li>cakes</li>
                    <li>icecreams</li>
                    <li>Indian</li>
                  </ul>
                </div>
                <div className="Opening_hours box">
                    <h2 className="MB">OPENING HOURS</h2>
                    <div className="otiming">
                    <span>Mon - Tues :</span><span>6.00 am - 10.00 pm</span>
                    </div>
                    <hr/>
                    <div className="otiming">
                    <span>Wed - Thurs :</span><span>8.00 am - 6.00 pm</span>
                    </div>
                    <hr/>
                    <div className="otiming">
                    <span>Launch :</span><span>Everyday</span>
                    </div>
                    <hr/>
                    <div className="otiming">
                    <span>Sun : </span>     
                    <button className="closebtn"> closed</button>
                    </div>

                </div>
            </div>
        </div>
    );

}
export default Footer;