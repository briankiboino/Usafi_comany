import React, { Component } from 'react';
import Navigation from '../components/nav';
import Footer from '../components/footer';
import Totop from '../components/to_top';
import c_5 from '../images/c_6.jpeg';
import {Link} from 'react-router-dom';

class Contact extends Component {
    render(){
        return(
            <div>
            <section className='contact-section'>
            <div className='container-fluid contact-container'>
                <div className='contact-intro'>
                <Navigation />
                <div className='container contact-header'>
                    <h1>Contact Us</h1><br/>
                    <p style={{ color: '#FF8247' }}><i className='fa fa-home' style={{ color: '#000', marginRight: '10px' }}></i><Link to='/' style={{ textDecoration: 'none', color: '#000', marginRight: '10px' }}>Home</Link><i className='fa fa-chevron-right' style={{ color: '#000', fontWeight: '600' }}></i> Contact us</p>
                </div>
                </div>
            </div>
            </section>
            <section>
            <div className='container contact-content'>
                    <div className='row'>
                        <div className='col-md-7 contact-form'>
                            <p style={{ color: '#FF8247' }}>Get in touch</p>
                            <h2>Contact With US</h2>
                            <form action="#" className="sign-in-form">
                                <div className='row'>
                                    <div className='col-md-6'>
                                    <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="First Name" name='fName'/>
                                    </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Last Name" name='lName'/>
                                    </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                    <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="text" placeholder="Email Address" name='email'/>
                                    </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div className="input-field">
                                    <i className="fas fa-phone"></i>
                                    <input type="number" placeholder="Phone" name='phone'/>
                                    </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 textarea'>
                                    <textarea placeholder='Message' name='message'></textarea>
                                    </div>
                                </div>
                                <div className='row'>
                                   <button className='btn send-btn'>Send</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-5 map-col'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.6117829193833!2d36.8660375!3d-1.2331583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e03451b9a97da32!2sCedar%20Court%20Garden%20Estate!5e0!3m2!1sen!2ske!4v1613652201705!5m2!1sen!2ske" width="100%" height="100%" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
                <div className='conatainer-fluid contact-extra'>
                    <div className='container absolute transparent'>
                        
                    </div>
                </div>
                <div className='contact-footer'>
                    <Totop />
                    <Footer />
                </div>
            </section>
            </div>
        )
    }
}

export default Contact;