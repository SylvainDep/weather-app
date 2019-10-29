import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PersonInfo from './PersonInfo/PersonInfo'
import Map from './Map/Map'

import * as actions  from '../../../../store/actions/person'

const NavList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
  width: 100%;
`

class About extends Component {
  componentDidMount() {
    this.props.onFetchLocalTime(this.props.lat, this.props.lng)
    console.log(this.props.localTime)
  }

  render() {


    let about = <div></div>

    if (!this.props.loadingTime) {
      const formattedTime = this.props.localTime.formatted.slice(this.props.localTime.formatted.length - 8, this.props.localTime.formatted.length - 3)
      about = (
        <>
          <h2>About {this.props.gender === 'female' ? 'her' : 'him'}</h2>
          <PersonInfo label="Age" value={this.props.age} />
          <PersonInfo label="Place" value={this.props.location} />
          <PersonInfo label="Local Time" value={formattedTime} />
          <Map lat={this.props.lat} lng={this.props.lng}/>
        </>
      )
    }

    return (
      <div>
        {about}
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    lat: state.location.coordinates.latitude,
    lng: state.location.coordinates.longitude,
    loadingTime: state.loadingTime,
    gender: state.gender,
    age: state.dob.age + ' years old',
    location: state.location.city + ', ' + state.location.state + ' (' + state.location.country + ')',
    localTime: state.localTime
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    onFetchLocalTime: (latitude, longitude) => dispatch(actions.fetchLocalTime(latitude, longitude))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(About)
