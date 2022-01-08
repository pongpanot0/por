import logo from './logo.svg';
import About from './Components/About'
import Header from './Components/Header';
import Education from './Components/Education';
import Home from './Components/Home';
import Homeen from './Components/English/Homeen';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import MyWorking from './Components/MyWorking';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
     
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Education" component={Education}/>
      <Route path="/MyWorking" component={MyWorking}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/en" component={Homeen} />
      <Route path="/About" component={About} />
      <Route path="/Education" component={Education}/>
      <Route path="/MyWorking" component={MyWorking}/>
      <Route path="/Contact" component={Contact}/>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
