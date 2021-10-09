import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/common/Home.js'
import Manager from './Components/dashboard/Manager.js'

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/manager"> 
          <Manager />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default App
