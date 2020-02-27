import '../App.css';
import React from 'react'

const Form = (props) => (
	<form className="form" type="submit" onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="miasto..." value={props.cityInput} onChange={props.changeInput} />
		<input
			type="text"
			name="country"
			placeholder="kraj..."
			value={props.countryInput}
			onChange={props.changeInput}
		/>
		<button>Pogoda</button>
	</form>
);

export default Form;
