import React, { Component } from 'react';
import '../signin_up.css';
import rocket from '../images/rocket.svg';
import desk from '../images/desk.svg';
import axios from 'axios';

class Signin extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            n_email: '',
            n_password: '',
        }
    }

    handlerSignin = (event) => {
          this.setState({
            [event.target.name]: event.target.value,
          })
    }
    
    handlerSubmitsignin = (event) => {
        if(this.state.email === ""){
            alert("Email cannot be empty!!");
        }
        if(this.state.password === ""){
            alert("Password cannot be empty!!");
        }
        if(this.state.email !== null  && !this.state.password !== null){
            
            axios.post(`http://localhost:4200/api/users/login`, this.state)
            .then(response => {
                console.log(response.data);
            })
            .catch(error =>{
                console.log(console.error());
            })
        }
    }

    handlerRegister = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        })
   }

    handlerSubmitregister = (event) => {
        if(this.state.n_email === ""){
            alert("Email cannot be empty!!");
        }
        if(this.state.n_password === ""){
            alert("Password cannot be empty!!");
        }
        if(this.state.n_email !== null  && !this.state.n_password !== null){
            event.preventDefault();
            axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error =>{
                console.log(console.error());
            })
        }
    }

    change(){
        const sign_in_btn =document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".sign-in-up");
        
        sign_up_btn.addEventListener("click", () => {
          container.classList.add("sign-up-mode");
        });
        
        sign_in_btn.addEventListener("click", () => {
          container.classList.remove("sign-up-mode");
        });
    }

    render(){
        return(
            <div className="container-fluid sign-in-up">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" name='email' value={this.state.email} onChange={this.handlerSignin}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handlerSignin}/>
            </div>
            <input type="submit" value="Login" className="btn solid sign-in-btn" onClick={() => this.handlerSubmitsignin()}/>
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
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" name='n_email' value={this.state.n_email} onChange={this.handlerRegister}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="Password" name='n_password' value={this.state.n_password} onChange={this.handlerRegister}/>
            </div>
            <input type="submit" className="btn" value="Sign up" onClick={() => this.handlerSubmitregister()}/>
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
            <button className="btn transparent" id="sign-up-btn" onClick={() => this.change()}>
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
            <button className="btn transparent" id="sign-in-btn" onClick={() => this.change()}>
              Sign in
            </button>
          </div>
          <img src={desk} className="image" alt="" />
        </div>
      </div>
    </div>

        )
    }
}

export default Signin;