import React, { Component } from 'react';
import ProjectBox from './sub/ProjectBox';
import './Projects.css';

class Projects extends Component {

    render() {
        const front = 
        [
            {
                _id: 0,
                title: 'Javascript Calculator',
                desc: 'A calculator app made purely with Javascript. Simple functions, and simple UI.',
                stack: 'HTML5, CSS3, Javascript',
                image: 'https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/calculator.png'
            },
            {
                _id: 1,
                title: 'Simon',
                desc: 'A classic game of Simon, with a little UI twist. Complete with sounds on click. Currently in development - minor bug fixes, and ‘strict’ mode to be applied. The UI will get an update as I continue to develop my CSS skills',
                stack: 'HTML5, CSS3, Bootstrap 3, jQuery',
                image: 'https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/simon.png'
            },
            {
                _id: 2,
                title: 'TicTacToe',
                desc: "A simple tic tac toe game where user competes against an AI. Completed but in the process of applying min-max algorithm, and UI bug fixes :). ",
                stack: 'HTML5, CSS3, Bootstrap 3, jQuery',
                image: 'https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/tictactoe.png'
            },
            {
                _id: 3,
                title: "Markdown Previewer",
                desc: "With the use of Markedjs library, I created a simple Markdown previewer that takes advantage of React's eventhandlers",
                stack: "HTML5, CSS3, Bootstrap 3, React.js, Marked.js",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/markdown.png"
            },
            {
                _id: 4,
                title: "Pomodoro Clock",
                desc: "Timed productivity with breaks in between",
                stack: "HTML5, CSS3, Bootstrap 3, jQuery",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/pomodoro.png"
            },
            {
                _id: 5,
                title: "Pong",
                desc: "A simple Pong game -- one of the earlier (tutorial) projects that I followed and worked on to learn Javascript basics",
                stack: "HTML5 Canvas, CSS3, Javascript",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/pong.png"
            },
            {
                _id: 6,
                title: "Quiz App",
                desc: "A quiz application that I built for Red Academy's entrance exam.",
                stack: "HTML5, CSS3, Javascript (ES6)",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/quiz.png"
            },
            {
                _id: 7,
                title: "Twitch API Previewer",
                desc: "A Twitch API channel viewer - Twitch API became public, and had to remake from a synthetic API workaround",
                stack: "HTML5, CSS3, Javascript, jQuery",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/twitch.png"
            },
            {
                _id: 8,
                title: "Weather API",
                desc: "A simple API viewer that uses a weather API and current (estimated) geolocation data",
                stack: "HTML5, CSS3, Javascript",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/weather.png"
            },
            {
                _id: 9,
                title: "Wikipedia viewer",
                desc: "Uses the Wikipedia ajax API and search parameters",
                stack: "HTML5, CSS3, Javascript, jQuery",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/wiki.png"
            }
        ];

        const fullstack = [
            {
                _id: 0,
                title: "Emaily",
                desc: "A simple (tutorial) based application that I plan to expand later on.",
                stack: "HTML5, CSS3, Javascript (2016, 2019), React.js, Materialize.css, Node, MongoDB, Mongoose, Express",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/emaily.png"
            },
            {
                _id: 1,
                title: "Timestamp Microservice",
                desc: "",
                stack: "Node, Express",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/timestamp.png"
            },
            {
                _id: 2,
                title: "Head-parser Microservice",
                desc: "",
                stack: "Node, Express",
                image: "https://s3.us-east-2.amazonaws.com/ronmapue/project-screenshots/headparser.png"
            }
        ]
        return (

            <div>

                <div className="container-fluid" id="projects" style={{marginTop: 10}}>

                    <h3 id='projectsTitle' style={{ padding: "5px 0px 0px 0px"}}>Projects</h3>
                        
                        <div className="container-project">
                            <hr />
                            <h4 style={{ textAlign: "right", marginLeft: 60, fontWeight: 800, fontSize: 40, padding: 20}}> Front-end Projects </h4>
                            <div className="picture-grid">
                            {
                                front.map(i => {
                                        return <ProjectBox key={i._id.toString()}title={i.title} desc={i.stack} image={i.image} stack={i.stack} id={i._id}/>
                                    })
                            }
                            </div>
                            <br />
                        </div>

                        <div className="container-project">
                            <hr />
                            <h4 style={{ textAlign: "right", marginLeft: 60, fontWeight: 800, fontSize: 40, padding: 20}}> FullStack  ||  Back-end </h4>
                            <div className="picture-grid">
                            {
                                fullstack.map(i => {
                                        return <ProjectBox key={i._id.toString()}title={i.title} desc={i.stack} image={i.image} stack={i.stack} id={i._id}/>
                                    })
                            }
                            </div>
                            <br />
                        </div>
                </div>

            </div>
        )
    }
}

export default Projects;