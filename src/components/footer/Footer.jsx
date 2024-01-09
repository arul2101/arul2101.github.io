import './footer.css';

// Icon
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <div className="icon-footer">
        <a href='https://github.com/arul2101' target="_blank" rel="noreferrer"><FiGithub /></a>
        <a href='https://web.facebook.com/m.yanuarullah.assidiq' target="_blank" rel="noreferrer"><FiFacebook /></a>
        <a href='https://instagram.com/m.yanuarullah' target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href='https://www.linkedin.com/in/muhammad-yanuarullah-assidiq-90a698255/' target="_blank" rel="noreferrer"><FiLinkedin /></a>
      </div>

      <p className="copyright">Created with <span>❤</span> in my lovely room - &copy; Anwar Production 2024</p>
    </footer>
  )
}
