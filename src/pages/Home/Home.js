import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Infobox from './components/Infobox';
import Projects from './components/Projects';
import Footer from "../../components/Footer";
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const InfoBox_header = 'Welcome to my website!';
        const loremipsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

        return (
            <div>
                <Jumbotron title="Title" subtitle="Subtitle"/> 
                <div className="container-whole">
                    <Infobox 
                        heading={InfoBox_header}
                        entry={loremipsum}/>
                    <Projects />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;