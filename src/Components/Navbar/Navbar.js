import { Link } from "react-router-dom";
import { districts } from "./Districts";
const Navbar = () => {

    return ( 
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars" />
            </label>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Districts<i className="fas fa-caret-down" /></Link>
                <ul className="dropdown">
                    {
                            districts.map((district,index)=>(
                                <li key={index}><Link to={district.to}>{district.name}</Link></li>
                            )) 
                    }
                </ul>
            </li>
            <li><Link to="/">Funds</Link></li>
            <li><Link to="/">Awards</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;