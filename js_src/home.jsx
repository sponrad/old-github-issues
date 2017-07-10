import React from 'react';
import {
    Link
} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
              <h1>Home page</h1>
              <p>There will be so much great intro content here it will be unreal</p>
              <Link className="btn btn-primary" to="/login">Get Started</Link>
            </div>
        )
    }
}
export default Home
