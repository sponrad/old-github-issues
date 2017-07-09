import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from './hello.jsx';
import Login from './login.jsx';

const BasicExample = () => (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
)
export default BasicExample

ReactDOM.render(<BasicExample />, document.getElementById('OIapp'));
