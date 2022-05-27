import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/districts/alldistricts">Districts</Link></li>
            <li><Link to="/funds/graduation">Funds</Link></li>
            <li><Link to="/contact">Contact Us</Link></li> 
        </div>
      );
}
 
export default Footer;