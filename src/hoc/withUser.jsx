import React from "react"

// eslint-disable-next-line react/display-name
const WithUser = (WrappedComponent) => (props) => {
  return (
    <>
      <WrappedComponent />
    </>
  )
}

export default WithUser
