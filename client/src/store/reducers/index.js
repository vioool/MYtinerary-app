//This is the rootReducer
import { combineReducers } from 'redux'
import cities from './cities'
import itineraries from './itineraries'
import error from './error'

//update info on the cities property inside the state object and export it
export default combineReducers({ cities, itineraries, error }) 