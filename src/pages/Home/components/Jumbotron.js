import React, { Component } from 'react';
import './Jumbotron.css';

import SummaryButton from "../../Work/components/SummaryButtons";

class Jumbotron extends Component {

    render() {
        // const img = "https://media.licdn.com/dms/image/C5603AQFDtwPg0zxr4w/profile-displayphoto-shrink_200_200/0?e=1536796800&v=beta&t=uygTgnAgtMtQkjkyGGxM28lUeDmX7FHvnf85HswhewE";
        return (
            <div className="jumbotron jumbotron-fluid" style={{ marginTop: 0}}>
                <div className="container j-container text-center">
                    <h1 className="display-3" style={{ marginTop: 100, color: 'hsl(210, 85%, 40%)' }}>{this.props.title}</h1>
                    <h1 style={{
                        fontWeight: 200,
                        fontSize: 20,
                        marginTop: 10,
                        color: '#1789fb'
                    }}>{this.props.subtitle}</h1>
  
                </div>
            </div>
        );
    }
}

export default Jumbotron;
