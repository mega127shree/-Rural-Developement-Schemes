import { FundsDescriptionData } from "./FundsDescriptionData";
import { useParams } from "react-router-dom";
import "./SchemeDescription.css";
const FundsDescription = () => {
    const {id} = useParams();

    function capitalizeWords(arr) {
      return arr.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
      });
    }

    const descriptionObj = FundsDescriptionData[capitalizeWords(id.split("-")).join("")];
    console.log(descriptionObj.salient)
    return ( 
        <div className="scheme_description">
          <h2>{descriptionObj.title}</h2>  
          <h2>Introduction</h2>
          <p>{descriptionObj.intro}</p>
          <h2 className="Eligible">Eligibility of the Beneficiaries</h2>

          {descriptionObj.eligibilities.map((line,index)=>{
            return(
              
              <li key={index}>{line}</li>
            )
          })}
          {descriptionObj.salient.length > 0 && <h2>Salient features of the Scheme</h2>}
          {descriptionObj.salient.length > 0 && descriptionObj.salient.map((line,index)=>{
            return(
              <li key={index}>{line}</li>
            )
          })}
          {descriptionObj.mode.length > 0 && <h2>Mode of Selection of Beneficiaries </h2>}
          {descriptionObj.mode.length > 0 && descriptionObj.mode.map((line,index)=>{
            return(
              <li key={index}>{line}</li>
            )
          }
          )
          }
</div> 
);
}
 
export default FundsDescription;