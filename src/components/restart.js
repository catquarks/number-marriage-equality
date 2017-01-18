import React, {Component} from 'react'
import './css/restart.css'

class Restart extends Component {
	render(){
		// this should disappear again when pushed and 'else' doesn't work
		if (this.props.endReached){
			document.getElementById("restartButton").className = "visible"
		}

		return(
			<div id="restartButton" className="invisible">
				<a href="#" onClick={
					e => {
						this.props.restartApp()
					}
				}>Restart</a>
			</div>
		)
	}
}

export default Restart
