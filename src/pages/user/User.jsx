import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserById } from "../../store/actions/userAction"
import UserItem from "../../components/user/UserItem"
import UserSlider from "../../components/slider/UserSlider"

const User = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user)

  useEffect(() => {
    dispatch(fetchUserById(params.id))
  }, [])

  return (
    <div className="container">
      <div className="">
        <h5>
          Thanks {user.firstName} {user.lastName} for connecting to our project
        </h5>
        <div className="mb-5">
          <h6>Card </h6>
          <UserItem key={user.id} user={user} />
        </div>
        <UserSlider />
      </div>
    </div>
  )
}

export default User
