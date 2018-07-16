import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Infobox from './components/Infobox';
import Projects from './components/Projects';
import Footer from "../../components/Footer";

import SummaryButtons from '../Work/components/SummaryButtons';

const skills = [
    {
        skill: "HTML5"
    },
    {
        skill: "CSS3"
    },
    {
        skill: "Bootstrap 3&4"
    },
    {
        skill: "Javascript"
    },
    {
        skill: "ES6"
    },
    {
        skill: "jQuery"
    },
    {
        skill: "MaterializeCSS"
    },
    {
        skill: "SASS"
    },
    {
        skill: "React"
    },
    {
        skill: "Node"
    },
    {
        skill: "Express"
    },
    {
        skill: "MongoDB"
    },
    {
        skill: "Mongoose"
    },
    {
        skill: "GoogleOAuth"
    },
    {
        skill: "Version Control/Git"
    }
]

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const InfoBox_header = 'Ron Mapue';
        const loremipsum = "Self taught in Web technologies, primarily through resources such as Udemy, and freeCodeCamp. Outside of dev, I have a BSc. in Molecular Biology and Biochemistry. Tech has always been in my interests - my primary focus in my studies were in Bioinformatics and Genomics.";

        return (
            <div>
                <Jumbotron title="Welcome!" subtitle="My dev portfolio. This is an ongoing project :)"/> 
                <div className="container-whole">
                    <Infobox 
                        heading={InfoBox_header}
                        entry={loremipsum}/>

                    <div style={{ marginBottom: 20, backgroundColor: "hsl(0, 0%, 97%)"}}>
                        <h3 style={{ textAlign: "center", marginTop: 20, fontSize: 40, fontWeight: 700, color: "hsl(210, 85%, 20%"}}>Summary</h3>
                        <div className="temporary" style={{
                            height: "auto",
                            width: "50%",
                            margin: "auto",
                            marginTop: 40,
                            marginLeft: 50,
                            border: "solid 2px hsl(0, 0%, 70%)",
                            textAlign: "center",
                            display: "inline-block"
                        }}>

                            {
                                skills.map(skill => {
                                    return <SummaryButtons skill={skill.skill} />
                                })
                            }
                        </div>
                        <div className="temporary-img" style={{
                            display: "inline-block",
                            width: "40%",
                            height: "auto",
                            margin: 20
                        }}>
                            <img style={{ width: 450, boxShadow: "1px 1px 1px 1px grey"}} src="https://s3.us-east-2.amazonaws.com/ronmapue/FCC-JS.png"></img>
                        </div>
                    </div>

                    <hr />

                    <Projects />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;