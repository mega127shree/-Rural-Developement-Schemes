/* eslint-disable */
import { useParams } from "react-router-dom";
const Googleforms = () => {
   
     const {id} = useParams();

    if(id ==="destitute-widow-pension-scheme"){ 
         return(
             <center>  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecSK1RBQLFnH1W4nhnwSlB_hO4fT0tEO2oUmebGG053ByQPg/viewform?embedded=true" width="640" height="944" frameBorder="0" marginHeight="0" marginWidth="0"></iframe></center>
         )
    }
    else if(id === "destitute-deserted-wives-pension"){    
         return(
          <center>  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSds1epMD-bK7DJQT-j9VpdbT6psqiOOq74aSyDwHzW5MGqsSA/viewform?embedded=true" width="640" height="966" frameBorder="0" marginHeight="0" marginWidth="0"></iframe></center>
         )
    }
    else if(id === "chief-minister-green-house-scheme"){
         return(
          <center>   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyRHMW8iuwPVaetMt5XSUqmxizXBy_g226pukdagZYxXqOFw/viewform?embedded=true" width="640" height="1358" frameBorder="0" marginHeight="0" marginWidth="0"> </iframe></center>
     )
     }
     else if(id ==="social-security-scheme"){
          return(
               <center>   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeUt-zPC4nc--4X6MBZswNEbvM6kPfoNjm-STthYtT6l1et4Q/viewform?embedded=true" width="640" height="1037" frameBorder="0" marginHeight="0" marginWidth="0"> </iframe></center>
          )
     }
     else if(id ==="new-entrepreneur-cum-enterprises-scheme"){
          return(
               <center>   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdhPgeufmvrjaXAzn_fuSLldxot0sk2Wo_HLFSkSOurrAo96A/viewform?embedded=true" width="640" height="1459" frameBorder="0" marginHeight="0" marginWidth="0"> </iframe></center>
          )
     }
     else if(id ==="periyar-evr-nagammai-free-education-scheme"){
          return(
               <center>   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfjTFb9q0GtuvsWV_jqk1MeRpIrB3whiXxKN-l4pkveqXIWiA/viewform?embedded=true" width="640" height="1024" frameBorder="0" marginHeight="0" marginWidth="0"> </iframe></center>
          )
     }
     else if(id ==="periyar-evr-nagammai-free-education-scheme-for-school-students"){
          return(
              <center> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdx0TVQHaTMUGuhJq0nZ3BzUyRhVpZZwN2LAtkJp0rNKI4KPw/viewform?embedded=true" width="640" height="1360" frameBorder="0" marginHeight="0" marginWidth="0"> </iframe></center>
          )
     }
     else if(id ==="land-purchase-scheme"){
          return(
               <center>  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKu3fxaO5wgsqT648lwmA4eIssW2A9TFMElbZlInp-Fjcg4Q/viewform?embedded=true" width="640" height="1768" frameBorder="0" marginHeight="0" marginWidth="0"> </iframe></center>
          )
     }
     else if(id ==="mahatma-gandhi-rural-employement-scheme"){
          return(
               <center>  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdbP2yif-cqfro4CbBq0ZklcuX-fWGJZ-sD8huUgVoOON53pQ/viewform?embedded=true" width="640" height="820" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no"></iframe></center>
          )
     }
   else{
     return(
          <p>Form not available</p>
     )
   }
}
 
export default Googleforms;