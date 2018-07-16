import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages, components
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

import Header from "./components/Header";
// import Footer from "./components/Footer";

// general CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />

        </div>
      </Router>
    );
  }
}

export default App;
