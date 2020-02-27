import React from 'react'
import '../App.css'
import StoreBtn from './StoreBtn';


const WeatherStore = (props) => {

    const citiesStore = [
        {
            Id: 1,
            cityName: "Łódź",
            countryName: "pl",
        },
        {
            Id: 2,
            cityName: "Wrocław",
            countryName: "pl",
        },
        {
            Id: 3,
            cityName: "Chicago",
            countryName: "us",
        },
        {
            Id: 4,
            cityName: "Goeteborg",
            countryName: "se",
        },
    ]

    const btnStore = () => {
        return citiesStore.map(city =>

            <StoreBtn
                city={city}
                key={city.Id}
                changeWeather={props.changeWeather}
            >
            </StoreBtn>

        )
    }

    return (

        <ul >

            {btnStore()}

        </ul>
    )




}

export default WeatherStore;