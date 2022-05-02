import React, { Component, useState } from 'react';
import axios from 'axios';


function Contact() {
    const[subscribe, setsubscribe] =useState();


    
    function Subscriber()
    {
    setsubscribe(true);
    var email = document.getElementById('subscribers_email').value;
    
    console.warn(email);
    
    const subscriber = {
        email: email,
        
    };


    axios.post(`http://192.168.1.19:8888/email/Email/`, subscriber)
    .then(res => console.log(res.data));
    }

    return (
  <>
<div className="widgets_container contact_us">
                      
                                                  
                      <h3 title="Subscribe us for take big opportunitys (We will send you email for diffrent news)" className="texts_footer text-center">Subscribe Newsletter</h3>
 
                       <div className="newleter-content">
                           {subscribe?<>
                           <p>Thank You for Subscribe us. Now we are able to send different offers and news direct in your E-mail.</p>
                           </>:<>
                             <div className="subscribe_form ">
                               <form  onSubmit={Subscriber}>
                                   <div className="text-center container-fluid  p-0">
                                       <input type="email" id="subscribers_email" placeholder="Email Address" required className="mb-1  form-control rounded  bg-light "/>
                                       <input type="submit" className="btn btn-primary text-center m-0 " value="Subscribe us" />
                                   </div>
                               </form>
                           </div>
                           </>}
                            
                       </div>
                       
                   </div>
</>
    );
}
export default Contact;
