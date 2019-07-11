import { GET_CITIES } from '../actions/types'
import { CREATE_CITY } from '../actions/types'

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
    default:
      return state
  }
}