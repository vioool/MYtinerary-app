import axios from "axios"
import { GET_USERS, GET_USER, DELETE_USER, SET_ERROR, CREATE_USER } from './types'
import { setError } from './errorActions'

export const getUsers = () => async dispatch => {
    console.log('hello');
    try {
        const res = await axios.get('/api/auth/');
        dispatch({
            type: GET_USERS,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}

export const createUser = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        //makes api call, creates a new user and adds it to the database
        const res = await axios.post('/api/auth/', formData, config)
        //verzenden naar de reducer
        dispatch({
            type: CREATE_USER,
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

export const deleteUser = _id => async dispatch => {
    console.log('jhjh')
    try {
        //makes api call and removes the user by id from the database
        const res = await axios.delete('/api/auth/'+_id);
            //verzenden naar de reducer
        dispatch({
            type: DELETE_USER,
            payload: res._id
        })
    } catch (err) {
        console.log(err);
    }
}

export const getUser = _id => async dispatch => {
    console.log('hello');
    try {
        const res = await axios.get('/api/auth/'+_id);
        dispatch({
            type: GET_USER,
            //the result of the data from the API call
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}