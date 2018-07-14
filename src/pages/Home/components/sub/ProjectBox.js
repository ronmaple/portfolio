import React, { Component } from 'react';
// import proj from '../placeholder.png';
import './ProjectBox.css'

class ProjectBox extends Component {
    
    render() {
        // let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
        // let styles = {};
        // if (Number(this.props.id) > 2) {
        //     styles = {
        //         border: "solid 3px green"
        //         // gridColumn: "span 3",
        //         // gridRow: "span 2"
        //     }
        // } else {
        //     styles = {
        //         border: "solid 3px red"
        //         // gridColumn: "span 2",
        //         // gridRow: "span 2"
        //     }
        // }
        return (
           <div id="proj-container">
                {/* <div className="row">
                    <div className="col-xs-4">
                        <img id="projectsicon" src={ this.props.image } alt={this.props.title} style={{ height: 150, width: 150 }} />
                    </div>
                    <div className="col-xs-8">
                        <div className="proj-caption">
                            <h4>{ this.props.title }</h4>
                            <h4 id='#lorem'>{ this.props.desc }</h4>
                            <h4>{ this.props.stack }</h4>
                        </div>
                    </div>
                </div> */}
                <div className="box">
                    <img id="project-image" src={ this.props.image }></img>
                    <div className="overlay">
                        <div className="hovertext">
                        
                        <h4> { this.props.title } </h4>
                        <p> { this.props.desc } </p>
                        
                        </div>

                    </div>
                </div>
           </div>
           )
    }
}

export default ProjectBox;