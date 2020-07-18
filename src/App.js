import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductsPage from './pages/ProductsPage'
import NoMatch from './pages/NoMatch'
import './App.css';
// import Layout from './components/Layout'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbrotron'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
    
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/products" component={ProductsPage} />
          <Route  component={NoMatch} />
        </Switch>
      </Router>
      <Footer/>
    
    </div>
  );
}

export default App;
