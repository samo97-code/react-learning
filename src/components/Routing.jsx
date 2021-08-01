import React from "react"
import { Route, Switch } from "react-router"
import Home from "../pages/home/Home"
import Users from "../pages/users/Users"
import User from "../pages/user/User"

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={User} />
      </Switch>
    </>
  )
}

export default Routing
