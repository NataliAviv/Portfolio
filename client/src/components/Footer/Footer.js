import React, { Component } from 'react';
import "./Footer.css";
import { FaGithub,FaLinkedin,FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";


class Footer extends Component{
    render(){
        return(
            <div>
            <div className="footer-container">
                <div className="item-container">
                    <div className="icon-container">
                      <div> <FaGithub/> </div> 
                     <div> <FaLinkedin/></div>  
                     <div>  <MdEmail/> </div> 
                     <div>  <FaPhone/> </div> 
                    </div>
                <div>Copyright @ Natali Aviv 2020</div>
                </div>
            </div>
            </div>
        )
    }
}

export default Footer;