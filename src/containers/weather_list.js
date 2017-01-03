import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
	renderWeather(cityData){
		const name = cityData.city.name;

		return(
			<tr key={name}>
				<td>
					{name}
				</td>
			</tr>
		)
	}
	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr> 
						<th>
							City
						</th>
						<th>
							Temperature
						</th>
						<th>
							Pressure
						</th>
						<th>
							Humidity
						</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		)
	};
}

/*es6 version of the function below
function mapStateToProps({weather}){
	// that line is the same as 
	//const weather = state.weather;
	//since key and value are the same, can be simplified to return {weather};
	return {weather: weather};
}*/


function mapStateToProps(state){
	//state.weather comes from reducers/index.js
	return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList)