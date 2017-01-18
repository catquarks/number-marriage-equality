import React, {Component} from 'react'
import './css/restart.css'

class Restart extends Component {
	render(){
		if (this.props.endReached === true){
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
