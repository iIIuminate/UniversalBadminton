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

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render() {
    
    <div className="box-container">
      {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}
    </div>

    return (
      <div className="root-container">
          <div className="box-controller">
            <div className={"controller" + (this.state.isLoginOpen ? "selected-controller" : "")}
            onClick={this.showLoginBox.bind(this)}>
              Login
            </div>
            <div className={"controller" + (this.state.isRegisterOpen ? "selected-controller" : "")} 
            onClick={this.showRegisterBox.bind(this)}>
              Register
            </div>
          </div>
          <div className="box-container">
            {this.state.isLoginOpen && <LoginBox/>}
            {this.state.isRegisterOpen && <RegisterBox/>}
          </div>
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
    this.state = {username: "", email: "", password: "", errors: []};
  }

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({
      errors: [
        ...prevState.errors, {
          elm,
          msg
        }
      ]
    }));
  }

  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if(elm != err.elm) {
          newArr.push(err);
        }
      }
      return {errors: newArr};
    });
  }

  onUsernameChange(e) {
    this.setState({username: e.target.value});
    this.clearValidationErr("username");
  }

  onEmailChange(e) {
    this.setState({email: e.target.value});
    this.clearValidationErr("email");
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
    this.clearValidationErr("password");
  }

  submitRegister(e) {
    if(this.state.username == "") {
      return this.showValidationErr("username", "Username Cannot be empty!");
    } else if (this.state.email == "") {
      return this.showValidationErr("email", "Email Cannot be empty!");
    } else if (this.state.password =="") {
      return this.showValidationErr("password", "Password Cannot be empty!");
    }

  }

  render() {
    let usernameErr = null, passwordErr = null, emailErr = null;
    for(let err of this.state.errors) {
      if(err.elm == "username") {
        usernameErr = err.msg;
      } if (err.elm == "password") {
        passwordErr = err.msg;
      } if (err.elm == "email") {
        emailErr = err.msg;
      }
    }
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onUsernameChange.bind(this)}
              />
              <small className="danger-error">{usernameErr
                  ? usernameErr
                  : ""}
              </small>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={this.onEmailChange.bind(this)}
              />
              <small className="danger-error">{emailErr
                  ? emailErr
                  : ""}
              </small>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.onPasswordChange.bind(this)}
              />
              <small className="danger-error">{passwordErr
                  ? passwordErr
                  : ""}
              </small>
          <button
            type="button"
            className="login-button"
            onClick={this
              .submitRegister
              .bind(this)}>Register</button>
          </div>
        </div>
      </div>
    )
  }
}



ReactDOM.render (
  <App />, document.getElementById("root"));


export default App
