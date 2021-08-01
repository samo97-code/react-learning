import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import ModalForm from "./ModalForm"
import SimpleReactValidator from "simple-react-validator"
import { createUser } from "../../store/actions/userAction"

const Modal = () => {
  const dispatch = useDispatch()
  const validator = useRef(
    new SimpleReactValidator({
      className: "text-danger",
    })
  )
  const [form, setForm] = useState({})
  const [, forceUpdate] = useState()

  const create = async () => {
    if (validator.current.allValid()) {
      await dispatch(createUser({ ...form }))
    } else {
      validator.current.showMessages()
      forceUpdate(1)
    }
  }

  const getForm = (form) => {
    setForm(form)
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mt-2 mb-2"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Create card
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Create new card
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ModalForm getForm={getForm} validator={validator} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => create()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
