import './contact.css';

// Framer Motion
import { motion as m } from 'framer-motion';

// Icon
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useLayoutEffect } from 'react';

export default function Contact() {
  useLayoutEffect(() => {
    document.title = "Sidiq Yanuar | Contact";
  })

  return (
    <m.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75, ease: "linear" }}
    >
      <h3 className='title-contact'>Talk to me</h3>
      <div className="row-contact">
        <div className="card-contact">
          <div className="icon"><FiMail /></div>
            <h4>Email</h4>
            <p>m.yanuarullah2101@gmail.com</p>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=CllgCJftMNdltQjlpGDswSdSWzWZVhlQgQcDTnFhQkdrdjXSRtWvHBjkZfWxNRKgmdtVWHMPlxq" target='_blank'
              rel="noreferrer"
            >Write Me <HiOutlineArrowRight className='icon-contact' /></a>
          </div>

          <div className="card-contact">
            <div className="icon"><FaTelegramPlane /></div>
            <h4>Telegram</h4>
            <p>@Arul_2101</p>
            <a
              href="https://t.me/Arul_2101"
              target="_blank"
              rel="noreferrer"
            >Write Me <HiOutlineArrowRight className='icon-contact' /></a>
          </div>

          <div className="card-contact">
            <div className="icon"><FaLine /></div>
            <h4>Line</h4>
            <p>@arull_21</p>
            <a
              href="https://line.me/ti/p/~arull_21"
              target="_blank"
              rel="noreferrer"
            >Write Me <HiOutlineArrowRight className='icon-contact' /></a>
          </div>

          <div className="card-contact">
            <div className="icon"><FiFacebook /></div>
            <h4>Facebook</h4>
            <p>@Arull</p>
            <a href="https://web.facebook.com/m.yanuarullah.assidiq" target='_blank' rel="noreferrer">Write Me <HiOutlineArrowRight className='icon-contact' /></a>
          </div>
      </div>
    </m.div>
  )
}
