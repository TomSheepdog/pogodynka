import React from 'react'
import rainIco from '../Img/weather_Icons/rain-64.png'
import partlyIco from '../Img/weather_Icons/partly-cloudy-day-64.png'
import snowIco from '../Img/weather_Icons/snow-64.png'
import stormIco from '../Img/weather_Icons/storm-64.png'
import summerIco from '../Img/weather_Icons/summer-64.png'

const Titles = () => (
    <div className="titles">
        <h1>Pogodynka</h1>
        <p>Sprawdź jaka będzie dziś pogoda</p>
        <p><img src={partlyIco} alt="partlyIco" />
            <img src={rainIco} alt="rainIco" />
            <img src={summerIco} alt="summerIco" />
            <img src={snowIco} alt="snowIco" />
            <img src={stormIco} alt="stormIco" /></p>
    </div>
)

export default Titles