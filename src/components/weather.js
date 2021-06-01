import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


export class weather extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                        <Card.Title>{this.props.date}</Card.Title>
                        <Card.Text>
                           {this.props.description}
                         </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default weather
