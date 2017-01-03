import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = { term: '' };
		//when we call this.setState, the value of 'this' is changed
		//bind so that this refers to the the SearchApp context
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event){
		//do not submit the form
		event.preventDefault();
		//go fetch weather data
		this.props.fetchWeather(this.state.term);
		//clear input field after search
		this.setState({term: ''});
	}


	render(){
		return(
			<form onSubmit = {this.onFormSubmit} 
				className = "input-group">
				<input 
				placeholder = "Get a five day forecast in your favorite cities"
				className = "form-control"
				value = {this.state.term}
				onChange = {this.onInputChange}
				/>
				<span className = "input-group-btn">
					<button type="submit" className = "btn btn-secondary"> 
						Submit
					</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

//this container does not care about state, so we pass null rather than state
export default connect(null, mapDispatchToProps)(SearchBar);