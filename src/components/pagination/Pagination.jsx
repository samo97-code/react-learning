import React, { useEffect, useState } from "react"
import styles from "./Pagination.module.scss"
import { useSelector } from "react-redux"

const Pagination = ({ options, setOptions }) => {
  const users = useSelector((state) => state.users.users)
  const totalCount = useSelector((state) => state.users.totalCount)
  const [pagination, setPagination] = useState(0)

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

  const paginationCount =
    pagination &&
    [...Array(pagination)].map((item, index) => {
      return (
        <li
          key={index}
          className={[
            styles.paginationListItem,
            options.page === index + 1 ? styles.active : "",
          ].join(" ")}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </li>
      )
    })

  return (
    <>
      {!paginationCount ? null : (
        <div className={styles.paginationBlock}>
          <ul className="pagination">
            <li
              className={[
                styles.arrows,
                options.page === 1 ? styles.blocked : "",
              ].join(" ")}
              onClick={() => paginate("prev")}
            >
              {"<"}
            </li>
            {paginationCount}
            <li
              className={[
                styles.arrows,
                options.page === pagination ? styles.blocked : "",
              ].join(" ")}
              onClick={() => paginate("next")}
            >
              {">"}
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Pagination
