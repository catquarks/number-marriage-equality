import React from 'react'
import './css/objection.css'

export default function(props){

  function stopWedding(){
    document.getElementById("story").className = "invisible"
    document.getElementById("display").className = "invisible"
    document.getElementsByTagName("h1")[0].className = "invisible"
  }

	if (props.objection){
		stopWedding()
	}

	return(
		<div id="objection">
			<h2>love is dead</h2>
		</div>
	)

}
