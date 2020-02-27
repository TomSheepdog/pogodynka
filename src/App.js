import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import WeatherStore from './components/WeatherStore';
import './App.css';

const api_key = 'd68ee1e02b32c26d7d12a32fbed802e2';

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		pressure: undefined,
		wind_speed: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined,
		inputCity: '',
		inputCountry: ''
	};

	getWeather = async (e) => {
		e.preventDefault();
		const number = 0.0001;
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric&lang=pl`;

		fetch(api)
			.then((response) => {
				if (response.ok) {
					if (city && country) {
						return response.json();
					}
				}
				throw Error(response.statusText);
			})
			.then((data) =>
				this.setState({
					temperature: data.main.temp + number,
					city: data.name,
					country: data.sys.country,
					humidity: data.main.humidity + number,
					description: data.weather[0].description,
					pressure: data.main.pressure + number,
					wind_speed: data.wind.speed + number,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					error: ''
				})
			)
			.catch((error) =>
				this.setState({
					temperature: undefined,
					city: undefined,
					country: undefined,
					humidity: undefined,
					description: undefined,
					pressure: undefined,
					wind_speed: undefined,
					sunrise: undefined,
					sunset: undefined,
					error: `Proszę wpisać poprawne dane-${error}`
				})
			);
	};

	handleButtonWeatherStore = async (e) => {
		const city = e.target.value;
		const country = e.target.name;
		const number = 0.0001;
		const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric&lang=pl`;

		fetch(api)
			.then((response) => {
				if (response.ok) {
					if (city && country) {
						return response.json();
					}
				}
				throw Error(response.statusText);
			})
			.then((data) =>
				this.setState({
					inputCity: city,
					inputCountry: country,
					temperature: data.main.temp + number,
					city: data.name,
					country: data.sys.country,
					humidity: data.main.humidity + number,
					description: data.weather[0].description,
					pressure: data.main.pressure + number,
					wind_speed: data.wind.speed + number,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					error: ''
				})
			)
			.catch((error) =>
				this.setState({
					temperature: undefined,
					city: undefined,
					country: undefined,
					humidity: undefined,
					description: undefined,
					pressure: undefined,
					wind_speed: undefined,
					sunrise: undefined,
					sunset: undefined,
					error: 'Proszę wpisać poprawne dane ' + error
				})
			);
	};

	handleFormInputChange = (e) => {
		if (e.target.name === 'city') {
			this.setState({
				inputCity: e.target.value
			});
		} else if (e.target.name === 'country') {
			this.setState({
				inputCountry: e.target.value
			});
		}
	};

	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="container">
						<div className="left">
							<Titles />
						</div>
						<div className="right">
							<Form
								cityInput={this.state.inputCity}
								countryInput={this.state.inputCountry}
								changeInput={this.handleFormInputChange}
								getWeather={this.getWeather}
							/>
							<Weather
								temperature={this.state.temperature}
								city={this.state.city}
								country={this.state.country}
								humidity={this.state.humidity}
								description={this.state.description}
								pressure={this.state.pressure}
								wind_speed={this.state.wind_speed}
								sunrise={this.state.sunrise}
								sunset={this.state.sunset}
								error={this.state.error}
							/>
							<div className="btn_store">
								<WeatherStore changeWeather={this.handleButtonWeatherStore} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
