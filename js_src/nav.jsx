import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom'
import {fbapp, firebaseAuth} from './firebaseConfig.jsx';
import { logout } from './helpers/auth.jsx';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            loading: true,
        };
    }

    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        })
    }
    
    render() {
        return (
            <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-sm">
              <Link className="navbar-brand" to="/">OnlyIssues</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    {this.state.authed
                     ? <a
                           href=""
                           onClick={() => {
                                   logout()
                               }}
                           className="nav-link">Logout</a>
                     : <Link className="nav-link" to="/login">Login</Link>
                    }
                  </li>
                </ul>
              </div>
            </nav>
        )
    }
}
export default Nav
