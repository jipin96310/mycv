import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import Arrow from '../arrow/arrow.jsx';
import UpArrow from '../arrow/uparrow.jsx';
import './style.css';
class About extends Component {



    constructor() {
        super()

        this.state = {

            currentY: document.documentElement.clientHeight
        }

    }




    render() {

        const styles = {
            about: {

                width: '100%',
                backgroundColor: '#FF83FA',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'absolute',
                zIndex: '500',
            }

        }

        return (
            <Motion style={{ height: spring(this.state.currentY) }}>
                {({ height }) =>
                    <div className="about-wrapper" style={Object.assign({}, styles.about, { height })} >
                        <div className="up-panel">
                            <UpArrow ref={upArrow => this.upArrow = upArrow} />
                        </div>

                        <div className="about-text">
                            <div className={this.props.className}>
                                <h3>自我简介</h3>
                                <div class="row">
                                    <div class="col">Column</div>
                                    <div class="col">Column</div>
                                    <div class="w-100"></div>
                                    <div class="col">Column</div>
                                    <div class="col">Column</div>
                                </div>

                            </div>
                        </div>
                        <div className="down-panel">
                            <Arrow ref={downArrow => this.downArrow = downArrow} />
                        </div>
                    </div>
                }
            </Motion>
        )
    }
}
export default About;