import React from 'react';
import './style.css';
import { Motion, spring } from 'react-motion';

import Arrow from '../arrow/arrow.jsx';
import UpArrow from '../arrow/uparrow.jsx';


class Header extends React.Component {



    constructor() {
        super()
        this.state = {

            currentY: document.documentElement.clientHeight,
            currentLeft: -300,
            currentRight: -300,
            currentTop: -300
        }

    }

    componentDidMount() {

        this.moveIn();



    }
    componentWillUpdate(nextProps, nextState) {

        if (nextState.currentY === 0) {
            this.moveOut();
        } else {
            this.moveIn();
        }

    }

    moveIn() {


        this.timer = setTimeout(
            () => {

                this.setState({

                    currentLeft: 0,
                    currentRight: 0,
                    currentTop: 0,

                })
            },
            100
        );
    }
    moveOut() {
        this.timer = setTimeout(
            () => {

                this.setState({

                    currentLeft: -300,
                    currentRight: -300,
                    currentTop: -300,

                })
            },
            100
        );

    }



    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }



    render() {
        const styles = {
            header: {

                width: '100%',
                backgroundColor: '#87CEFA',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'absolute',
                zIndex: '1000',
            }
            , headertextL: {
                position: 'relative',
                width: '100%',
                height: '20em',
                textAlign: 'left',


            }
            , headertextC: {
                position: 'relative',
                width: '100%',
                height: '20em',
                textAlign: 'center',
                overflow: 'hidden'
            }
            , headertextR: {
                position: 'relative',
                width: '100%',
                height: '20em',
                textAlign: 'right'

            }
        }



        return (
            <Motion style={{ height: spring(this.state.currentY), left: spring(this.state.currentLeft), right: spring(this.state.currentRight), top: spring(this.state.currentTop) }}>
                {({ height, left, right, top }) => <div ref={header => this.header = header} className="header" style={Object.assign({}, styles.header, { height })} >

                     <div className="up-panel">
                        <UpArrow ref={upArrow => this.upArrow = upArrow} />
                    </div>

                    <div className="container">
                        <div class="row">
                            <div class="col-sm">
                                <div className="header-text" style={Object.assign({}, styles.headertextL, { left })}>
                                    <h3>基本信息</h3>
                                    <div class="row">
                                        <div class="col">Column</div>
                                        <div class="col">Column</div>
                                        <div class="w-100"></div>
                                        <div class="col">Column</div>
                                        <div class="col">Column</div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm">
                                <div className="header-text" style={Object.assign({}, styles.headertextC, { top })}>
                                    <h3>学历资质</h3>
                                    <p>This is a text that will appear.</p>

                                </div>
                            </div>
                            <div class="col-sm">
                                <div className="header-text" style={Object.assign({}, styles.headertextR, { right })}>
                                    <h3>技能属性</h3>
                                    <p>This is a text that will appear.</p>

                                </div>
                            </div>
                        </div>



                    </div>





                    <div className="down-panel">
                        <Arrow ref={downArrown => this.downArrown = downArrown} />
                    </div>
                </div>
                }
            </Motion>
        );
    }
}
export default Header;