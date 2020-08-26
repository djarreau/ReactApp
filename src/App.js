import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Product from './Views/Product'
import Users from './Views/Users';
import UserDetail from './Views/UserDetail';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
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
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/users/:id">
          <UserDetail />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
     
      <Footer />
      </Router>
    </div>
  );
}

export default App;
