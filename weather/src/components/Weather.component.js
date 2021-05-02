import React from "react"


import * as style from "../styles/Weather.module.scss"

export default function Weather({city, country, degree, description, main, temp_max, temp_min, error, icon}) {

  const minMaxTemp = (min, max) => {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    )
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1>{city}, {country}</h1>
        <h5 className="py-5">
          <i className={`wi ${icon} display-1`}/>
        </h5>
        <h1 className="py-1">{degree}&deg;</h1>

        {minMaxTemp(temp_min, temp_max)}
        <h4 className="py-3">{description}</h4>
      </div>
    </div>
  )
}