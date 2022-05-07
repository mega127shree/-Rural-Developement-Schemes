import "./Schemes.css"
import { Link } from "react-router-dom";
import { SchemesData } from "./SchemesData";
import { useParams } from "react-router-dom";
const Schemes = () => {
    const {id} = useParams();
    
    if(SchemesData[id].length < 1){
        return(
            <center>
                No specific schemes available in this district
            </center>
        )
    }

    return (  
        <div className="schemes_container">

            <div className="scheme_layout">
                {
                   SchemesData[id].map((data,index)=>(
                        <div className="scheme" key={index}>
                            <h3>{data.name}</h3>
                            <p>{data.introBy}</p>
                            <button id="eligible" className="eligible"> Check Eligibility</button>
                            <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
 
export default Schemes;