import React from "react"
import styles from "./Pagination.module.scss"

const Pagination = ({ options, totalItems, paginate }) => {
  const paginationCount =
    totalItems &&
    [...Array(totalItems)].map((item, index) => {
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
                options.page === totalItems ? styles.blocked : "",
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
