import React, {Component} from 'react'
import './css/story.css'

class Story extends Component {

	render(){
		return(
			<div id="story" className="inlineblock">
				<pre>{this.props.chapter}</pre>
			</div>
		)
	}
}

export default Story
