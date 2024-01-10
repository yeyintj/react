import {React, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
// import 'aos/dist/aos.css';

  


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            offset: 200,
        });
      }, []);
    return(
                <div>
                    <section className="home" data-aos="fade-down">
                        <div data-aos="fade-right">
                            <h2>Hi! My Name Is</h2>
                            <h1 className="home-name">
                                Mike
                                <span className="home-name__last"> Smik</span>
                            </h1>
                            <h2>Web Developer, Designer and Programmer</h2>
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
                            &copy; Copyright 2023. Alright served.
                        </footer>
                    </section>
                </div>
    )
}