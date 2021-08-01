import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserById } from "../../store/actions/userAction"

const User = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user)

  useEffect(() => {
    dispatch(fetchUserById(params.id))
  }, [])

  return (
    <div>
      <h5>
        Thanks {user.firstName} {user.lastName} for connecting to our project
      </h5>
      //todo Add Slick Slider(ro something else)
    </div>
  )
}

export default User
