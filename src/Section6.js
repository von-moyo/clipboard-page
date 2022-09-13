import React from "react"
import blacklist from "./images/icon-blacklist.svg"
import texticon from "./images/icon-text.svg"
import previewicon from "./images/icon-preview.svg"

export default function Section6() {
  return (
    <div className="section4">
      <div className="section4a" id="bl4">
        <img className="blacklist-img" src={blacklist} />
        <h1 className="sec4head" id="cb">Create blacklists</h1>
        <p className="sec4para">Ensure sensitive information never makes its
          way to your clipboard by excluding certain sources.
        </p>
      </div>
      <div className="section4a">
        <img className="blacklist-img" src={texticon} />
        <h1 className="sec4head">Plain text snippets</h1>
        <p className="sec4para">Remove unwanted formatting from copied text for a consistent look.
        </p>
      </div>
      <div className="section4a" id="s4">
        <img className="blacklist-img" id="eye" src={previewicon} />
        <h1 className="sec4head">Sneak preview</h1>
        <p className="sec4para">Quick preview of all snippets on your Clipboard for easy access.
        </p>
      </div>
    </div>
  )
}