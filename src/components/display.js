import React, {Component} from 'react'
import './css/display.css'

class Display extends Component {
	handleChangeOfHeart(){
		document.getElementById("heart").style.fill = "#cc2121"
	}

	render(){

		if (this.props.heartColor === 1){
			this.handleChangeOfHeart()
		}

		return(
			<div id="display">
				<svg viewBox="0 0 32 29.6">
					<path id='heart' d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
					<text x="50%" y="50%">{this.props.characters}</text>
				</svg>
			</div>
		)
	}
}

export default Display
