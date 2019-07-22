import { GET_CITIES } from '../actions/types'
import { CREATE_CITY } from '../actions/types'
import { DELETE_CITY } from '../actions/types'
import { GET_CITY } from '../actions/types'

const initialState = {
  cities: [],
  city: null,
  loading: true
}

export default function (state = initialState, action) {
  const { type, payload } = action
  // console.log(action)

  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: payload,
        loading: false
      }
    case CREATE_CITY:
      return {
        ...state,
        cities: [payload, ...state.cities],
        loading: false
      }
    //creates a case for DELETE_CITY which filters the cities array
    case DELETE_CITY:
      return {
        //spread the state and use a filter method on the cities array
        //remember: the payload we send to the reducer was only an _id of the city
        ...state,
        cities: state.cities.filter(
          //so for each city in our array we check if it does not equal the payload, so for no matches,
          //if it finds a match, it filters the city with matching id out of the array!
          city => city._id !== payload
        ),
        loading: false
      }
    case GET_CITY:
      return {
        ...state,
        city: payload,
        loading: false
      }
    default:
      return state
  }
}