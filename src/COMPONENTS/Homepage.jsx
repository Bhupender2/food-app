import "../CSS/Homepage.css";
import burger  from "../Images/burger.png";
function Homepage(){
    return(
      <div className="poster">
        <img className="burger1" src={burger} alt="burger_picture"></img>
      </div>
    );

}
export default Homepage;