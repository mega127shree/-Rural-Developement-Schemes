import "./Schemes.css"
import { Link } from "react-router-dom";
import { SchemesData } from "./SchemesData";
import { useParams } from "react-router-dom";
import urlSlug from "url-slug";
const Schemes = () => {
    const {id} = useParams();
    if(SchemesData[id].length < 1){
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
                   SchemesData[id].map((data,index)=>{
                        const slug = urlSlug(data.name)
                       return(
                        <div className="scheme" key={index}>
                        <h3>{data.name}</h3>     
                        <p>{data.introBy}</p>        
                        <Link to={`/check-eligibility/${slug}`}><button id="eligible" className="eligible"> Check Eligibility</button></Link>
                        <Link to={`/scheme-description/${slug}`}><button id="read" className="readmore">Read more</button></Link>
                        </div>
                       )
                   })
                }
            </div>
      <hr/>
        </div>
         
    );
}
 
export default Schemes;