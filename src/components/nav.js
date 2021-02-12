import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <div className='container'>
            <nav className='navbar navbar-expand-lg absolute transparent'>
                <div className="container-fluid">
                <Link to='/' style={{ textDecoration: 'none'}}><h1 className="logo mr-auto" href="#">Usafi</h1></Link>
                <button className="navbar-toggler navbar-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item link">
                            <Link to='/' style={{ textDecoration: 'none' }}><a className='nav-links fadeInAndOut'>Home</a></Link>
                        </li>
                        <li class="nav-item link">
                            <Link to='/' style={{ textDecoration: 'none' }}><a className='nav-links fadeInAndOut'>Features</a></Link>
                        </li>
                        <li class="nav-item link">
                            <Link to='/' style={{ textDecoration: 'none' }}><a className='nav-links fadeInAndOut'>Pricing</a></Link>
                        </li>
                        <li class="nav-item link">
                            <Link to='/contact' style={{ textDecoration: 'none' }}><a className='nav-links fadeInAndOut'>Contact Us</a></Link>
                        </li>
                        <li class="nav-item nav-item-btn">
                            <Link to='/signin'><a><button className='btn btn-primary btn-sm login-btn fadeInDown'>Sign in</button></a></Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/signup'><a><button className='btn btn-outline-primary btn-sm btn-light register-btn fadeInUp'>Get Started</button></a></Link>
                        </li>
                    </ul>
                    </div>
                   </div>
                </nav>
                </div>
        )
    }
}

export default Navigation;