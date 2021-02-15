import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '/pages/home'
import Layout from '/pages/layout'
import UserMode from '/pages/users'

const Init_Cpt = () => {
  return (
    <di>
      Hello ！！ world ~
    </di>
  )
}
export default function BasicRouter() {
  return (
    <Router>
      <>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
           <Layout components = {<UserMode/>}/>
          </Route>
          <Route path="/">
            <Layout components = {<Init_Cpt/>}/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}