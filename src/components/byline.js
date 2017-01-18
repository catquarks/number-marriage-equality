import React from 'react'
import './css/byline.css'

function Byline(){
	return(
		<div id="byline" className="hidden">
			<span className="secrets">
				<p>
					<small>
						made by <a href="http://tamarajaton.xyz" target="_blank">tj</a> 2017
					</small>
				</p>
			</span>
		</div>
	)
}

export default Byline
