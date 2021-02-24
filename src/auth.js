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
//Getting user's name
const userName = () =>{
    const name = sessionStorage.getItem('name');
    return name;
}
//Getting user's email
const userEmail = () =>{
    const email = sessionStorage.getItem('email');
    return email;
}
//Export the reducers
export {authHandler, sessionToken, userName, userEmail};