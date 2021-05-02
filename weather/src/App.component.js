import React from "react"
import Weather from "./components/Weather.component"
import Form from "./components/form.component"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      country: "",
      icon: "",
      main: "",
      degree: "",
      temp_max: "",
      temp_min: "",
      description: "",
      error: false
    }
    this.icon = {
      ThunderStorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }


  calcDegree = (deg) => {
    let cell = Math.floor(deg - 273.15)
    return cell
  }

  getIcon = (icon, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon: this.icon.ThunderStorm})
        break
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon: this.icon.Drizzle})
        break
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon: this.icon.Rain})
        break
      case rangeId >= 600 && rangeId <= 622:
        this.setState({icon: this.icon.Snow})
        break
      case rangeId >= 701 && rangeId <= 781:
        this.setState({icon: this.icon.Atmosphere})
        break
      case rangeId == 800:
        this.setState({icon: this.icon.Clear})
        break
      case rangeId >= 801 && rangeId <= 804:
        this.setState({icon: this.icon.Clouds})
        break
      default:
        this.setState({icon: this.icon.Clouds})
    }
  }

  getWeather = async (city, country) => {

    const API_key = "5b75b4ac499e2a9513161f4c0b2f531b"
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
    const response = await api_call.json()
    this.setState({
      city: response.name,
      country: response.sys.country,
      degree: this.calcDegree(response.main.temp),
      temp_max: this.calcDegree(response.main.temp_max),
      temp_min: this.calcDegree(response.main.temp_min),
      description: response.weather[0].description,
    })
    this.getIcon(this.icon, response.weather[0].id)
    console.log(city, country)
  }


  render() {
    const {city, country, icon, main, degree, temp_max, temp_min, description, error} = this.state
    return (
      <div>
        <Form loadWeather={() => this.getWeather(city, country)} err={this.state.error}/>
        <Weather
          city={city}
          country={country}
          icon={icon}
          main={main}
          degree={degree}
          temp_max={temp_max}
          temp_min={temp_min}
          description={description}
          error={error}
        />
      </div>
    )
  }
}

export default App