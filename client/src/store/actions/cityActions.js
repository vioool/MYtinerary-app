import axios from "axios"
import { GET_CITIES, CREATE_CITY_ERROR, SET_ERROR, CREATE_CITY } from './types'
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
        const res = await axios.post('/cities/', formData, config)
        dispatch({
            type: CREATE_CITY,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors
        console.log(errors)
        if (errors) {
            dispatch(setError(errors))
        }
        dispatch({
            type: SET_ERROR,
            payload: errors,
        })
    }
}

