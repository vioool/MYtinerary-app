// import uuid from 'uuid'
import { SET_ERROR } from '../actions/types'
import { REMOVE_ERROR } from '../actions/types'

const initialState = []

export default function (state = initialState, action) {
    // const id = uuid.v4()
    // dispatch({ 
    //     type: SET_ERROR, 
    //     payload: { text, id } 
    //   })
    const { type, payload } = action
    console.log(action)
    switch (type) {
        case SET_ERROR: {
            return [...state, ...payload]
        } case REMOVE_ERROR:
            return state.filter(err => err.id !== payload)
        default:
            return state
    }
}