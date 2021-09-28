import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './UserStore';


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false
    }
  }

  async componentDidMount() {
    try {
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }

    catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {

    try {

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }

    catch (e) {
      console.log(e)
    }
  }
  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val
    })
  }

  resetForm() {
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
  }

  async doLogin() {

    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }

    this.setState({
      buttonDisabled: true
    })

    try {
      let res = await fetch('/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg);
      }
    }

    catch (e) {
      console.log(e);
      this.resetForm();
    }
  }


  render() {
    return (
      <div className="app">
        <div className='container'>
          <div className="loginForm">
            Log in
            <InputField
              type='text'
              placeholder='Username'
              value={this.state.username ? this.state.username : ''}
              onChange={(val) => this.setInputValue('username', val)}
            />

            <InputField
              type='password'
              placeholder='Password'
              value={this.state.password ? this.state.password : ''}
              onChange={(val) => this.setInputValue('password', val)}
            />

            <SubmitButton
              text='Login'
              disabled={this.state.buttonDisabled}
              onClick={() => this.doLogin()}
            />
          </div>
        </div>
      </div>
    );
  }
}
// }


export default LoginForm;