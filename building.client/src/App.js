
import Login from "./Components/Login";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Home from "./Components/Home"
import User from "./Components/User"
import Payment from "./Components/Payment"
import Flat from "./Components/Flat"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/user">Kullanıcı</Link>
            </li>
            <li>
              <Link to="/payment">Ödeme sayfası</Link>
            </li>
            <li>
              <Link to="/flat">Daire Bilgisi</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/flat">
            <Flat />
          </Route>
        <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
