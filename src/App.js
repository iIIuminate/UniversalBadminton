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
