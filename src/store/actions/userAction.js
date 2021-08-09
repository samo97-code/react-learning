import axios from "axios"
import { GET_USERS, GET_USER, DELETE_USER, CREATE_USER } from "../types/type"

export const fetchUsers = (payload) => {
  return async (dispatch) => {
    try {
      const limit = payload?.limit ? payload.limit : 5
      const page = payload?.page ? payload.page : 1
      const sort = payload?.sort ? payload.sort : "id"
      const order = payload?.order ? payload.order : "desc"
      const filterFistName = payload?.filter ? payload.filter : ""
      const response = await axios.get(
        `http://localhost:8081/users?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}&firstName_like=${filterFistName}`
      )
      // console.log(response.headers["x-total-count"], "response")
      return dispatch({
        type: GET_USERS,
        payload: response,
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const fetchAllUsers = () => {
  return async () => {
    try {
      return await axios.get(`http://localhost:8081/users`)
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const fetchUserById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8081/users/${id}`)
      return dispatch({
        type: GET_USER,
        payload: response.data,
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8081/users/${id}`)
      return dispatch({
        type: DELETE_USER,
        payload: id,
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}

export const createUser = (form) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post(`http://localhost:8081/users`, form)
      return dispatch({
        type: CREATE_USER,
        payload: resp.data,
      })
    } catch (e) {
      console.log(e.message)
    }
  }
}
