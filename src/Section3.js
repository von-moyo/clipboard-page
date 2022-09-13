import React from "react"
import computer from "./images/image-computer.png"

export default function Section3() {
  return (
    <div className="section3">
      <img className="computer" src={computer} />
      <div className="stuff">
        <div className="is-sec">
          <h1 className="head">Quick Search</h1>
          <p className="para">Easily search your snippets by
            content, category, web address, application, and more.</p>
        </div>
        <div className="is-sec">
          <h1 className="head">iCloud Sync</h1>
          <p className="para">Instantly saves and syncs snippets
            across all your devices.
          </p>
        </div>
        <div className="ch-sec">
          <h1 className="head">Complete History</h1>
          <p className="para">Retrieve any snippets from the first moment you started using the app.</p>
        </div>
      </div>
    </div>
  )
}