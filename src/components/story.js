import React from 'react'
import './css/story.css'

export default function(props){

  function interpolateString(string){
    var regEx = /(\[\w+\])/
    var array = string.split(regEx)
    var brideGroom = {bride: props.bride, groom: props.groom, consumation: props.consumation}

    var interpolatedText = array.map(word => {
      if (!regEx.exec(word)){
        return word
      } else {
        return brideGroom[word.slice(1, -1)]
      }
    }).join("")

    return interpolatedText
  }

  if (props.currentChapter.interpolate){
		return(
			<div id="story" className="inlineblock">
				<p>{interpolateString(props.currentChapter.chapter)}</p>
        {props.children}
      </div>
    )

  } else {
    return(
      <div id="story" className="inlineblock">
        <p>{props.currentChapter.chapter}</p>
        {props.children}
			</div>
		)
  }
}

