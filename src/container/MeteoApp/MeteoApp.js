import React, { Component } from 'react'
import axios from 'axios'

import MeteoTile from '../../component/MeteoTile/MeteoTile'
import Credentials from '../../component/Credentials/Credentials'
import './MeteoApp.css'

class MeteoApp extends Component {
  state = {
    city: "",
    country: "",
    loading: true,
  }

  componentDidMount () {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?cnt=5&units=metric&id=3032872&APPID=edad3aced0d3eb7ed91c09000fad835f')
      .then(response => {
        let month = ""

        switch(response.data.list[0].dt_txt.slice(5, 7)) {
          case "01":
            month = "Jan";
            break;
          case "02":
            month = "Feb";
            break;
          case "03":
            month = "Mar";
            break;
          case "04":
            month = "Apr";
            break;
          case "05":
            month = "May";
            break;
          case "06":
            month = "Jun";
            break;
          case "07":
            month = "Jul";
            break;
          case "08":
            month = "Aug";
            break;
          case "09":
            month = "Sep";
            break;
          case "10":
            month = "Oct";
            break;
          case "11":
            month = "Nov";
            break;
          case "12":
            month = "Dec";
            break;
          default:
            month = ""
        }

        let weatherObject = []

        const setData = Object.entries(response.data.list).map(key => {
          weatherObject.push(
            {
              hour: key[1].dt_txt.slice(11, 13),
              month: month,
              day: key[1].dt_txt.slice(8, 10),
              clearance: key[1].weather[0].description,
              clearance_icon: key[1].weather[0].icon,
              maxTemp: key[1].main.temp_max,
              humidity: key[1].main.humidity,
            }
          )
        })



        console.log(weatherObject)

        this.setState({
          city: response.data.city.name,
          country: response.data.city.country,
          conditions: [
            ...weatherObject
          ],
          loading: false
        })
      })
  }

  render () {
    console.log(this.state)

    let content = <p>Salut</p>

    if (!this.state.loading) {
      content = (
        <>
          <h1>{this.state.city}, {this.state.country}</h1>
          {
            this.state.conditions.map(key => {
              return <MeteoTile forecast={key} />
            })
          }
          <Credentials />
        </>
      )
    }
    return (
      <div className="container">
        {content}
      </div>
    );
  }
}

export default MeteoApp
