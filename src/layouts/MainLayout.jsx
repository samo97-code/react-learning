import React from "react"
import Header from "../components/Header"
import Modal from "../components/modal/Modal"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Modal />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
