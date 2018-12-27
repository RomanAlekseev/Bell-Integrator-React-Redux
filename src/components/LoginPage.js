import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }
    handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     window.localStorage.setItem('rr_login', this.state.login);
     window.localStorage.setItem('rr_pass', this.state.password);
     console.log(this.state.login + ":" + this.state.password);
  }
    
    handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ login: value });
  }
    
    handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ password: value });
  }

    render () {
      return (
        <div
          className="container col-md-3 col-sm-5 col-9"
          style={{ marginTop: "27vh" }}
        >
          <h2 className="text-center mb-3">Welcome</h2>
          <form className="border px-3" onSubmit={this.handleSubmitLogin.bind(this)}>
            <div className="form-group mt-2 ">
              <label htmlFor="exampleInputEmail1">Login</label>
              <input
                onChange={this.handleInputLogin.bind(this)}
                name="login"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="login"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={this.handleInputPassword.bind(this)}
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-success col-12 mb-3">
              Submit
            </button>
          </form>
        </div>
      );
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        oraganization: store.oraganization,
    }
}

export default connect(mapStateToProps)(Login)