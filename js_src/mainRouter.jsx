import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import fbapp from './firebaseConfig.jsx';
import Nav from './nav.jsx';
import Home from './home.jsx';
import Login from './login.jsx';

const OIApp = () => (
    <Router>
      <div>
        <Nav />
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </div>
      </div>
    </Router>
)
export default OIApp

ReactDOM.render(<OIApp />, document.getElementById('OIApp'));
