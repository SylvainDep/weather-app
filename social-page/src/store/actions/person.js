import axios from 'axios'

import * as actionTypes from './actionTypes'

export const fetchPersonSuccess = (personData) => {
  return {
    type: actionTypes.FETCH_PERSON,
    personData: personData
  }
}

export const fetchPersonData = () => {
  return dispatch => {
    axios.get('https://randomuser.me/api/')
        .then(req => {
            dispatch(fetchPersonSuccess(req.data.results[0]))
        })
  }
}

export const fetchLocalTimeSuccess = (localTime) => {
  return {
    type: actionTypes.FETCH_LOCAL_TIME,
    localTime: localTime
  }
}

export const fetchLocalTime = (latitude, longitude) => {
  return dispatch => {
    axios.get('http://api.timezonedb.com/v2.1/get-time-zone?key=UM002KM13AEO&format=json&by=position&lat=' + latitude + '&lng=' + longitude)
        .then(req => {
            dispatch(fetchLocalTimeSuccess(req.data))
        })
  }
}
