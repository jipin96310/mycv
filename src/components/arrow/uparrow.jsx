import React from 'react';
import './style.css';
import { Motion, spring } from 'react-motion';
import ReactDOM from 'react-dom';


class UpArrow extends React.Component {


    constructor() {

        super()

        this.state = {
            hover: false

        }
    }

    drawDown(isHover) {


        let colorStroke = "#969696"
        colorStroke = isHover ? "#FFA500" : "#969696";


        var c = ReactDOM.findDOMNode(this.refs['uparrow']),
            cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(0, 45);
        cxt.lineTo(30, 20);
        cxt.lineTo(60, 45);
        cxt.lineWidth = 5;
        cxt.strokeStyle = colorStroke;
        cxt.lineCap = 'round';
        cxt.lineJoin = "round";
        cxt.stroke();
        cxt.moveTo(0, 30);
        cxt.lineTo(30, 5);
        cxt.lineTo(60, 30);
        cxt.lineWidth = 5;

        cxt.stroke();
    }

    onMouseEnter() {

        this.setState({
            hover: true,
        });
        this.drawDown(this.state.hover);
    }
    onMouseLeave() {

        this.setState({
            hover: false,
        });
        this.drawDown(this.state.hover);
    }

    componentDidMount() {

        this.drawDown(this.state.hover)
        var that = this;
        this.refs['uparrow'].onmouseenter = () => {

            that.onMouseEnter()
        }
        this.refs['uparrow'].onmouseleave = () => {

            that.onMouseLeave()
        }
    }



    render() {


        return (
            <div id="up">
                <canvas ref="uparrow" width="60" height="50">
                    canvas not supported
            </canvas>
            </div>
        );
    }
}
export default UpArrow;