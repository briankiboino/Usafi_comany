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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/signin' exact component={Signin}/>
          <div className="App">
              <Navigation />
              <Route path='/contact' exact component={Contact}/>
              <Route path='/' exact component={Home}/>
              <Totop />
              <Footer />
          </div>
      </Switch>
     </Router>
  );
}

export default App;
