import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/frontend/Home.js'
import Onboarding from './Components/auth/Onboarding.js'
import Register from './Components/auth/Register.js'
import Manager from './Components/dashboard/Manager.js'
import Login from './Components/auth/Login.js'


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/manager"> 
          <Manager />
        </Route>
        <Route path="/onboarding"> 
          <Onboarding />
        </Route>
        <Route path="/login"> 
          <Login />
        </Route>
        <Route path="/register"> 
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default App
