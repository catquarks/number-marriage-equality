import React, {Component} from 'react'
import './css/user_input.css'

class UserInput extends Component {
	constructor(props){
		super(props)
		this.state = {
			input: ''
		}
	}

	handleSubmit(e){
		e.preventDefault()
		e.stopPropagation()

		let input = this.state.input
    if (!isNaN(input)){
      input = parseFloat(input)
    }

    this.setState({input: ''})
    this.props.handleBrideAndGroom(input)
    this.props.advanceStory(input)
	}

	render(){
		return(
			<div id="user-input" className="input-form-wrapper">
				<div className="input-form">
					<form onSubmit={e => {
						this.handleSubmit(e)
					}}>
						<input type="text"
					  	placeholder={this.props.placeholder}
					  	value={this.state.input}
					  	onChange={
					  		e => {
					  			this.setState({
					  				input: e.target.value
					  			})
					  		}
					  	}
					  	autoFocus />
					</form>
				</div>
			</div>
		)
	}
}

export default UserInput
