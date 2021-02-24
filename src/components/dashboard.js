import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { keys } from '@material-ui/core/styles/createBreakpoints';

function Dashboard(){

    //Initialise history which handles routing
    const history = useHistory();

    //Function to initilise reducers during sign in
    const dispatch = useDispatch();

    //Varibales storing user's data
    const name = useSelector(state => state.name);
    const email = useSelector(state => state.email);
    const isLoggedin = useSelector(state => state.isLoggedin);
    
    //State for current section
    const [section, setSection] = useState('General details')
    const updateSectiontitle = (key) =>{
        console.log(key);
       switch (key) {
           case 1:
               setSection('General details');
               break;

           case 2:
           setSection('Address');
           break;

           case 3:
           setSection('Date and time');
           break;

           case 4:
           setSection('Price and payment');
           break;
            
           default:
            setSection('General details');
               break;
       }
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
               <div className="sidebar">
                <div className='sidebar-links'>
                <div className='dashboard-title'>
                <ul className="navbar-nav dashboard-logo">
                    <h5>Usafi</h5>
                </ul>
                <hr style={{ color: '#FFF' }}/>
                </div>
                <p className='order-header'>CREATE ORDER</p>
                <a onClick={() => updateSectiontitle(1)} className='active'><i className='fa fa-info-circle'></i> General details</a>
                <a onClick={() => updateSectiontitle(2)}><i className='fa fa-user-o'></i> Address</a>
                <a onClick={() => updateSectiontitle(3)}><i className='fa fa-calendar'></i> Date and time</a>
                <a onClick={() => updateSectiontitle(4)}><i className='fa fa-money-bill-wave'></i> Price and payment</a>
                <Link to='/signin' onClick={() => dispatch(signOut())}><i className='fa fa-user-circle'></i> Sign out</Link>
                </div>
                </div>

                <div className="dashboard-content">
                <div className='nav-header'>
                    <p><i className='fa fa-home'></i> </p><p>Dashboard</p> <p><i className='fa fa-chevron-right'></i></p> <p className='current-section-title'>{section}</p>
                    </div>
                <div className='order-content'>
                    <div className='row'>
                        <div className='col-md-8 form-col'>
                          
                        </div>
                        <div className='col-md-4 contractors-col'></div>
                    </div>
                </div>
                </div>
                <div id="snackbar"></div>
        </div>
    )
}

export default Dashboard;