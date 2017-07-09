import React from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
              <Link className="navbar-brand" to="/">OnlyIssues</Link>
            </nav>
        )
    }
}
export default Nav
