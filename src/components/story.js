import React, {Component} from 'react'
import './css/story.css'

class Story extends Component {

	render(){
		return(
			<div className="story">
				<pre>{this.props.chapter}</pre>
			</div>
		)
	}
}

export default Story
