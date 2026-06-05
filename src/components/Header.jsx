import "./Header.css";
import {Link} from "react-router-dom";
function Header(){
    return(<div className="header">
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
    </ul>
    </div>)
}

export default Header;