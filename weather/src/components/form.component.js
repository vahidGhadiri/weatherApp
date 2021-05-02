import React from "react"
import * as style from "../styles/form.module.scss"

class Form extends React.Component {
  state = {
    city: "",
    country: ""
  }

  handleClick =  () => {
     this.props.loadWeather(this.state.city, this.state.country)
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.cell}>
            <input type="text" name="city" autoComplete="off" className={style.formControl}
                   placeholder="Type City"
                   onChange={(e) => this.setState({city: e.target.value})}
            />
          </div>
          <div className={style.cell}>
            <input type="text" name="country" autoComplete="off" className={style.formControl}
                   placeholder="Type Country"
                   onChange={(e) => this.setState({country: e.target.value})}
            />
          </div>
          <div className={style.cell}>
            <button className="btn btn-warning"
                    onClick={() => this.handleClick()}
            >
              Get Weather
            </button>
          </div>
        </div>
      </div>
    )

  }
}

export default Form