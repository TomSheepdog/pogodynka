import React from 'react'
import '../App.css'


const StoreBtn = (props) => (

    <button
        className="storeBtn"
        value={props.city.cityName}
        name={props.city.countryName}
        onClick={props.changeWeather}
    >
        {props.city.cityName}
    </button>

)

export default StoreBtn