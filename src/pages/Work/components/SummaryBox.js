import React, { Component } from 'react';

class SummaryBox extends Component {
    render() {
        let styles = {
            height: 150,
            width: "auto",
            padding: 10
        }
        return (
            <div className="container-work-summary-entry">
                <img id="summaryImg" style={styles} src={this.props.image} />
            </div>
        )
    }
}

export default SummaryBox;