import React, { Component } from 'react';
import './Infobox.css';

class Infobox extends Component {
    render() {
        return (
            <div className="container-info">


                    <div className="info-box">

                        <h4 style={{
                            fontSize: 20
                        }}>{this.props.heading}</h4>
                        <h4>
                            {this.props.entry}
                        </h4>

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