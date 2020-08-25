import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Product from './Views/Product'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
    <div className="p-3">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact /> 
        </Route>
        <Route path="/product">
          <Product />
        </Route>
      </Switch>
    </div>
     
      <Footer />
      </Router>
    </div>
  );
}

export default App;
