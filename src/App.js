import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages, components
import Home from "./pages/Home/Home";
import Header from "./components/Header";

// general CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <Header />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
