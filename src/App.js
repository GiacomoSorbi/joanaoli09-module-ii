import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductsPage from './pages/ProductsPage'
import './App.css';
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbrotron'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    
      <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/products" component={ProductsPage} />
          <Route
          path="*"
          render={() => (
            <img
              alt="alt"
              src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
        />
        </Switch>
      </Router>
      <Footer/>
    
    </div>
  );
}

export default App;
