import axios from 'axios';

var user_profile;

//Handling login and logout
const authHandler = (isLoggedIn = false, action) => {
     switch(action.type){
         case 'SIGN_IN':
              return true;
            break;

         case 'SIGN_OUT':
              sessionStorage.clear();
              return false;
            break;

         default:
             return isLoggedIn;
     }
};
//Getting the current user token
const sessionToken = () => {
    const token = sessionStorage.getItem('token');
    return token;
}
//Getting user profile
 const userProfile = async () => {
    const user_email = sessionStorage.getItem('email');
    const fetchUSer = await axios.post('http://localhost:3001/api/users/getUser', {email: user_email});
    const userDetails = fetchUSer.data;
    return userDetails.data;
 }
//Getting contractors
const getContractors = async () => {
    const fetchContractors = await axios.get('http://localhost:3001/api/users/getContractors');
    const allContractors = fetchContractors.data;
    return allContractors.data;
}
//Export the reducers
export {authHandler, sessionToken, userProfile, getContractors};