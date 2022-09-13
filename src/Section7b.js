import React from "react"
import logo from "./images/logo.svg"
import facebook from "./images/icon-facebook.svg"
import instagram from "./images/icon-instagram.svg"
import twitter from "./images/icon-twitter.svg"

export default function Section7b() {
  return (
    <div className="section7">
      <img className="cc" src={logo} />
      <div className="footers">
        <div className="x">
          <p className="foot">FAQs</p>
          <p className="foot">Contact Us</p>
        </div>
        <div className="x">
          <p className="foot">Privacy Policy</p>
          <p className="foot">Press Kit</p>
        </div>
        <p className="foot">Install Guide</p>
      </div>
      <div className="footericons">
        <img className="fb" src={facebook} />
        <img className="fb" src={twitter} />
        <img className="fb" src={instagram} id="ig" />
      </div>
    </div>
  )
}