import "./Schemes.css"
import { Link } from "react-router-dom";
import { FundsData } from "./FundsData";
import { useParams } from "react-router-dom";
import urlSlug from "url-slug";
const Funds = () => {
    const {id} = useParams();
    if(FundsData[id].length < 1){
        return(
            <center>
             <p className="noscheme">No specific schemes available in this district. You can refer all districts schemes those schemes will apply to your districts also</p>
            </center>
        )
    }

    return (  
        <div className="schemes_container">

            <div className="scheme_layout">
                {
                   FundsData[id].map((data,index)=>{
                        const slug = urlSlug(data.name)
                       return(
                        <div className="scheme" key={index}>
                        <a href={data.reference}>{data.name}</a>     
                        <p>{data.introBy}</p>        
                        <Link to={`/check-eligibility/${slug}`}><button id="eligible" className="eligible"> Check Eligibility</button></Link>
                        <Link to={`/funds-description/${slug}`}><button id="read" className="readmore">Read more</button></Link>
                        </div>
                       )
                   })
                }
            </div>
      <hr/>
        </div>
         
    );
}
 
export default Funds;