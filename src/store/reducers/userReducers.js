import { GET_USERS, GET_USER, DELETE_USER, CREATE_USER } from "../types/type"

const initialState = {
  users: [],
  user: {},
  totalCount: 0,
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.data,
        totalCount: action.payload.headers["x-total-count"],
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users?.filter((item) => item.id !== action.payload),
      }
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    default:
      return state
  }
}

export default userReducers
