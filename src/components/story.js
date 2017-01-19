import React, {Component} from 'react'
import './css/story.css'

class Story extends Component {

	render(){
    // bug: this causes the interpolated values
    // to not actually change back
    // after app has been restarted
    if (this.props.currentChapter.interpolate){
      this.props.currentChapter.chapter = this.props.interpolateString(this.props.currentChapter.chapter)
    }
		return(
			<div id="story" className="inlineblock">
				<pre>{this.props.currentChapter.chapter}</pre>
			</div>
		)
	}
}

export default Story
