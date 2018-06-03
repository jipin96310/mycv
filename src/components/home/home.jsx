import React, { Component } from 'react';
import Arrow from '../arrow/arrow.jsx';
import { Motion, spring } from 'react-motion';
import './style.css';
class Home extends Component {

    constructor() {
        super()
        this.state = {
            currentY: document.documentElement.clientHeight,
        }

    }
    render() {
        const styles = {
            home: {

                width: '100%',
                backgroundColor: 'salmon',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'absolute',
                zIndex: '1500',
            }

        }



        return (
            <Motion style={{ height: spring(this.state.currentY) }}>
             {({ height }) =>
            <div className="about-wrapper" style={Object.assign({}, styles.home, { height })} >

               
                <div className="about-text">
                    <div className={this.props.className}>
                        <h3>主页</h3>
                        <p>This is a text that will appear.</p>
                    </div>

                </div>

                 <div className="down-panel">
                    <Arrow ref = {downArrow=>this.downArrow = downArrow}/>
                </div>
            </div>
             }
            </Motion>
        )
    }
}
export default Home;