import React, { useEffect, useState } from "react"
import styles from "./ModalForm.module.scss"

const ModalForm = ({ getForm, validator }) => {
  const [form, setForm] = useState({})
  const changeInput = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))

    validator.current.showMessageFor(e.target.name)
  }

  useEffect(() => {
    getForm(form)
  }, [form])

  return (
    <form className={styles.formWrapper}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          className="form-control"
          id="firstName"
          aria-describedby="emailHelp"
          placeholder="First Name"
          onChange={(e) => changeInput(e)}
        />
        {validator.current.message(
          "firstName",
          form.firstName,
          "required|alpha"
        )}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          className="form-control"
          id="lastName"
          aria-describedby="emailHelp"
          placeholder="Last Name"
          onChange={(e) => changeInput(e)}
        />
        {validator.current.message("lastName", form.lastName, "required|alpha")}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
          onChange={(e) => changeInput(e)}
        />
        {validator.current.message("email", form.email, "required|email")}
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <select
          name="age"
          className="form-control"
          id="age"
          onChange={(e) => changeInput(e)}
        >
          {[...Array(99)].map((u, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            )
          })}
        </select>
        {validator.current.message("age", form.age, "numeric")}
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="exampleRadios1"
            value="male"
            onChange={(e) => changeInput(e)}
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            name="gender"
            className="form-check-input"
            type="radio"
            id="exampleRadios2"
            value="female"
            onChange={(e) => changeInput(e)}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Female
          </label>
        </div>
        {validator.current.message("gender", form.gender, "string")}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className="form-control"
          id="description"
          placeholder="Description"
          onChange={(e) => changeInput(e)}
        />
        {validator.current.message("description", form.description, "string")}
      </div>
    </form>
  )
}

export default ModalForm
