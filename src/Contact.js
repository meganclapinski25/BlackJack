import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from "react-icons/ai";
import './Contact.css'
function Contact(){

    return(
        <div>
            <Header />
                <div className="contact">
                       <h1>Get In Touch</h1> 
                        
                            <li> Email: <p>meganclapinski@gmail.com</p> </li>
                            <li>Phone Number :<p>(760)-238-6235</p> </li>
                        
                        
                        </div>
                        <h1>Check Out More</h1>
                       <div className="hot-links">
                       
                            <div className="github">
                                    <AiOutlineGithub />
                            </div>
                            <div className="linkedin">
                                    <AiFillLinkedin />
                            </div>
                       </div>
                       
                       <Footer/>
                





        </div>
    )


}
export default Contact;