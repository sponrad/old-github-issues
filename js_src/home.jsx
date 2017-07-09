import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
              <h1>Home page</h1>
              <Link to="/login">Login</Link>
            </div>
        )
    }
}
export default Home
