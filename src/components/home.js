import React, { Component } from 'react';
import c_1 from '../images/c_1.jpg';
import c_2 from '../images/c_2.jpg';
import c_3 from '../images/c_3.jpg';
import c_5 from '../images/c_5.jpeg';
import c_6 from '../images/c_6.jpeg';
import c_7 from '../images/c_7.jpeg';
import { Link } from "react-router-dom";

class Home extends Component{

    constructor(){
        super()
        this.state = {
            title: 'CONNECT TO VARIOUS CLIENTS',
            selection_intro: 'Usafi helps you connect to clients and as a client you can connect to other clients and job providers'
        };
    }

    setContent(pos){
             if(pos === 1){
                this.setState({
                    title: 'CONNECT TO VARIOUS CLIENTS',
                    selection_intro: 'Usafi helps you connect to clients and as a client you can connect to other clients and job providers.'
               });
             }
             else if(pos === 2){
                this.setState({
                    title: "MARKET YOUR COMPANY AND IT'S SERVICES",
                    selection_intro: "Usafi helps in marketing a company's services to all the users of the system which includes potential clients to the services. "
               });
             }
             else if(pos === 3){
                this.setState({
                    title: 'MANAGE YOUR CLIENTS AND SERVICES',
                    selection_intro: 'Usafi helps you manage your company, clients and services. You can also generate reports of your service company performance.'
               });
             }
             else if(pos === 4){
                this.setState({
                    title: 'ORGANIZE AND SCHEDULE SERVICES',
                    selection_intro: 'With USafi comes with a scheduling tool which helps its users schedule events for specific events and for respective clients.'
               });
             }
             else{
                this.setState({
                    title: "GENERATE REPORT OF COMPANY'S PERFORMANCE",
                    selection_intro: "With usafi you can keep track of your companies performance and generate company's reports."
               });
             }
      
    }

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
                    Powering connectivity
                 </h3>
                 <h1 className='carousel-header'>
                     Engage
                 </h1>
                 <p className='carousel-p'>Connect with your clients anywhere in the world with Usafi. Engage and interact with them via messages and requests. Get more clients by interacting with them via our system.</p>
                 <Link to='/signin'><button className='carousel-btn btn btn-danger'>Get started</button></Link>
               </div>
            </div>
            <div className="carousel-item" style={{backgroundImage: `url(${c_6})`}}>
                 <div className='container'>
                 <div className='container'>
                 <h3 className='carousel-title'>
                    Empowering innovation
                 </h3>
                 <h1 className='carousel-header'>
                     Innovate
                 </h1>
                 <p className='carousel-p'>Engage, interact and share ideas. Connect with other companies and share marketing manouvers strategies. Share insight on compsny's point of successes. Teach to inspire.</p>
                 <Link to='/signin'><button className='carousel-btn btn btn-danger'>Get started</button></Link>
               </div>
               </div>
            </div>
            <div className="carousel-item" style={{backgroundImage: `url(${c_7})`}}>
            <div className='container'>
            <div className='container'>
                 <h3 className='carousel-title'>
                    Unite
                 </h3>
                 <h1 className='carousel-header'>
                     Across Africa
                 </h1>
                 <p className='carousel-p'>Connect with your customers across Africa with Usafi. Receive unlimted services from across Africa with the tap of a button. Get clients from all over africa.</p>
                 <Link to='/signup'><button className='carousel-btn btn-lg btn btn-danger'>Get started</button></Link>
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
                             <div className='card inner-cards'>
                              <i className='fa fa-lightbulb-o' style={{color: '#C08EF3'}}></i>
                              <h5>Service request</h5>
                              <p>
                                  Make request for laundry services from anywhere by the tap of a button with instant replies and readily available clients.
                              </p>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-6 card_t'>
                         <div className='card bg-primary about-cards'>
                             <div className='card inner-cards'>
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
                             <div className='card inner-cards'>
                             <i className='fa fa-star' style={{color: 'orange'}}></i>
                              <h5>Rate service</h5>
                              <p>Return feedback and also rate the services offered by the clients. You can also leave a detailed review of the expereince using the system. Effecient or does it need upgrades.</p>
                             </div>
                         </div>
                     </div>
                     <div className='col-md-6 card_t'>
                         <div className='card bg-primary about-cards'>
                         <div className='card inner-cards'>
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
                               Connect with your client anywhere across Kenya with Usafi. Engage and interact with them via requests and Broadcast. Simply create an account, upload your details and start sending service requests and receive replies in just a few minutes.
                               </p>
                               <div className='row'>
                                   <div className='col-md-5'>
                                   <i className='fa fa-check'></i>Real time requests<br/>
                                    <i className='fa fa-check'></i>Live support<br/>
                                    <i className='fa fa-check'></i>Scheduling<br/>
                                    <i className='fa fa-check'></i>Get clients<br/>
                                    <i className='fa fa-check'></i>Interaction clients<br/>
                                   </div>
                                   <div className='col-md-6'>
                                   <i className='fa fa-check'></i>Business boost<br/>
                                    <i className='fa fa-check'></i>Diversity<br/>
                                    <i className='fa fa-check'></i>Awareness<br/>
                                    <i className='fa fa-check'></i>Messaging<br/>
                                   </div>
                               </div>
                               <button className='btn btn-lg read-more-btn'>Read More</button>
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
                             <div className='row'>
                                <div className='col-md-4 selections-col'>
                                    <div className='selections'>
                                    <p onClick={() => this.setContent(1)}><i className='fa fa-comments' style={{ color: '#104E8B' }}></i>Networking</p>
                                    <p onClick={() => this.setContent(2)}><i className='fa fa-bullhorn' style={{ color: '#104E8B' }}></i>Marketing</p>
                                    <p onClick={() => this.setContent(3)}><i className='fa fa-user' style={{ color: '#104E8B' }}></i>Management</p>
                                    <p onClick={() => this.setContent(4)}><i className='fa fa-users' style={{ color: '#104E8B' }}></i>Organization</p>
                                    <p onClick={() => this.setContent(5)}><i className='fa fa-pie-chart' style={{ color: '#104E8B' }}></i>Analytics</p>
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                <div className='selections-content'>
                                    <h5>{this.state.title}</h5>
                                    <p>{this.state.selection_intro}</p>
                                    <div className='row'>
                                    <div className='col-md-5'>
                                    <i className='fa fa-check'></i> Boost services<br/>
                                    <i className='fa fa-check'></i> Market company<br/>
                                    <i className='fa fa-check'></i> Create connection<br/>
                                    <i className='fa fa-check'></i> Get clients<br/>
                                   </div>
                                   <div className='col-md-6'>
                                   <i className='fa fa-check'></i> Organize services<br/>
                                    <i className='fa fa-check'></i> Schedule events<br/>
                                    <i className='fa fa-check'></i> Organize clients<br/>
                                   </div>
                               </div>
                                    <button className='btn btn-lg read-more-btn'>Read More</button>
                                </div>
                                </div>
                             </div>
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