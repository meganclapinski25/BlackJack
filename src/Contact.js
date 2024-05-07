import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from "react-icons/ai";
function Contact(){

    return(
        <div>
            <Header />
                <div className="contact">
                       <h1>Get In Touch</h1> 
                       <ul>
                        <li> Email: meganclapinski@gmail.com</li>
                        <li>Phone Number : (760)-238-6235</li>
                       </ul>
                       <h1>
                            Check Out more
                       </h1>
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





        </div>
    )


}
export default Contact;