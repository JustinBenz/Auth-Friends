import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Components
import Login from "./Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        {/* <Link onClick={logout}>Logout</Link> */}
        {/* <Link to="/protected">Protected Page</Link> */}
        <Switch>
          {/* <PrivateRoute exact path="/protected" component={FriendsList}/> */}
          <Route path="/login" component={Login}/>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
