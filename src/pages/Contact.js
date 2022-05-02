import ReactDOM from 'react-dom/client';
import Email from '../pages/email';
import axios from 'axios';
import Contact from '../pages/email';

import React, { useEffect,useState} from 'react';




function APP() {
  const [Api, setApi] =useState([]);

    const[Email,setEmail]=useState("");
    const[subscribe, setsubscribe] =useState();
    const[contact, setcontact] =useState();

   

  useEffect(()=>{
  
    axios.get(`http://192.168.43.231:8888/api/contact/`)
    
    .then((res)=>{
      var arr = [];
      arr.push(res.data);
      setApi(arr);
      console.log(arr);
    })
    .catch((err)=>{
      console.log(err);
    })
    },[])

  
      function contact_us()
      {
        setcontact(true);
        var name = document.getElementById('name').value;
        console.warn(name);
        var address = document.getElementById('address').value;
        console.warn(address);
        var mobile = document.getElementById('mobile').value;
        console.warn(mobile);
        var email = document.getElementById('email').value;
        console.warn(email);
        var subject = document.getElementById('subject').value;
        console.warn(subject);
        var message = document.getElementById('message').value;
        console.warn(message);

        const Contacts ={
          name: name,
          address: address,
          mobile: mobile,
          email:email,
          subject: subject,
          message: message,

        };
        axios.post(`http://192.168.43.231:8888/api/contact/`, Contacts)
        .then(res => console.log(res.data));
        }
      
      
      function Subscriber()
      {
      setsubscribe(true);
      var email = document.getElementById('subscribers_email').value;
      
      console.warn(email);
       
      const subscriber = {
          email: email,
      
      };
    
      axios.post(`http://192.168.1.19:8888/api/Email/`, subscriber)
      .then(res => console.log(res.data));
      }
    return (
  <>
  
   <div class="page-contact" id="contact">
  <div class="container-fluid">
    <div class="text-center wow fadeInUp">
      <div class="badge badge-subhead"><h2>Contact</h2></div>
    </div>
    <h1 class="text-center fw-normal wow fadeInUp">Get in touch</h1>
    <div class="row py-5">
      <div class="col-lg-7 px-0 pr-lg-3 wow zoomIn">
        <div class="vg-maps">
          <div id="google-maps">
          

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!
1m3!1d14130.359276980053!2d85.28330917161206!3d27.6990697734758!
2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1860ae22d385%3A0x7c2
444e8284cef52!2sKalimati%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v165079756
4040!5m2!1sen!2snp" width="600" height="450"/>
<div class="col-12 mb-3">
      </div>
      
          </div>
        </div>
      </div>
      <hr/>
      <br/>
      <div class="col-lg-5">
        
        
          <div class="form-row">
          {contact?<>
                           
                           
            {Api.map(contact=>( 
<p>{contact.name}Thank You for Message us.</p>
            ))}
                           </>:<>

            <div class="col-12 mt-3 wow fadeInUp">
              
              <input class="form-control" type="text" id="name" name="Name" placeholder="Your Full Name"/>
            </div>
            <div class="col-6 mt-3 wow fadeInUp">
              <input class="form-control" type="text" id="address" name="Address" placeholder="Your Address"/>
            </div>
            <div class="col-6 mt-3 wow fadeInUp">
              <input class="form-control" type="text" id= "mobile" name="mobile_no" placeholder="Mobile No:"/>
            </div>
            <div class="col-6 mt-3 wow fadeInUp">
              <input class="form-control" type="text" id="email" name="Email" placeholder="Email Address"/>
            </div>
            <div class="col-6 mt-3 wow fadeInUp">
              <input class="form-control" type="text" id="subject" name="Subject" placeholder="Subject"/>
            </div>
            <div class="col-12 mt-3 wow fadeInUp">
              <textarea class="form-control" name="Message" id= "message"  rows="6" placeholder="Enter message here.."></textarea>
            </div>
            <form  onSubmit={contact_us}>



            <button type="submit" class="btn btn-theme mt-3 wow fadeInUp ml-1" value="contact us">Send Message</button>
         </form>
          </>}
          </div>

        <div className="widgets_container contact_us">
                      
                                                  
                      <h3 title="Subscribe us for take big opportunitys (We will send you email for diffrent news)" className="texts_footer text-center">Subscribe Newsletter</h3>
 
                       <div className="newleter-content">
                           {subscribe?<>
                            {Api.map(contact=>( 

                           <p>Thank You Mr,{contact.name} for Subscribe us. Now we are able to send different offers and news direct in your E-mail.</p>
                            ))}
                           </>:<>
                             <div className="subscribe_form ">
                               <form onSubmit={Subscriber}>
                               {Api.map(contact=>( 
                                 <p>{contact.name}</p>
                               ))}
                                   <div className="text-center container-fluid  p-0">
                                       <input type="email" id="subscribers_email" placeholder="Email Address" required className="mb-1  form-control rounded  bg-light "/>
                                       <input type="submit" className="btn btn-primary text-center m-0 " value="Subscribe us" />
                                   </div>
                               </form>
                           </div>
                           </>}
                            
                       </div>
                       
                   </div>
      </div>
    </div>
  </div>
</div>

</>
    );
}
export default APP;