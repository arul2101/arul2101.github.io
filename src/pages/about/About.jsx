import './about.css';

// Framer Motion
import { motion as m } from 'framer-motion';
import { useLayoutEffect } from 'react';

// Icon
import { FiLinkedin } from "react-icons/fi";

export default function About() {
  useLayoutEffect(() => {
    document.title = "Sidiq Yanuar | About";
  })

  return (
    <div className="about">
      <m.h3
        className="title-about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >About Me</m.h3>
      <m.p
          className="desc-about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .75, ease: "linear" }}
      >My Introduction</m.p>

      <div className="row-about">
        <m.div
          className="image-about"
          initial={{ x: "-25%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .75, ease: "linear" }}
        >
          <div className="image"></div>
        </m.div>

        <m.div 
          className="about-description"
          initial={{ x: "25%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .75, ease: "linear" }}
        >
          <p><span>Hello!</span> My full name is <span>Muhammad Yanuarullah Assidiq</span>, you can call me <span>Arul</span> or <span>Anwar</span>. Im 22 years old, I was born on January 21, 2001 in <span>Indonesia</span>, Jakarta. </p><br />
          <p>Im obsessed with making things and even more obsessed with making things <span>better</span>. In everyday life, I work as a <span>data entry</span> in a company in Jakarta. I have been interested in <span>web development</span> since 2018 and started <span>self-taught</span> since 2019.</p><br />

          <p>If you interested about my work experience, you can visit my LinkedIn</p><br />

          <a href="https://www.linkedin.com/in/muhammad-yanuarullah-assidiq-90a698255/" target="_blank" rel="noreferrer">LinkedIn <FiLinkedin /></a>
        </m.div>
      </div>
    </div>
  )
}
