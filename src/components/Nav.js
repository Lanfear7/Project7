import Rect from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Photos from './Photos'

const Nav = (props) => {
    return(
        <Router>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/cats">Cats</Link>
            </li>
            <li>
              <Link to="/dogs">Dogs</Link>
            </li>
            <li>
              <Link to="/computers">Computers</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Photos />
            </Route>
            <Route path="/cats">
              <Cat />
            </Route>
            <Route path="/dogs">
              <Dog />
            </Route>
            <Route path="/computers">
              <Computers />
            </Route>
          </Switch>
        </nav>
      </Router>
    )
}

function Home() {
    return (
      <div>
        <h2></h2>
      </div>
    );
  }

  function Cat(){
      return(
        <div>
            <h2>Cat</h2>
        </div>
      )
      
  }
  
  function Dog() {
    return (
      <div>
        <h2>Dog</h2>
      </div>
    );
  }
  
  function Computers() {
    return (
      <div>
        <h2>Computers</h2>
      </div>
    );
  }

export default Nav