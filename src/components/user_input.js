import React, {Component} from 'react'
import './css/user_input.css'

class UserInput extends Component {
	constructor(props){
		super(props)
		this.state = {
			input: ''
		}
	}

	render(){
		return(
			<div className="input-form-wrapper">
				<div className="input-form">
					<form onSubmit={(event) => {
						this.props.advanceStep(event, this.state.input)
						this.setState({
							input: ''
						})
					}}>
						<input type="text"
					  	placeholder={this.props.placeholder}
					  	value={this.state.input}
					  	onChange={
					  		(e) => {
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
