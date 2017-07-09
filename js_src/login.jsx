import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div>
              <h1>This is where login will happen</h1>
              <Link to="/">Home</Link>
            </div>
        )
    }
}
export default Login
