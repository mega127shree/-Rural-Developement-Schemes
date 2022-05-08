import { Link } from "react-router-dom";
import { FundsData } from "./FundsData";
import { useParams } from "react-router-dom";
const Funds = () => {
    const {id} = useParams();
    
    if(FundsData[id].length < 1){
        return(
            <center>
               <span>No specific schemes available. If new schemes will be introduced we will update here</span> 
            </center>
        )
    }

    return (  
        <div className="schemes_container">

            <div className="scheme_layout">
                {
                   FundsData[id].map((data,index)=>(
                        <div className="scheme" key={index}>
                            <h3>{data.name}</h3>
                            
                        <Link to="/"><button id="eligible" className="eligible"> Check Eligibility</button></Link> 
                            <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
 
export default Funds;