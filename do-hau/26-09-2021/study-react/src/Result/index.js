import React, { Component } from 'react';
import './style.scss';
import Button from 'react-bootstrap/Button'

 class Result extends Component {
     // eslint-disable-next-line no-useless-constructor
     constructor() {
        super();
     }
     componentWillReceiveProps(nextProps) {
         console.log('nextProps', nextProps)
     }

     handleDecrement = () => {
         this.props.increment()
     }
     handleIncrement = () => {
        this.props.decrement()
    }

    render() {
        console.log('props', this.props)
        return (
            <div>
            <p className="custom-text">{this.props.number}</p>
       
                <Button onClick={this.handleDecrement} variant="primary">Cộng</Button>
                <Button onClick={this.handleIncrement} variant="primary">Trừ</Button>
                
            </div>
             );
    }
}
export default Result;
