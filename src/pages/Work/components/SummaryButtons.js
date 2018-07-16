import React, { Component } from 'react';

import "./SummaryButtons.css";

class SummaryButtons extends Component {
    render() {
        return (
            <div className="skillBox" onKeyDown={this.props.handleKey}>
                <h4>{this.props.skill}</h4>
                <audio data-key={this.props.key} src={this.props.src}></audio>
            </div>
        );
    }
}

export default SummaryButtons;