import React from 'react';
import ReactDOM, { render } from 'react-dom'
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
    
    <div className="box-container">
      {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}
    </div>

    return (
      <div className="root-container">
        <LoginBox></LoginBox>
        <RegisterBox></RegisterBox>
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
          <button
            type="button"
            className="login-button"
            onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
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
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"/>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          <button
            type="button"
            className="login-button"
            onClick={this
              .submitRegister
              .bind(this)}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

showValidationErr(elm, msg) ;{
  this.setState((prevState) => ({
    errors: [
      ...prevState.errors, {
        elm,
        msg
      }
    ]
  }));
}

clearValidationErr(elm) ;{
  this.setState((prevState) => {
    let newArr = [];
    for (let err of prevState.errors) {
      if (elm != err.elm) {
        newArr.push(err);
      }
    }
    return {errors: newArr}
  });
}

onUsernameChange(e) ;{
  this.setState({username: e.target.value});
  this.clearValidationErr("username");
}

onEmailChange(e) ;{
  this.setState({email: e.target.value});
  this.clearValidationErr("email");
}

onPasswordChange(e) ;{
  this.setState({password: e.target.value});
  this.clearValidationErr("password");
}

ReactDOM.render (
  <App />, document.getElementById("root"));


export default App
