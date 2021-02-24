import React from 'react';
import styles from './Form.module.css';

class Form extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      agree: false
    }
    this.firstNameRef = React.createRef();
    this.agreeRef = React.createRef();
  }
  
  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  toggleAgree = () => {
    this.setState({agree: !this.state.agree})
  }
  validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(this.state.email))) {
      console.log('email is not valid');
    }
  }
  submitForm = () => {
    const {email} = this.state;
    if (email.length === 0) {
      alert('email is empty');
    } else {
      alert('form was been send');
      this.setState({email: ''})
      this.setState({agree: false})
    }
  }
  componentDidMount () {
    this.firstNameRef.current.focus();
  }
  
  render () {
    const {email, agree} = this.state;
    return (
      <div className={styles.form}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={this.changeHandler}
          onBlur={this.validateEmail}
          ref={this.firstNameRef}
        />
        <label>
          <input onChange={this.toggleAgree} type="checkbox" name="agree" checked={agree}/>
          <span>I agree with terms and conditions</span>
        </label>
        <input
          type="submit"
          value="Send"
          onClick={this.submitForm}
          disabled={agree ? '' : 'disabled'}
          ref={this.agreeRef}
        />
      </div>
    );
  }
}
export default Form;
