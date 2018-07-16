import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand navbar-left" to="/">
                            <p style={{ color: 'white' }}>rm</p>
                        </a>
                    </div>

                    <div id="myNav" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/">MAIN</Link></li>
                            <li><Link to="/work">WORK</Link></li>
                            {/*<li><Link to="/projects">Projects</Link></li>*/}
                            {/* <li><Link to="/experiences">WORK</Link></li>
                            <li><Link to="/aboutme">ME</Link></li> */}
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Header;