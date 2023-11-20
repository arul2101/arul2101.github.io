import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
      setToggle(!toggle);
  }
  
  return (
    <nav>
      <div className="nav-title">
          <a href="/"><img src="./img/logo.png" alt="Logo" /></a>
          <a href="/" className='title'>Sidiq<span>Yanuar</span></a>
      </div>

      <div className="nav-menu" id={toggle ? "active" : ""}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="certificate">Certificate</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="blog">My Blog</NavLink>
          <NavLink to="contact">Contact</NavLink>
      </div>

      <div className="burgers" onClick={handleToggle}>
          {toggle ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  )
}
