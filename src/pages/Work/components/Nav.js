import React, { Component } from 'react';

import "./Nav.css";

class Nav extends Component {
    render() {
        return (
            <div>
                <div className='sidenav'>
                    <a href="#">Summary</a>
                    <a href="">Work</a>
                    <a href="">Volunteer</a>
                </div>
            </div>
        );
    }
}

export default Nav;