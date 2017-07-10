import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {fbapp, firebaseAuth, ref} from './firebaseConfig.jsx';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

class Login extends React.Component {
    render() {
        return (
            <div>
              <FirebaseUI />
            </div>
        )
    }
}

var authUi = new firebaseui.auth.AuthUI(firebaseAuth());

firebaseAuth().onAuthStateChanged((user) => {
    if (user) {
        ref.set(firebase.database.ServerValue.TIMESTAMP).then((error) => {
            if (error) {
                console.error(error);
            }
            else {
                console.log("Timestamp written");
            }
        });
    }
});

class FirebaseUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            loading: true,
        };
    }

    componentDidMount() {
        var self = this;
        var uiConfig = {
            'callbacks': {
                'signInSuccess': function(user) {
                    if (self.props.onSignIn) {
                        self.props.onSignIn(user);
                    }
                    return false;
                }
            },
            'signInOptions': [
                firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
                firebaseAuth.EmailAuthProvider.PROVIDER_ID
            ]
        };
        authUi.start('#firebaseui-auth', uiConfig);
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

    componentWillUnmount() {
        authUi.reset();
    }

    render() {
        return (
            <div>
              {this.state.authed
               && <Redirect to="/" />
              }
              <div id="firebaseui-auth"></div>
            </div>
        );
    }
}
export default Login
