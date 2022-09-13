import React from "react"
import devices from "./images/image-devices.png"

export default function Section4() {
  return (
    <div className="section2">
      <h1 className="sec2head">Access Clipboard Anywhere</h1>
      <p className="sec2para">Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>

      <img className="sec4img" src={devices} />
    </div>
  )
}