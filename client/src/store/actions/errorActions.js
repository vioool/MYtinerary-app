import { REMOVE_ERROR } from './types'

export const setError = text => dispatch => {
    setTimeout( 
        () => 
          dispatch({ 
            type: REMOVE_ERROR, 
            // payload: id
          }), 
        3000 )
    }