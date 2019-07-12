import axios from "axios"
import { GET_CITIES, GET_CITY, DELETE_CITY, SET_ERROR, CREATE_CITY } from './types'
import { setError } from './errorActions'

export const getCities = () => async dispatch => {
    console.log('hello');
    try {
        const res = await axios.get('/cities');
        dispatch({
            type: GET_CITIES,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

export const createCity = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        //makes api call, creates a city and adds it to the database
        const res = await axios.post('/cities/', formData, config)
        //verzenden naar de reducer
        dispatch({
            type: CREATE_CITY,
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

export const deleteCity = _id => async dispatch => {
    console.log('jhjh')
    try {
        //makes api call and removes the city by id from the database
        const res = await axios.delete('/cities/'+_id);
            //verzenden naar de reducer
        dispatch({
            type: DELETE_CITY,
            payload: res._id
        })
    } catch (err) {
        console.log(err);
    }
}

export const getCity = _id => async dispatch => {
    console.log('hello');
    try {
        const res = await axios.get('/cities/'+_id);
        dispatch({
            type: GET_CITY,
            //the result of the data from the API call
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}