import "../CSS/Banner.css";
import Poster from "../Images/Poster.png";
function Bannner(){
    return(
       <div className="Poster1">
        <img className="picture" img src={Poster} alt="french_fries"></img>
       </div>
    );
}
export default Bannner;