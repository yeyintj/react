import {React, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"

 

export default function About() {

    useEffect( () => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            offset: 200,
        });
    }, []);
        
        return(
            <div>
                    <section className="contact" data-aos="fade-down" data-aos-duration="3000">
                        <h2 data-aos="fade-right" data-aos-duration="2000">Contact Me ...</h2>
                        <div className="contact__lists">
                            <div data-aos="fade-right" data-aos-duration="2000">
                                <FontAwesomeIcon icon={faEnvelope} size="2x"/> Email 
                                <p>email@email.com</p>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="2000">
                                <FontAwesomeIcon icon={faMobileScreenButton} size="2x" /> Phone 
                                <p>+1 (555) 555-555</p>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="2000">
                                <FontAwesomeIcon icon={faLocationDot} size="2x"/> Address 
                                <p>123 First St, Houston, TX</p>
                            </div>
                        </div>
                       

                        <div className="social__icons">
                            <a href="https://www.facebook.com/yair.oung">
                                <FontAwesomeIcon icon={faFacebook} size="2x"/>
                            </a>
                            <a href="https://www.instagram.com/owen___jn/">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>
                            </a>
                            <a href="https://github.com/yeyintj">
                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                            </a>
                        </div>

                        <footer>
                            &copy; Copyright 2023. Allright served.
                        </footer>
                    </section>

            </div>
        )
    }
    

   
