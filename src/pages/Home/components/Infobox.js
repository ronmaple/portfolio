import React, { Component } from 'react';
import './Infobox.css';

const social = [
    {
        title: "linkedin",
        logo: "https://s3.us-east-2.amazonaws.com/ronmapue/logo/In-2CRev-128px-TM.png",
        link: "www.linkedin.com/in/ronmapue"
    },
    {
        title: "github",
        logo: "https://s3.us-east-2.amazonaws.com/ronmapue/logo/GitHub-Mark-64px.png",
        link: "https://github.com/ronmaple"
    },
    {
        title: "freecodecamp",
        logo: "https://s3.us-east-2.amazonaws.com/ronmapue/logo/fcc.jpeg",
        link: "https://www.freecodecamp.org/ronmaple"
    },
    {   
        title: "codepen",
        logo: "https://s3.us-east-2.amazonaws.com/ronmapue/logo/codepen.png",
        link: "https://codepen.io/RMapue/"
    }
]
class Infobox extends Component {
    render() {
        return (
            <div className="container-info">


                    <div className="info-box">

                        <h4 style={{
                            fontSize: 25,
                            padding: "10px 0px 20px 0px"
                        }}>{this.props.heading}</h4>
                        <h4>
                            {this.props.entry}
                        </h4>

                        <div className="logos">
                            {
                                social.map(i => {
                                    return (
                                      <a href={i.link}><img style={{display: "inline-block", width: 30, height: 30, margin: "100px 5px 5px 5px"}}src={i.logo}></img></a>
                                    )
                            })
                        }
                        </div>

                    </div>
                    <div className="avatar-box">
                        <img id="avatar" src="https://s3.amazonaws.com/samples.artona.com/email_thumbnails/usfu_alumni_pbooth/SFU18-PB-941.jpg"></img>
                        <div className="this">Me</div>
                    </div>

            </div>
        );
    }
}

export default Infobox;