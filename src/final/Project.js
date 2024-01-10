import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"
import img1 from "../img/pf-1.jpg";
import img2 from "../img/pf-5.jpg";
import img3 from "../img/pf-7.jpg";
import img4 from "../img/pf-4.jpg";
import img5 from "../img/pf-2.jpg";
import img6 from "../img/pf-6.jpg";

 

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
                    <section className="project">
                        <div className="project__bio-img" data-aos="fade-down">
                            <h2  data-aos="fade-right">My Projects</h2>
                        </div>

                    

                        <div className="project__items">
                            <div className="project__item" data-aos="fade-right">
                                <img src={img1} alt=""/>
                                <div className="project__btns">
                                    <Link to="!#" className="project__btn">
                                        <FontAwesomeIcon icon={faEye} transform="left-4"/>
                                        Preview
                                    </Link>
                                    <Link to="" className="project__btn">
                                        <FontAwesomeIcon icon={faGithub} transform="left-4"/>
                                        Github
                                    </Link>
                                </div>
                            </div>
                            <div className="project__item" data-aos="fade-right">
                                <img src={img2} alt=""/>
                                <div className="project__btns">
                                    <Link to="!#" className="project__btn">
                                        <FontAwesomeIcon icon={faEye} transform="left-4"/>
                                        Preview
                                    </Link>
                                    <Link to="" className="project__btn">
                                        <FontAwesomeIcon icon={faGithub} transform="left-4"/>
                                        Github
                                    </Link>
                                </div>
                            </div>
                            <div className="project__item" data-aos="fade-right">
                                <img src={img3} alt=""/>
                                <div className="project__btns">
                                    <Link to="!#" className="project__btn">
                                        <FontAwesomeIcon icon={faEye} transform="left-4"/>
                                        Preview
                                    </Link>
                                    <Link to="" className="project__btn">
                                        <FontAwesomeIcon icon={faGithub} transform="left-4"/>
                                        Github
                                    </Link>
                                </div>
                            </div>
                            <div className="project__item" data-aos="fade-right">
                                <img src={img4} alt=""/>
                                <div className="project__btns">
                                    <Link to="!#" className="project__btn">
                                        <FontAwesomeIcon icon={faEye} transform="left-4"/>
                                        Preview
                                    </Link>
                                    <Link to="" className="project__btn">
                                        <FontAwesomeIcon icon={faGithub} transform="left-4"/>
                                        Github
                                    </Link>
                                </div>
                            </div>
                            <div className="project__item" data-aos="fade-right">
                                <img src={img5} alt=""/>
                                <div className="project__btns">
                                    <Link to="!#" className="project__btn">
                                        <FontAwesomeIcon icon={faEye} transform="left-4"/>
                                        Preview
                                    </Link>
                                    <Link to="" className="project__btn">
                                        <FontAwesomeIcon icon={faGithub} transform="left-4"/>
                                        Github
                                    </Link>
                                </div>
                            </div>
                            <div className="project__item" data-aos="fade-right">
                                <img src={img6} alt=""/>
                                <div className="project__btns">
                                    <Link to="!#" className="project__btn">
                                        <FontAwesomeIcon icon={faEye} transform="left-4"/>
                                        Preview
                                    </Link>
                                    <Link to="" className="project__btn">
                                        <FontAwesomeIcon icon={faGithub} transform="left-4"/>
                                        Github
                                    </Link>
                                </div>
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
                            &copy; Copyright 2023. Alright served.
                        </footer>
                    </section>

            </div>
        )
    }
    

   
