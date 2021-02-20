import React, { Component } from 'react';
import '../signin_up.css';
import rocket from '../images/rocket.svg';
import desk from '../images/desk.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'; 

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class Signin extends Component{
  /*Handling the animation  */
  changeTologin(){
    this.setState({
      emailError: '',
      passwordError: ''
    })
    const container = document.querySelector(".sign-in-up");
    container.classList.add("sign-up-mode");
  }
  changeToregister(){
    this.setState({
      nameError: '',
      n_emailError: '',
      n_passwordError: ''
    })
    const container = document.querySelector(".sign-in-up");
    container.classList.remove("sign-up-mode");
  }

  constructor(props){
    super(props)

    this.state = {
      
      name: '',
      email: '',
      password: '',
      n_email: '',
      n_password: '',
      nameError: '',
      emailError: '',
      passwordError: '',
      n_emailError: '',
      n_passwordError: '',
     
    }

    this.handleSigninchange = this.handleRegisterchange.bind(this);
    this.handleRegisterchange = this.handleRegisterchange.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

  }

    /*Handling change state*/
    handleSigninchange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })

    }
    handleRegisterchange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    /*Handling signing in form*/
    handleSignin(event){
        event.preventDefault();
        const u_email = this.state.email;
        const u_password = this.state.password;
        var data = {
          email: u_email,
          password: u_password
        }
       
        if(u_email === '' && u_password === ''){
          this.setState({
            emailError: 'Email is required!',
            passwordError: 'Password is required!'
          })
        }
        else if(u_email === ''){
          this.setState({
            emailError: 'Email is required!'
          })
        }
        else if(!u_email.match(mailformat)){
          this.setState({
            emailError: 'Invalid email format!'
          })
        }
        else if(u_password === ''){
          this.setState({
            passwordError: 'Password is required!'
          })
        }
        else if(u_password.length < 3){
          this.setState({
            passwordError: 'Password should have a minimum of 3 characters!'
          })
        }
        else{ 
          this.setState({
            emailError: '',
            passwordError: ''
          })
          axios.post('http://localhost:3001/api/users/login', data)
          .then(function(res) {
            let feedback = res.data;
            if(feedback.success){
                alert(feedback.message);
            }
            else{
              var snackBar = document.getElementById("snackbar");
              snackBar.innerHTML = feedback.message;
              snackBar.className = "show";
              setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 6000);
            }
          })
          .catch(error =>{
              alert(error);
          })  
        } 
    
    }
  
    /*Handling registration form*/
     handleRegister(event){
      event.preventDefault();
      const u_name = this.state.name;
      const u_email = this.state.n_email;
      const u_password = this.state.n_password;
      var data = {
        name: u_name,
        email: u_email,
        password: u_password
      }
     
      if(u_name === '' && u_email === '' && u_password === ''){
        this.setState({
          nameError: 'Full name is required!',
          n_emailError: 'Email is required!',
          n_passwordError: 'Password is required!'
        })
      }
      else if(u_name === ''){
        this.setState({
          nameError: 'Full name is required!'
        })
      }
      else if(u_name.length < 3){
        this.setState({
          nameError: 'Name should have a minimum of 3 characters!'
        })
      }
      else if(u_email === ''){
        this.setState({
          n_emailError: 'Email is required!'
        })
      }
      else if(!u_email.match(mailformat)){
        this.setState({
          n_emailError: 'Invalid email format!'
        })
      }
      else if(u_password === ''){
        this.setState({
          n_passwordError: 'Password is required!'
        })
      }
      else if(u_password.length < 3){
        this.setState({
          n_passwordError: 'Password should have a minimum of 3 characters!'
        })
      }
      else{ 
        this.setState({
          nameError: '',
          n_emailError: '',
          n_passwordError: ''
        })
          axios.post('http://localhost:3001/api/users/createUser', data)
          .then(function(res) {
            let feedback = res.data;
            if(feedback.success){
               alert(feedback.message)
            }
            else{
              var snackBar = document.getElementById("snackbar");
              snackBar.innerHTML = feedback.message;
              snackBar.className = "show";
              setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
            }
          })
          .catch(error =>{
              alert(error);   
    })
  }
    }
     render(){
        return(
            <div className="container-fluid sign-in-up">
      <div className="forms-container">
        <div className="signin-signup">
          <form key={1} action="#" className="sign-in-form" onSubmit={(event) => this.handleSignin(event)}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" name='email' value={this.state.email} onChange={(event) => this.handleSigninchange(event)}/>
            </div>
            <p className='error'>{this.state.emailError}</p>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='password' value={this.state.password} onChange={(event) => this.handleSigninchange(event)}/>
            </div>
            <p className='error'>{this.state.passwordError}</p>
            <input type="submit" value="Login" className="btn solid"/>
            <Link to='/forgot' style={{ textDecoration: 'none' }}>Forgot password?</Link>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form key={2} action="#" className="sign-up-form" onSubmit={(event) => this.handleRegister(event)}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" name='name' value={this.state.name} onChange={(event) => this.handleRegisterchange(event)}/>
            </div>
            <p className='error'>{this.state.nameError}</p>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" name='n_email' value={this.state.n_email} onChange={(event) => this.handleRegisterchange(event)}/>
            </div>
            <p className='error'>{this.state.n_emailError}</p>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='n_password' value={this.state.n_password} onChange={(event) => this.handleRegisterchange(event)}/>
            </div>
            <p className='error'>{this.state.n_passwordError}</p>
            <input type="submit" name='form' className="btn" value="Sign up"/>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Register an account with us today and start the journey!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => this.changeTologin()}>
              Sign up
            </button>
          </div>
          <img src={rocket} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Sign in to your account to see the latests services and clients in the market.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => this.changeToregister()}>
              Sign in
            </button>
          </div>
          <img src={desk} className="image" alt="" />
        </div>
      </div>
      <div id="snackbar">{this.state.feedBack}</div>
    </div>

        )
    }
  }

export default Signin;