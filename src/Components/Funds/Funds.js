import { Link } from "react-router-dom";
import { FundsData } from "./FundsData";
import { useParams } from "react-router-dom";
const Funds = () => {
    const {id} = useParams();
    
    if(FundsData[id].length < 1){
        return(
            <center>
                No specific schemes available in this district. You can refer all districts schemes those schemes will apply to your districts also
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
                            
                            <button id="eligible" className="eligible"> Check Eligibility</button>
                            <Link to="/"><button id="read" className="readmore">Read more</button></Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
 
export default Funds;