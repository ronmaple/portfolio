import React, { Component } from 'react';

import "./Work.css";

import Nav from "./components/Nav";
import Main from "./components/Main";
import SummaryButtons from "./components/SummaryButtons";
import Footer from "../../components/Footer";

class Work extends Component {
    render() {
        return (
            <div style={{marginBottom: 150}}>>
                <div className="work-body">
                    <Nav />
                    <Main />
                    {/* <Footer /> */}
                </div>

            </div>
        )
    }
}
export default Work;