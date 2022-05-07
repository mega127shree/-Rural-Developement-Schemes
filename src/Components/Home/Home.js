import { Link } from "react-router-dom";
const Home = () => {
    return (  
        <div className="home">
            
                <input type="text" placeholder="Search...." name="search" id="search" />
                <i className="fas fa-search" />

                <div className="home_scheme_container">
                    <div className="scheme">
                        <h3> Prathan Manthri Avas Yojana Gramin</h3>
                        <p>the schemes were introduced by prime minister of india</p>
                        <Link to="/">  <button id="eligible" className="eligible"> Check Eligibility</button> </Link>
                    <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                    </div>

                    <div className="scheme">
                        <h3> Prathan Manthri Avas Yojana Gramin</h3>
                        <p>the schemes were introduced by prime minister of india</p>
                        <Link to="/">  <button id="eligible" className="eligible"> Check Eligibility</button> </Link>
                    <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                    </div>
            
                
                    <div className="scheme">
                        <h3> Prathan Manthri Avas Yojana Gramin</h3>
                        <p>the schemes were introduced by prime minister of india</p>
                        <Link to="/">  <button id="eligible" className="eligible"> Check Eligibility</button> </Link>
                    <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                    </div>

                    <div className="scheme">
                        <h3> Prathan Manthri Avas Yojana Gramin</h3>
                        <p>the schemes were introduced by prime minister of india</p>
                        <Link to="/">  <button id="eligible" className="eligible"> Check Eligibility</button> </Link>
                    <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                    </div>

                    <div className="scheme">
                        <h3> Prathan Manthri Avas Yojana Gramin</h3>
                        <p>the schemes were introduced by prime minister of india</p>
                        <Link to="/">  <button id="eligible" className="eligible"> Check Eligibility</button> </Link>
                    <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                    </div>

                    <div className="scheme">
                        <h3> Prathan Manthri Avas Yojana Gramin</h3>
                        <p>the schemes were introduced by prime minister of india</p>
                        <Link to="/">  <button id="eligible" className="eligible"> Check Eligibility</button> </Link>
                    <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                    </div>

                    <div className="scheme">
                        <h3> Prathan Manthri Avas Yojana Gramin</h3>
                        <p>the schemes were introduced by prime minister of india</p>
                        <Link to="/">  <button id="eligible" className="eligible"> Check Eligibility</button> </Link>
                        <Link to="/desc"><button id="read" className="readmore">Read more</button></Link>
                    </div>
                </div>
        </div>
    );
}
 
export default Home;