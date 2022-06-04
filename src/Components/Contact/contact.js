import './contact.css';
const contact = () => {
    return ( 
        <div className="contact_page">
             <div className="div_container">
                 <h2>Your Feedback is much Important for us</h2>
                <p>Fill this below form to share your experience about how this site is useful for you</p>
             </div>
             <div class="form_container">
                 <form >
                     <br></br>
                     <label style={{margin:"350px"}}>Name</label><br/>
                     <input  type="text" className="input-text" placeholder="Enter Your Name..." /><br></br>
                     <label style={{margin:"350px"}}>Email</label><br></br>
                     <input type="text" className="input-text"placeholder="Enter Email..."></input><br></br>
                     <label style={{margin:"350px"}}>Rating(out of 5)</label><br></br>
                     <input type="text" className="input-text"placeholder="Enter Rating in numbers..."></input><br></br>
                     <label style={{margin:"350px"}}>Experience</label><br></br>
                     <textarea style={{margin:"10px 346px"}} placeholder="Enter Your Comments..."></textarea>  <br></br>
                     <input type="submit" Value="Submit"/>        
                     </form>
             </div> 
    </div> 

     );
}
 
export default contact;