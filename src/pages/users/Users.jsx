import React, { useEffect, useState } from "react"
import UserItem from "../../components/user/UserItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../store/actions/userAction"
import Loading from "../../components/loading/Loading"
import Pagination from "../../components/pagination/Pagination"

const Users = () => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.users.users)
  const [options, setOptions] = useState({
    sort: "id",
    order: "desc",
    page: 1,
    limit: 5,
  })

  useEffect(() => {
    dispatch(fetchUsers(options))
  }, [options])

  const userItem =
    users &&
    users.map((user) => {
      return <UserItem key={user.id} user={user} />
    })

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className="row">
        {users && users.length ? userItem : <Loading />}
      </div>
      <Pagination options={options} setOptions={setOptions} />
    </div>
  )
}

export default Users
