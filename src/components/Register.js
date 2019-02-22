import React from 'react'
import { registerUser } from '../api/user';

class Register extends React.Component {
  state = {
    name: '',
    handle: '',
    email: '',
    password: '',
    avatar: '',
    bio: '',
    location: '',
    birthday: '',
  };

  onChange = e => {
      const { name, type, value } = e.target;
      const val = type === 'number' ? parseFloat(value) : value;
      this.setState({ [name]: val });
  };

  onSubmit = event => {
    event.preventDefault();
    registerUser(this.state);
  };

  render() {
    const styles = {
      
    }
    return (
      <div>
        <form onSubmit={this.onSubmit} method="post" className="register">
          {this.state.error && <div className="form-error">{this.state.error}</div>}
          <div className="form-field">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-input" onChange={this.onChange} value={this.state.name} name="name"required />
          </div>
          <div className="form-field">
            <label htmlFor="handle" className="form-label">handle</label>
            <input type="text" id="handle" className="form-input" onChange={this.onChange} value={this.state.handle} name="handle"required />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="form-label">email</label>
            <input type="email" id="password" className="form-input" onChange={this.onChange} value={this.state.email} name="email"required />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-label">Password</label>
            <input type="password" id="email" className="form-input" onChange={this.onChange} value={this.state.password} name="password"required />
          </div>

          <div className="form-field">
            <label htmlFor="avatar" className="form-label">avatar</label>
            <input type="file" id="avatar" className="form-input" onChange={this.onChange} value={this.state.avatar} name="avatar"/>
          </div>
          <label htmlFor="bio" className="form-label">Bio</label>
          <textarea className="form-field" />
          <div className="form-field">
            <label htmlFor="location" className="form-label">location</label>
            <input type="text" id="location" className="form-input" onChange={this.onChange} value={this.state.location} name="location"/>
          </div>
          <div className="form-field">
            <label htmlFor="birthday" className="form-label">Birthday</label>
            <input type="text" id="birthday" className="form-input" onChange={this.onChange} value={this.state.birthday} name="birthday"/>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    )
  }
};

export default Register;