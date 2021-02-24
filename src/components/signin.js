import React, { useState } from 'react';
import '../signin_up.css';
import rocket from '../images/rocket.svg';
import desk from '../images/desk.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';

function Signin(){

  //Dispatch function
  const dispatch = useDispatch();
  //Function to initilise reducers during sign in
  const activateReducers = () => {
    return {
      type: 'SIGN_IN'
    };
  }

  //Format for email used in email validation
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //Handling the sliding animation
  function changeTologin(){
    setemailError('');
    setpasswordError('');
    const container = document.querySelector(".sign-in-up");
    container.classList.add("sign-up-mode");
  }
  function changeToregister(){
    setnameError('')
    setnemailError('');
    setnpasswordError('');
    const container = document.querySelector(".sign-in-up");
    container.classList.remove("sign-up-mode");
  }

  //Initialising function that facilitates routing
  let history = useHistory();

  //The states which store the user input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [n_name, setnName] = useState('');
  const [n_email, setnEmail] = useState('');
  const [n_password, setnPassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [nameError, setnameError] = useState('');
  const [n_emailError, setnemailError] = useState('');
  const [n_passwordError, setnpasswordError] = useState('');

    /*Handling signing in form*/
    const handleSignin = (event) => {
        event.preventDefault();
        const u_email = email;
        const u_password = password;
        var data = {
          email: u_email,
          password: u_password
        }
       
        //Form is validated before data is sent to the api
        if(u_email === '' && u_password === ''){
          setemailError('Email is required!');
          setpasswordError('Password is required!');
        }
        else if(u_email === ''){
           setemailError('Email is required!');
        }
        else if(!u_email.match(mailformat)){
           setemailError('Enter a valid email format!');
        }
        else if(u_password === ''){
           setpasswordError('Password is required!');
        }
        else if(u_password.length < 3){
          setpasswordError('Pass should have a minimum of 3 characters!');
        }
        else{
          setemailError('');
          setpasswordError('');
          axios.post('http://localhost:3001/api/users/login', data)
          .then(function(res) {
            let feedback = res.data;
            //On sucess feedback
            if(feedback.success){
                //Set the token and email to the session storage
                sessionStorage.setItem('name', feedback.name);
                sessionStorage.setItem('token', feedback.token);
                sessionStorage.setItem('email', feedback.email);
                //Activate the reducers
                dispatch(activateReducers());
                //Navigate to the user dashboard
                history.push('/dashboard')
            }
            //On failure
            else{
              var snackBar = document.getElementById("snackbar");
              snackBar.innerHTML = feedback.message;
              snackBar.className = "show";
              setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
            }
          })
          .catch(error =>{
            var snackBar = document.getElementById("snackbar");
            snackBar.innerHTML = error;
            snackBar.className = "show";
            setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
          })  
        } 
    }

    /*Handling registration form*/
    const handleRegister = (event) => {
      event.preventDefault();
      const u_name = n_name;
      const u_email = n_email;
      const u_password = n_password;
      var data = {
        name: u_name,
        email: u_email,
        password: u_password
      }
     
      //Form is validated before data is sent to the api
      if(u_name === '' && u_email === '' && u_password === ''){
        setnameError('Full name is required!')
        setnemailError('Email is required!');
        setnpasswordError('Password is required!');
      }
      else if(u_name === ''){
        setnameError('Full name is required!')
      }
      else if(u_email === ''){
        setnemailError('Email is required!');
      }
      else if(!u_email.match(mailformat)){
        setnemailError('Enter a valid email format!');
      }
      else if(u_password === ''){
         setnpasswordError('Password is required!');
      }
      else if(u_password.length < 3){
        setnpasswordError('Pass should have a minimum of 3 characters!');
      }
      else{
        setnameError('')
        setnemailError('');
        setnpasswordError('');
        axios.post('http://localhost:3001/api/users/createUser', data)
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
          var snackBar = document.getElementById("snackbar");
          snackBar.innerHTML = error;
          snackBar.className = "show";
          setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
        })  
      } 
  
  }
  
        return(
            <div className="container-fluid sign-in-up">
      <div className="forms-container">
        <div className="signin-signup">
          <form key={1} action="#" className="sign-in-form" onSubmit={(event) => handleSignin(event)}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" name='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <p className='error'>{emailError}</p>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <p className='error'>{passwordError}</p>
            <button type="submit" className="btn solid">Login <i className="fa fa-spinner fa-spin" id='loading'></i> </button>
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
          <form key={2} action="#" className="sign-up-form" onSubmit={(event) => handleRegister(event)}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" name='name' value={n_name} onChange={(event) => setnName(event.target.value)}/>
            </div>
            <p className='error'>{nameError}</p>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" name='n_email' value={n_email} onChange={(event) => setnEmail(event.target.value)}/>
            </div>
            <p className='error'>{n_emailError}</p>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='n_password' value={n_password} onChange={(event) => setnPassword(event.target.value)}/>
            </div>
            <p className='error'>{n_passwordError}</p>
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
            <button className="btn transparent" id="sign-up-btn" onClick={() => changeTologin()}>
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
            <button className="btn transparent" id="sign-in-btn" onClick={() => changeToregister()}>
              Sign in
            </button>
          </div>
          <img src={desk} className="image" alt="" />
        </div>
      </div>
      <div id="snackbar"></div>
    </div>

        )
    }

export default Signin;