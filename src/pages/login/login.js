import React from 'react';
import {Link} from 'react-router-dom'


class Login extends React.Component{
render() {
    return (
      <div className="login-component">
        
        <p>this is login page</p>
        <Link to="/">
          <button>Home page</button></Link>
      </div>
    );
}
}
export default Login;