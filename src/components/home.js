import React, { Component } from 'react';
import c_1 from '../images/c_1.jpg';
import c_2 from '../images/c_2.jpg';
import c_3 from '../images/c_3.jpg';
import c_5 from '../images/c_5.jpeg';
import c_6 from '../images/c_6.jpeg';
import c_7 from '../images/c_7.jpeg';
import { Link } from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div className='body'>
            <section className='intro'>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active indicators" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='indicators' aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className='indicators' aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active" style={{backgroundImage: `url(${c_5})`}}> 
               <div className='container'>
                 <h3 className='carousel-title'>
                    Creating Services
                 </h3>
                 <h1 className='carousel-header'>
                     Across Kenya
                 </h1>
                 <p className='carousel-p'>Connect with your customers anywhere in the world with Pepea SMS. Engage and interact with them via Bulk SMS, SMS Gat</p>
                 <Link to='/signup'><button className='carousel-btn btn btn-danger'>Get started</button></Link>
               </div>
            </div>
            <div className="carousel-item" style={{backgroundImage: `url(${c_6})`}}>
                 <div className='container'>
                 <div className='container'>
                 <h3 className='carousel-title'>
                    Creating Services
                 </h3>
                 <h1 className='carousel-header'>
                     Across Kenya
                 </h1>
                 <p className='carousel-p'>Connect with your customers anywhere in the world with Pepea SMS. Engage and interact with them via Bulk SMS, SMS Gat</p>
                 <Link to='/signup'><button className='carousel-btn btn btn-danger'>Get started</button></Link>
               </div>
               </div>
            </div>
            <div className="carousel-item" style={{backgroundImage: `url(${c_7})`}}>
            <div className='container'>
            <div className='container'>
                 <h3 className='carousel-title'>
                    Creating Services
                 </h3>
                 <h1 className='carousel-header'>
                     Across Kenya
                 </h1>
                 <p className='carousel-p'>Connect with your customers anywhere in the world with Pepea SMS. Engage and interact with them via Bulk SMS, SMS Gat </p>
                 <Link to='/signup'><button className='carousel-btn btn btn-danger'>Get started</button></Link>
               </div>
                   </div>
            </div>
            </div>
            </div>
            </section>
            <section className='about'>
             <div className='container'>
                 <div className='row'>
                     <div className='col-md-6 cols'>
                     <div className='row'>
                     <div className='col-md-6'>
                         <div className='card bg-primary about-cards'>
                             <div className='card inner-cards bg-light'>
                              <i className='fa fa-lightbulb-o' style={{color: '#c08ef3'}}></i>
                              <h5>Service request</h5>
                              <p>
                                  Make request for laundry services from anywhere by the tap of a button with instant replies and readily available clients.
                              </p>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-6 card_t'>
                         <div className='card bg-primary about-cards'>
                             <div className='card inner-cards bg-light'>
                              <i className='fa fa-pie-chart' style={{color: '#66E9AF'}}></i>
                              <h5>Market your services</h5>
                              <p>
                                 Advertise your service company to clients using the system. Get requests for your service from clients who view your profile. Improve your network.
                             </p>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-6 card_c'>
                         <div className='card bg-primary about-cards'>
                             <div className='card inner-cards bg-light'>
                             <i className='fa fa-star' style={{color: 'orange'}}></i>
                              <h5>Rate service</h5>
                              <p>Return feedback and also rate the services offered by the clients. You can also leave a detailed review of the expereince using the system. Effecient or does it need upgrades.</p>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-6 card_t'>
                         <div className='card bg-primary about-cards'>
                         <div className='card inner-cards bg-light'>
                         <i className='fa fa-bar-chart' style={{color: '#838B83'}}></i>
                              <h5>Manage your brand</h5>
                              <p>Manage service requests made to your company. Manage orders and clients. Schedule client services. Generate weekly, monthly, yearly reports.</p>
                             </div> 
                         </div>
                         </div>
                     </div>
                     </div><br/>
                     <div className='col-md-6 cols'>
                         <div className='about-info'>
                           <div className='about-info-content'>
                               <h1>Laundry services</h1>
                               <p>
                               Connect with your customers anywhere in the world with Pepea SMS. Engage and interact with them via Bulk SMS, SMS Gateway and MMS Broadcast. Simply create an account, upload your contacts and start sending and receiving messages in just a few minutes.
                               </p>
                               <div className='row'>
                                   <div className='col-md-5'>
                                   <i className='fa fa-check'></i> Connect to the client of <br/>
                                    <i className='fa fa-check'></i> Connect to the client<br/>
                                    <i className='fa fa-check'></i> Connect to the client<br/>
                                    <i className='fa fa-check'></i> Connect to the client s<br/>
                                   </div>
                                   <div className='col-md-6'>
                                   <i className='fa fa-check'></i> Connect to the client <br/>
                                    <i className='fa fa-check'></i> Connect to the clien<br/>
                                    <i className='fa fa-check'></i> Connect to the client<br/>
                                    <i className='fa fa-check'></i> Connect to the client<br/>
                                   </div>
                               </div>
                               <button className='btn btn-danger btn-lg read-more-btn'>Read More</button>
                           </div>
                         </div>
                     </div>
                 </div>
             </div><br/>
            </section>
            <section className='services'>
             <div className='container'>
                 <div className='row'>
                     <div className='col-md-12 services-col'>
                         <div className='card services-card'>
                             <center>
                                 <h3 className='services-title'>OUR SERVICES</h3>
                             </center>
                         </div>
                     </div>
                 </div>
             </div>
            </section>
             </div>
        )
    }
}

export default Home;