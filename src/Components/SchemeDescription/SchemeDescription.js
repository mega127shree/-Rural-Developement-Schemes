import { SchemeDescriptionData } from "./SchemesDescriptionData";
import { useParams } from "react-router-dom";
import "./SchemeDescription.css";
const SchemeDescription = () => {
    const {id} = useParams();

    function capitalizeWords(arr) {
      return arr.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
      });
    }

    const descriptionObj = SchemeDescriptionData[capitalizeWords(id.split("-")).join("")];
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
          })}

{/* <h2>Rural Buildings Maintenance and Renovation Scheme (RBMRS)</h2>
<p>In order to supplement the efforts of the rural Local Bodies in maintenance of all its assets, a new Scheme namely ‘Rural Buildings Maintenance and Renovation Scheme’s being introduced with effect from 2010-11 at an outlay of Rs.100 crores.

It was introduced with an objective of routine maintenance of rural Local Bodies assets, such as Anganwadi Centers, Panchayat office buildings, Overhead tanks, Integrated Sanitary Complexes for Women, etc., for renovation under the Scheme.</p>
<p>Minor Works
White washing / colour washing of the buildings (except those buildings, where white washing/colour washing was done within the last 3 years).
Undertaking repairs of RCC roof
Minor repairs of damaged tiles/rafters/reapers in buildings with tiled roofing.
Repairs of cracks in building walls.
Repair/replacement of damaged flooring.
Repair/replacement of doors and windows.
Repair of cremation sheds/resting sheds in Cremation/Burial Grounds.
Maintenance and renovation of damaged OHTs / GLRs
Major Works:
Complete replacement of badly damaged existing tiled roofing in buildings.
Complete replacement of Asbestos sheet roofing with new tiled roofing.</p> */}

</div> 


     
     );
}
 
export default SchemeDescription;