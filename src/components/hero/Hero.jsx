import "./hero.css";

// Framer Motion
import { motion as m } from 'framer-motion';

// Icon
import { FiGithub, FiDownload } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

import MyCv from './../../data/cv-updated-2023.pdf';

export default function Hero() {

  return (
    <div className="hero">
        <m.div
            className="logo-sosmed"
            initial={{ x: "-75%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .50, ease: "linear" }}
        >
            <a href='https://github.com/arul2101' target="_blank" className="icon" rel="noreferrer"><FiGithub /></a>
            <a href='https://web.facebook.com/m.yanuarullah.assidiq' target="_blank" className="icon" rel="noreferrer"><FiFacebook /></a>
            <a href='https://instagram.com/m.yanuarullah' target="_blank" className="icon" rel="noreferrer"><FiInstagram /></a>
            <a href='https://www.linkedin.com/in/muhammad-yanuarullah-assidiq-90a698255/' target="_blank" className="icon" rel="noreferrer"><FiLinkedin /></a>
        </m.div>

        <m.div
            className="hero-desc"
            initial={{ x: "25%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .50, ease: "linear" }}
        >
            <h3>Sidiq Yanuar👋</h3>
            <p className='hero-sub-title'>--- Web Development Enthusiast</p>
            <p className='hero-sub-desc'>Im a simple, creative, enthusiastic and fun loving person. My dream is to create something for help many people..</p>
            <div className="hero-btn-portfolio">
                <NavLink to="portfolio" className="btn-portfolio">Portfolio</NavLink>

                <a
                    href={MyCv}
                    className="resume"
                    target="_blank" 
                    rel="noreferrer"
                    download="resume-updated-2023.pdf"
                ><FiDownload /> Download Resume</a>
            </div>
        </m.div>

        <div className="profile-picture">
        </div>
    </div>
  )
}
