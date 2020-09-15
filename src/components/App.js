import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import ContactUs from './ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';

const Message = () => <h2>Message</h2>


const App = () => {
  return (
    <div style={{backgroundColor: "black"}}>
      <BrowserRouter>
        <Header />
        <div>
          <Route exact path="/" component={Home}  /> 
        </div>
        <div>
          <Route exact path="/services" component={Services} />
        </div>
        <div>
          <Route exact path="/message" component={ContactUs} />
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;