import React, { Component } from 'react';
import UpArrow from '../arrow/uparrow.jsx';
import './style.css';
class Contact extends Component {

    constructor() {
        super()
        this.state = {
            currentY: 0
        }

    }
    render() {
        return (

            <div className="about-wrapper" >

                <div className="up-panel">
                    <UpArrow ref = {upArrow=>this.upArrow = upArrow}/>
                </div>
                <div className="about-text">
                    <div className={this.props.className}>
                        <h3>联系我</h3>
                        <p>This is a text that will appear.</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default Contact;