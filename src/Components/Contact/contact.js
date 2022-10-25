// eslint-disable-next-line
import {useState} from 'react';
import './contact.css';
import emailjs from "emailjs-com";

const Contact = () => {
    const [firstname, setFirstName] = useState('');
    const [useremail, setUserEmail] = useState('');
    const[message,setMessage]=useState('');
  
    const handleReset = (event) => {
      event.preventDefault();  
      setFirstName('');
      setUserEmail('');
      setMessage('');
    }



function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_e2px7qg','template_ktv2l2m',e.target,'qohC99RSDqWOTiQkc');
    alert("Your Response has been recorded..Soon Your issue/doubts will be resolved and clarified");
}



    return ( 
        
        <div className="contact_page">
            <div className="contact-us-title">
                  <h2>CONTACT US</h2>
              </div>


             <div class="form_container">
                 <form onSubmit={sendEmail} onReset={handleReset} autoComplete="off">
                     <br></br>
                     <label style={{margin:"350px"}}>Name</label><br/>
                     <input  type="text"   value={firstname} onChange={event => setFirstName(event.target.value)}className="input-text" placeholder="Enter Your Name..." required/><br></br>
                     <label style={{margin:"350px"}}>Email</label><br></br>
                     <input type="text"   value={useremail} onChange={event => setUserEmail(event.target.value)}className="input-text"placeholder="Enter Email..." required></input><br></br>
                     
                     <label style={{margin:"350px"}}>Message(queries)</label><br></br>
                     <textarea style={{margin:"10px 346px"}}   value={message} onChange={event => setMessage(event.target.value)}placeholder="Enter Your message..." required></textarea>  <br></br>
                     <input type="submit" className="submit" Value="Send"/>  
                     <input type="reset" className="reset" Value="Reset"/>
        
                     </form>
             </div> 
    </div> 

     );
}
 
export default Contact;