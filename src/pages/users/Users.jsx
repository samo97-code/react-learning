import React, { useEffect, useState } from "react"
import UserItem from "../../components/user/UserItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../store/actions/userAction"
import Loading from "../../components/loading/Loading"
import Pagination from "../../components/pagination/Pagination"

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)
  const totalCount = useSelector((state) => state.users.totalCount)

  const [pagination, setPagination] = useState(0)
  const [options, setOptions] = useState({
    sort: "id",
    order: "desc",
    page: 1,
    limit: 5,
  })

  useEffect(() => {
    setPagination(Math.ceil(totalCount / options.limit))
  }, [users])

  useEffect(() => {
    dispatch(fetchUsers(options))
  }, [options])

  const paginate = (count) => {
    let value = 0
    if (options.page !== count) {
      if (count === "next" && options.page !== pagination) {
        value = options.page + 1
      } else if (count === "prev" && options.page !== 1) {
        value = options.page - 1
      } else value = count

      if (typeof value === "number") {
        setOptions((prevState) => ({
          ...prevState,
          page: value,
        }))
      }
    }
  }

  const usersList = users?.map((user) => {
    return <UserItem key={user.id} user={user} />
  })

  return (
    <div className="container">
      <div className="row">
        {users && users.length ? usersList : <Loading />}
      </div>
      <Pagination
        options={options}
        totalItems={pagination}
        paginate={paginate}
      />
    </div>
  )
}

export default Users
