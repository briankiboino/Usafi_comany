import logo from './logo.svg';
import './App.css';
import './animations.css';
import './screensize.css';
import Navigation from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import Signin from './components/signin';
import Totop from './components/to_top';
import Forgot from './components/forgot';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/signin' exact component={Signin}/>
          <Route path='/forgot' exact component={Forgot}/>
          <Route path='/contact' exact component={Contact}/>
          <div className="App">
              <Navigation />
              <Route path='/' exact component={Home}/>
              <Totop />
              <Footer />
          </div>
      </Switch>
     </Router>
  );
}

export default App;
