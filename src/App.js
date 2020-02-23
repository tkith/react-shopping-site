import React from 'react';
// React router
import { BrowserRouter, Route } from "react-router-dom";
// CSS
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import MainNavbar from './components/Navbar/MainNavbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Products from './containers/Products/Products';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import Contact from './containers/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <MainNavbar />
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/products/details' exact component={ProductDetails} />
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
