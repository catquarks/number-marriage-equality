import React, {Component} from 'react'
import './css/objection.css'

class Objection extends Component {
	constructor(props){
		super()
	}

	render(){
		if (this.props.objection){
			this.props.stopWedding()
		}
		return(
			<div id="objection" className="invisible">
				<h2>love is dead</h2>
			</div>
		)
	}
}

export default Objection
