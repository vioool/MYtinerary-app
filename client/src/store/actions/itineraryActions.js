import axios from "axios"
import { GET_ITINERARIES, GET_ITINERARY, DELETE_ITINERARY, SET_ERROR, CREATE_ITINERARY } from './types'
import { setError } from './errorActions'

export const getItineraries = city => async dispatch => {
    console.log('hello');
    console.log(city)
    try {
        //makes api call and get Itineraries by city from the database
        const res = await axios.get('/Itineraries/' + city);
        console.log('hi!')
        dispatch({
            type: GET_ITINERARIES,
            //the result of the data from the API call
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

export const createItinerary = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        //makes api call, creates a Itinerary and adds it to the database
        const res = await axios.post('/Itineraries/', formData, config)
        //verzenden naar de reducer
        dispatch({
            type: CREATE_ITINERARY,
            payload: res.data
        })
        //when requirments are not met...
    } catch (err) {
        //pick the errors
        const errors = err.response.data.errors
        console.log(errors);
        //
        if (errors) {
            dispatch(setError(errors))
        }
        dispatch({
            type: SET_ERROR,
            payload: errors
        })
    }
}

export const deleteItinerary = _id => async dispatch => {
    console.log('jhjh')
    try {
        //makes api call and removes the Itinerary by id from the database
        const res = await axios.delete('/Itineraries/' + _id);
        //verzenden naar de reducer
        dispatch({
            type: DELETE_ITINERARY,
            payload: res._id
        })
    } catch (err) {
        console.log(err);
    }
}

export const getItinerary = _id => async dispatch => {
    console.log('hello');
    try {
        const res = await axios.get('/Itineraries/' + _id);
        dispatch({
            type: GET_ITINERARY,
            //the result of the data from the API call
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}