import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, deleteUser } from "../../store/actions/userAction"
import Loading from "../../components/loading/Loading"
import Pagination from "../../components/pagination/Pagination"
import UserSlider from "../../components/slider/UserSlider"
import styles from "./Home.module.scss"

const Home = () => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.users.users)
  const totalCount = useSelector((state) => state.users.totalCount)

  const [showCounter, setShowCounter] = useState(false)
  const [options, setOptions] = useState({
    sort: "id",
    order: "desc",
    page: 1,
    limit: 5,
    filter: "",
  })

  useEffect(() => {
    dispatch(fetchUsers(options))
  }, [options])

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

  const usersTable = useMemo(() => {
    return users?.map((user) => {
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
  }, [users])

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

          <input
            className="form-control ml-4"
            type="text"
            name="filter"
            placeholder="Filter by name"
            onInput={(e) => userOptions(e)}
          />
        </div>

        <div className="">
          <button
            className="btn btn-info"
            onClick={() => setShowCounter((prevState) => !prevState)}
          >
            Show Count
          </button>
          {showCounter ? <h4>We have {totalCount} users</h4> : null}
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

        <Pagination options={options} setOptions={setOptions} />
      </div>
      <UserSlider />
    </div>
  )
}

export default Home
