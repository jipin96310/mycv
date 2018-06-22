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


        let colorStroke = "#FFFAFA"
        colorStroke = isHover ? "#FFA500" : "#FFFAFA";


        var c = ReactDOM.findDOMNode(this.refs['uparrow']),
            cxt = c.getContext("2d");
            cxt.beginPath();
            cxt.moveTo(0, 45);
            cxt.lineTo(60, 20);
            cxt.lineTo(120, 45);
            cxt.lineWidth = 5;
            cxt.strokeStyle = colorStroke;
            cxt.lineCap = 'round';
            cxt.lineJoin = "round";
            cxt.stroke();
            cxt.moveTo(0, 30);
            cxt.lineTo(60, 5);
            cxt.lineTo(120, 30);
    
            cxt.stroke();
    
    
            cxt.moveTo(0, 60);
            cxt.lineTo(60, 35);
            cxt.lineTo(120, 60);
    
            cxt.stroke();
    
    }

    onMouseEnter() {

        this.setState({
            hover: true,
        });
       // this.drawDown(this.state.hover);
    }
    onMouseLeave() {

        this.setState({
            hover: false,
        });
       // this.drawDown(this.state.hover);
    }

    componentDidMount() {

        //this.drawDown(this.state.hover)
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
               <i ref = "uparrow" class = "fa fa-arrow-circle-o-up fa-3x" style = {{color:this.state.hover?"#FFA500":"#FFFAFA"}}></i>
            </div>
        );
    }
}
export default UpArrow;