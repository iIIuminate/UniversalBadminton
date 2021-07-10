import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  render() {
    
    return (
      <div className="root-container">

      </div>
    );
  }
}

class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">
          <div className="input-group">
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render (
  <App />, document.getElementById("root"));


export default App
