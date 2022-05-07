import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Districts</Link></li>
            <li><Link to="/">Funds</Link></li>
            <li><Link to="/">Awards</Link></li>
            <li><Link to="/">Contact Us</Link></li> 
        </div>
      );
}
 
export default Footer;