import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../component/Home'
import Input from '../component/Input'

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/input" exact>
          <Input />
        </Route>
      </Switch>
    </>
  )
}
export default Routes
