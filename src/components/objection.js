import React, {Component} from 'react'
import './css/objection.css'

class Objection extends Component {
	render(){
		if (this.props.disaster === true){
			// why does placeholder text take longer??
			document.getElementsByTagName("input")[0].placeholder = "love is dead"
			document.getElementsByTagName("input")[0].value = ""
			document.getElementsByClassName("objection")[0].className = "confirmed"
			document.getElementsByClassName("story")[0].className = "disaster"
			document.getElementsByClassName("display")[0].className = "disaster"
			document.getElementsByTagName("h1")[0].innerHTML = "i hate you"
		}
		return(
			<div className="objection">
				YOU'RE A MONSTER
			</div>
		)
	}
}

export default Objection
