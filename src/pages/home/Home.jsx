import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, deleteUser } from "../../store/actions/userAction"
import Loading from "../../components/loading/Loading"
import Pagination from "../../components/pagination/Pagination"
import styles from "./Home.module.scss"

const Home = () => {
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
    dispatch(fetchUsers(options))
  }, [options])

  useEffect(() => {
    setPagination(Math.ceil(totalCount / options.limit))
  }, [users])

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

  const formatText = (text) => {
    return text?.length > 50 ? text.slice(0, 50) + "..." : text
  }

  const userDelete = (id) => {
    dispatch(deleteUser(id))
  }

  const userOptions = (e) => {
    setOptions((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const usersTable = users?.map((user) => {
    return (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{formatText(user.description)}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => userDelete(user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  })

  return (
    <div className="container">
      <div className={[styles.homeContainer, "row"].join(" ")}>
        <div className={styles.selectBlocks}>
          <select
            name="sort"
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) => userOptions(e)}
          >
            <option value="" selected disabled hidden>
              Sorting
            </option>
            <option value="id">Id</option>
            <option value="firstName">First name</option>
            <option value="lastName">Last name</option>
            <option value="email">Email</option>
          </select>

          <select
            name="order"
            className="form-control ml-4"
            id="exampleFormControlSelect2"
            onChange={(e) => userOptions(e)}
          >
            <option value="" selected disabled hidden>
              Order
            </option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>

          <select
            name="limit"
            className="form-control ml-4"
            id="exampleFormControlSelect3"
            onChange={(e) => userOptions(e)}
          >
            <option value="" selected disabled hidden>
              Limit
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {usersTable && usersTable.length ? usersTable : <Loading />}
          </tbody>
        </table>

        <Pagination
          options={options}
          totalItems={pagination}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default Home
