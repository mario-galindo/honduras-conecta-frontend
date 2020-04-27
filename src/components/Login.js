import React from 'react';


class Login extends React.Component {
    render() {
        return ( 
            <div id="login_div" class="main-div">
                <h3>Firebase Web login Example</h3>
                <input type="email" placeholder="Email..." id="email_field" />
                <input type="password" placeholder="Password..." id="password_field" />
                <button onClick="login()">Login to Account</button>
            </div>
        )
    }
}

export default Login;