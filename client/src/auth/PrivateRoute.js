import React  from "react";
import {Route, Redirect} from 'react-router-dom'
import auth from './auth-helper'

const PrivateRoute = ({Component: Component, ...rest}) => {

  <Route
  {...rest}
  render={(props)=>
    auth.isAuthenitcated() ? (
      <Component {...props} />
    ) : (
      <Redirect
      to={{pathname: "/signin", state:{from:props.location}}}
      />
    )
  }
  />        
}

export default PrivateRoute