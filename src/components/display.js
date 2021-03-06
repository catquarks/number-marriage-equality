import React from 'react'
import './css/display.css'

export default function(props) {

	function drawDisplay(){
		if (props.bride && !props.groom){
			return props.bride
		} else if (props.bride && props.groom && !props.married){
			return props.bride + " + " + props.groom
		}

		if (props.married){
			return props.consumation
		}
	}

	function colorHeart(){
		if (!props.married){
			return "#dd3232"
		} else {
			return "#cc2121"
		}
	}

	return(
		<div id="display">
			<svg viewBox="0 0 32 29.6" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" >
				<path id='heart' fill={colorHeart()} d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
				<text x="50%" y="50%">{drawDisplay()}</text>
			</svg>
		</div>
	)


}


