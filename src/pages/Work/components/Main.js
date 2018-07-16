import React, { Component } from 'react';
import SummaryBox from "./SummaryBox";

import "./Main.css";
import SummaryButtons from './SummaryButtons';

const work = [
    {
        _id: 0,
        work: "Maxxam Analytics",
        // link: "https://s3.us-east-2.amazonaws.com/ronmapue/work/maxxam.png",
        link: "http://maxxam.ca/wp-content/uploads/2015/05/NewMaxxam_colour-med.jpg",
        length: 16,
    },
    {
        _id: 1,
        work: "Acme Analytical Labs",
        link: "https://s3.us-east-2.amazonaws.com/ronmapue/work/ACME.png",
        length: 4,
    },
    {
        _id: 2,
        work: "Starbucks",
        link: "https://s3.us-east-2.amazonaws.com/ronmapue/work/starbucks.png",
        length: 6
    },
    {
        _id: 3,
        work: "Student Works Painting",
        link: "https://s3.us-east-2.amazonaws.com/ronmapue/work/swp.jpg",
        length: 4
    },
    {
        _id: 4,
        work: "Real Canadian Superstore",
        // link: "https://s3.us-east-2.amazonaws.com/ronmapue/work/ss.png",
        link: "https://www.canadiansavingsgroup.com/wp-content/uploads/2018/05/superstore_logo.jpg",
        length: 35,
    }
]

let volunteer = [
    {
        _id: 0,
        volunteer: "SFU Biology",
        link: "https://pbs.twimg.com/profile_images/563122380533268480/AA9qP6CA_400x400.jpeg",
        length: 4
    },
    {
        _id: 1,
        volunteer: "KAMP Mentorship",
        link: "data:image/png;base64,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",
        length: 19
    }
]

let skills = [
    {
        skill: "Lab Assistant",
        key: "65",
        beat: '',
        src: "./sounds/clap.wav"
    },
    {
        skill: "Logistics",
        key: "83",
        beat: '',
        src: "./sounds/hihat.wav"
    },
    {
        skill: "Mentor",
        key: "68",
        beat: '',
        src: "./sounds/kick.wav"
    },
    {
        skill: "Sample Processing",
        key: "70",
        beat: '',
        src: "./sounds/openhat.wav"
    },
    {
        skill: "Organizational",
        key: "71",
        beat: '',
        src: "./sounds/boom.wav"
    },
    {
        skill: "Customer Service",
        key: "72",
        beat: '',
        src: "./sounds/ride.wav"
    },
    {
        skill: "DNA Technology",
        key: "74",
        beat: '',
        src: "./sounds/snare.wav"
    }
]

// window.addEventListener('keydown', function(e) {
//     console.log('keydown');
//     console.log('e.keyCode', e.keyCode);
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     console.log(audio);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) return;
//     audio.currentTime = 0; // rewind to start
//     audio.play();
//     key.classList.add('playing');
// } )

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     //console.log(this.classList);
//     this.classList.remove('playing');
// }
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
class Main extends Component {
    constructor(props) {
        super(props);
        // this.state = {

        // };

        // this.handleKey = this.handleKey.bind(this);
    }

    // componentDidMount() {
    //     document.addEventListener('keydown', this.handleKey);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('keydown', this.handleKey);
    // }
    // handleKey(e){
    //     console.log(e);
    // }

    render() {
        return (
            <div className="work-main">
                <h1>Summary </h1>
                

                <div className="summary-content">
                     <div className="summary skills">
                        {
                            skills.map(skill => {
                                return <SummaryButtons skill={skill.skill} />
                            })
                        }
                    </div>
                    <div className="summary-description">
                        <p>A combination of experience and training in Customer Service, and Logistics in various industries including 20 months combined experience in Analytical Laboratory settings.</p>
                    </div>

                    <div className="summary work">

                        {
                            work.map(i => {
                                return <SummaryBox image={i.link}/>
                            })
                        }

                    </div>

                </div>
                
                <div className="summary-content">

                    <div className="summary-description" style={{marginTop: 50}}>
                        <p>I've been privileged to be have been given the opportunities to be involved in a research pertaining agricultural benefits, and a role as a mentor for developing young adults.</p>
                    </div>

                    <div className="summary volunteer">
                        {
                            volunteer.map(i => {
                                return <SummaryBox image={i.link}/>
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default Main;