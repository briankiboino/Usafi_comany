import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import sidebar from '../images/sidebar-4.jpg';
import user_icon from '../images/user.jpeg';
import Contact from './contact';

function Dashboard(){

    //Initialise history which handles routing
    const history = useHistory();

    //Function to initilise reducers during sign in
    const dispatch = useDispatch();

     //States used
    const [section, setSection] = useState('General details')
    const [user, setUser] = useState('');
    const [contractors, setContractors] = useState([]);
    const [contractorselected, setContractor] = useState('');

    //Access user's data from the app store
    const userProfile = useSelector(state => state.user);
    Promise.resolve(userProfile).then(function(userDetails) {
      setUser(userDetails);
     });
    //Get contractor details from the store
    const allContractors = useSelector(state => state.contractors)
    Promise.resolve(allContractors).then(function(contractors) {
      setContractors(contractors);
     });
    const isLoggedin = useSelector(state => state.isLoggedin);

    //Toggler icon
    function showMenu(){
      const toggleBtn = document.querySelector('.toggler');
      const nav = document.querySelector('.nav');
      nav.classList.toggle('show-menu');
      // change icon
      toggleBtn.classList.toggle('bx-x');
  }

    //Link active
    const linkColor = document.querySelectorAll('.nav__link')

    function colorLink(){
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    //Handling order form
    const selectContractor = (contractor_id, contractor_name) =>{
        var snackBar = document.getElementById("success-snackbar");
        var message = document.getElementById("snackbar-message");
        snackBar.className = "show";
        setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
        message.innerHTML = 'You have selected ' + contractor_name;
        setContractor(contractor_id);
    }
    //Sign out 
    const signOut = () =>{
        history.push("/signin");
        return {
          type: 'SIGN_OUT'
        };
    }
    return(
        <div className='user-dashboard'>  
        <header className="header">
            <div className="header__container">
                <img src={sidebar} alt="" className="header__img"/>

                <a href="#" className="header__logo">Usafi</a>
                <div className="header__toggle">
                    <i className='bx bx-menu toggler' onClick={() => showMenu()} id="header-toggle"></i>
                </div>
            </div>
        </header> 
               <div className="nav" id="navbar">
            <nav className="nav__container">
                <div>
                    <a href="#" className="nav__link nav__logo">
                        <i className='bx bxs-disc nav__icon' ></i>
                        <span className="nav__logo-name">My Account</span>
                    </a>
                    <div className="nav__list">
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Profile</h3>
                            <a href="#" className="nav__link active">
                                <i className='bx bx-home nav__icon' ></i>
                                <span className="nav__name">Home</span>
                            </a>    
                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i className='bx bx-user nav__icon' ></i>
                                    <span className="nav__name">Profile</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </a>
                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__dropdown-item">Profile</a>
                                        <a href="#" className="nav__dropdown-item">Password</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav__items">
                            <h3 className="nav__subtitle">CREATE ORDER</h3>
                                <a href="#" className="nav__link">
                                    <i className='bx bx-info-square nav__icon' ></i>
                                    <span className="nav__name">General details</span>
                                </a>
                            <a href="#" className="nav__link">
                                <i className='bx bx-user-circle nav__icon' ></i>
                                <span className="nav__name">Address</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className='bx bx-calendar nav__icon' ></i>
                                <span className="nav__name">Date and time</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className='bx bx-money nav__icon' ></i>
                                <span className="nav__name">Price and payment</span>
                            </a>
                        </div>
                    </div>
                </div>
                <a onClick={() => dispatch(signOut())}  className="nav__link nav__logout">
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span  className="nav__name">Log Out</span>
                </a>
            </nav>
        </div>
        <main className='dashboard-content'>
            <section>
               <div className='row'>
                 <div className='col-md-9 order-content'>
                  <form className='order-form'>
                    <h4>General details</h4>
                    <p>What's to be done? (briefly)</p>
                    <hr style={{ color: 'grey' }} />
                    <p>Describe your order in detail</p>
                    <textarea placeholder='Description' className='description-textarea'></textarea>
                  </form>
                 </div>
                 <div className='col-md-3 contractors-section'>
                   <h5 className='contractors-title'>Select contrcator of your choice</h5>
                  {contractors.map(contractor => (
                    <div key={contractor.contractor_id} className='contractor-card' onClick={ () => selectContractor(contractor.contractor_id, contractor.name)}>
                      <div className='contractor-icon'>
                      <img src={user_icon}/>
                      </div>
                      <div className='contractor-info'>
                      <p className='contractor-name'>{contractor.name}</p>
                      <p className='contractor-location'>{contractor.age} years | {contractor.location}</p>
                      <p className='contractor-review'><i className='fa fa-star'></i> ({contractor.reviews} reviews)</p>
                      </div> 
                      <div className='action-icon'>
                      {contractor.validation === 1 ? <p className='contractor-validation-status' title='validated'><i className='fa fa-check-circle'></i></p> : ''}
                      </div>               
                    </div>
                  ))}
                 </div>
                 <hr style={{ color: 'grey' }} />
                 
                 <div className='action-btns'><button className='btn bg-danger cancel-btn'>Cancel</button><button className='btn next-step-btn'>Next step</button></div>
               </div>
            </section>
        </main>
        <div id="success-snackbar"><i className='fa fa-check-circle'></i> <p id='snackbar-message'></p></div>
        </div>
    )
}

export default Dashboard