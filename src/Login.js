import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import Field from './Field.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyData: {
        'name': '',
        'email': '',
        'location': '',
        'size': '',
        'phone': '',
      }
    }
  }

  handleChange = (sender, event) => {
    const data = { ...this.state.companyData };
    data[sender] = event.target.value;
    this.setState({companyData: data});
  }

  render() {
    const { name, email, location, size, phone } = this.state.companyData;
    const formIsComplete = name.length && email.length && location.length && size.length && phone.length;
    return (
      <div className="container login">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h1 className="header">Moodswing</h1>

            <div className="form-container">
              <Field value={name} placeholder={"Company Name"} onChange={(e) => this.handleChange('name', e)} />
              <Field value={email} placeholder={"Email Address"} onChange={(e) => this.handleChange('email', e)} />
              <Field value={location} placeholder={"Location"} onChange={(e) => this.handleChange('location', e)} />
              <Field value={size} placeholder={"Number of employees"} onChange={(e) => this.handleChange('size', e)} />
              <Field value={phone} placeholder={"Phone Number"} onChange={(e) => this.handleChange('phone', e)} />
            </div>

            <button
              disabled={!formIsComplete}
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => this.props.history.push('/')}>
              Login
            </button>

          </div>
        </div>
      </div>
    )
  }
}
export default Login;
