import React from 'react'
import './css/restart.css'

export default function(props) {

		return(
			<div id="restartButton">
				<a href="#" onClick={
					e => {
						props.restartApp()
					}
				}>Restart</a>
			</div>
		)

}

