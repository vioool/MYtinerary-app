import { GET_ITINERARIES } from '../actions/types'
import { CREATE_ITINERARY } from '../actions/types'
import { DELETE_ITINERARY } from '../actions/types'
import { GET_ITINERARY } from '../actions/types'

const initialState = {
    itineraries: [],
    itinerary: null,
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action
    console.log(action)

    switch (type) {
        //creates a case for GET_ITINERARIES which filters the itineraries array by city
        case GET_ITINERARIES:
            return {
                //spread the state and use a filter method on the itineraries array
                //remember: the payload we send to the reducer was only the city of the itinerary
                ...state,
                itineraries: [...payload],
                loading: false
            }
        case CREATE_ITINERARY:
            return {
                ...state,
                itineraries: [payload, ...state.itineraries],
                loading: false
            }
        //creates a case for DELETE_ITINERARY which filters the itineraries array by id
        case DELETE_ITINERARY:
            return {
                //spread the state and use a filter method on the itineraries array
                //remember: the payload we send to the reducer was only an _id of the itinerary
                ...state,
                itineraries: state.itineraries.filter(
                    //so for each itinerary in our array we check if it does not equal the payload, so for no matches,
                    //if it finds a match, it filters the itinerary with matching id out of the array!
                    itinerary => itinerary._id !== payload
                ),
                loading: false
            }
        case GET_ITINERARY:
            return {
                ...state,
                itinerary: payload,
                loading: false
            }
        default:
            return state
    }
}