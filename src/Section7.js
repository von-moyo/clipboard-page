import React from "react"
import google from "./images/logo-google.png"
import ibm from "./images/logo-ibm.png"
import microsoft from "./images/logo-microsoft.png"
import hp from "./images/logo-hp.png"
import graphics from "./images/logo-vector-graphics.png"

export default function Section7() {
  return (
    <div className="section5">
      <img className="logo" src={google} />
      <img className="logo" src={ibm} />
      <img className="logo" src={microsoft} id="m" />
      <img className="logo" src={hp} id="hp" />
      <img className="logo" src={graphics} id="v" />
    </div>
  )
}