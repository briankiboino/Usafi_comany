import React, { Component } from 'react';
import { Link } from 'react-router-dom';
    
class Footer extends Component{
   render(){
       return(
           <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                       <h4 className='footer-logo'>Usafi</h4>
                       <p className='starter'>
                           Welcome to Usafi.Connect with your customers anywhere in the world with Pepea SMS. Engage and interact with them via Bulk SMS, SMS Gateway and MMS Broadcast. Simply create an account, upload your contacts and start sending and receiving messages in just a few minutes.
                       </p>
                    </div>
                    <div className='col-md-4'>
                        <h4>Quick links</h4>
                        <i className='fa fa-chevron-right starter'></i> <Link to='/' style={{ textDecoration: 'none', color: '#E3E3E3' }}>Home</Link>
                        <hr></hr>
                        <i className='fa fa-chevron-right'></i> <Link to='/contact' style={{ textDecoration: 'none', color: '#E3E3E3' }}>Contact Us</Link>
                        <hr></hr>
                        <i className='fa fa-chevron-right'></i> <Link to='/signin' style={{ textDecoration: 'none', color: '#E3E3E3' }}>Sign in</Link>
                        <hr></hr>
                        <i className='fa fa-chevron-right'></i> <Link to='/signup' style={{ textDecoration: 'none', color: '#E3E3E3' }}>Sign up</Link>
                        <hr></hr>
                    </div>
                    <div className='col-md-4'>
                        <h4>Contact</h4>
                        <p className='starter'>Cedar park, Off Thika Road</p>
                        <p>Nairobi, Kenya</p>
                        <p>Mobile: +254726159508</p>
                        <p>Email: info@usafi.africa</p>
                        <div class="social-links">
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='container'>
                    <div className='copyright'>
                    <font color="white">&copy;</font> Copyright <strong>Usafi</strong>. All Rights Reserved
                    </div>
                    </div>
                </div>
            </div>
           </footer>
       )
   }
}

export default Footer;