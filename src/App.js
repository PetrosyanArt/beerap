import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//imports pages
import Home from './pages/Home';
import About from './pages/About';
import SingleBeer from './pages/SingleBeer';
import Error from './pages/Error';

//import navbar
import Navbar from './components/Navbar'; 


export default function App() {
  return <Router>

    <Navbar />

    <Switch>

    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/beer/:id">
      <SingleBeer />
    </Route>
    <Route path="/*">
      <Error />
    </Route>

    </Switch>
  </Router>;
}
