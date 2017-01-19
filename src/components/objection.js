import React, {Component} from 'react'
import './css/objection.css'

class Objection extends Component {
	render(){
		if (this.props.objection){
			// move this somewhere else
			document.getElementById("objection").className = "visible"
			document.getElementById("story").className = "invisible"
			document.getElementById("display").className = "invisible"
			document.getElementsByTagName("h1")[0].className = "invisible"
		}
		return(
			<div id="objection" className="invisible">
				<h2>love is dead</h2>
			</div>
		)
	}
}

export default Objection
