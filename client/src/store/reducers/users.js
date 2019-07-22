import { GET_USERS } from '../actions/types'
import { CREATE_USER } from '../actions/types'
import { DELETE_USER } from '../actions/types'
import { GET_USER } from '../actions/types'

const initialState = {
  users: [],
  user: null,
  loading: true
}

export default function (state = initialState, action) {
  const { type, payload } = action
  // console.log(action)

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      }
    case CREATE_USER:
      return {
        ...state,
        users: [payload, ...state.users],
        loading: false
      }
    //creates a case for DELETE_USER which filters the users array
    case DELETE_USER:
      return {
        //spread the state and use a filter method on the users array
        //remember: the payload we send to the reducer was only an _id of the user
        ...state,
        users: state.users.filter(
          //so for each user in our array we check if it does not equal the payload, so for no matches,
          //if it finds a match, it filters the user with matching id out of the array!
          user => user._id !== payload
        ),
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false
      }
    default:
      return state
  }
}