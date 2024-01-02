import {React, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import aboutData from "./DataAbout";
import AOS from "aos";

 

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
                    <section className="about">

                        <div className="about__bio-img" data-aos="fade-down" data-aos-duration="3000">
                                <h2 data-aos="fade-right" data-aos-duration="3000">Bio</h2>
                                <p  data-aos="fade-right" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio adipisci, delectus architecto ullam animi.</p>
                        </div>
                        {aboutData.map(data => {
                            return(
                                <div className="jobs" data-aos="fade-right" data-aos-duration="2000">
                                    <div className="jobs__job" key={data.id}>
                                        <h2>{data.year}</h2>
                                        <h3>{data.workPalce}</h3>
                                        <h6>{data.position}</h6>
                                        <p>{data.aboutMe}</p>
                                    </div>
                                </div>
                            );
                        })}
                        

                       

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
    

   
