import React from 'react'

const labelNames = ["Lokalizacja:", "Temperatura:", "Wilgotność:", "Warunki:", "Ciśnienie:", "Prędkość wiatru:", "Wschód:", "Zachód:", "Dzień trwa:", "Error:"];

const Weather = props => (

    < div className="weather" >
        {props.country && props.city &&
            <p className="toLeft">{labelNames[0]}<span className="toRight">{props.city}, {props.country}</span></p>}

        {props.temperature &&
            <p className="toLeft">{labelNames[1]}<span className="toRight">{(props.temperature).toFixed(2)}<> &deg;C</></span></p>}

        {props.humidity &&
            <p className="toLeft">{labelNames[2]}<span className="toRight">{(props.humidity).toFixed(0)}<> %</></span></p>}

        {props.description &&
            <p className="toLeft">{labelNames[3]}<span className="toRight">{props.description === "light rain and snow" ? "niewielki śnieg z deszczem" : props.description}</span></p>}

        {props.pressure &&
            <p className="toLeft">{labelNames[4]}<span className="toRight">{(props.pressure).toFixed(0)}<> hPa</></span></p>}

        {props.wind_speed &&
            <p className="toLeft">{labelNames[5]}<span className="toRight">{((props.wind_speed * 60 * 60) / 1000).toFixed(2)} <> km/h</></span></p>}

        {props.sunrise &&
            <p className="toLeft">{labelNames[6]}<span className="toRight">{(new Date(props.sunrise * 1000)).toLocaleTimeString()}</span> </p>}

        {props.sunset &&
            <p className="toLeft">{labelNames[7]}<span className="toRight">{(new Date(props.sunset * 1000)).toLocaleTimeString()}</span> </p>}

        {props.sunset &&
            <p className="toLeft">{labelNames[8]}<span className="toRight">{(new Date(((props.sunset * 1000) - (props.sunrise * 1000)) - 3600 * 1000)).toLocaleTimeString()}</span></p>}

        {props.error && <p className="toLeft">{labelNames[9]}<span className="toRight">{props.error}</span></p>}
    </div >
)

export default Weather

