import logo from './logo.svg';
import './App.css';
import './animations.css';
import './screensize.css';
import Navigation from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import Signin from './components/signin';
import Signup from './components/signup';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Switch>
          <div className="App">
              <Navigation />
              <Route path='/contact' exact component={Contact}/>
              <Route path='/signup' exact component={Signup}/>
              <Route path='/signin' exact component={Signin}/>
              <Route path='/' exact component={Home}/>
              <Footer />
          </div>
      </Switch>
     </Router>
  );
}

export default App;
