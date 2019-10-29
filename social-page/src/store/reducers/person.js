import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loadingPerson: true,
  loadingTime: true
}

const fetchPerson = (state = initialState, action) => {
  return {
    ...state,
    loadingPerson: false,
    ...action.personData
  }
}

const fetchLocalTime = (state = initialState, action) => {
  return {
    ...state,
    loadingTime: false,
    localTime: action.localTime
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PERSON: return fetchPerson(state, action)
    case actionTypes.FETCH_LOCAL_TIME: return fetchLocalTime(state, action)
    default: return state
  }
}
export default reducer
