import React from 'react';
import './style.css';
import { Motion, spring } from 'react-motion';
import ReactDOM from 'react-dom';


class Arrow extends React.Component {


    constructor(){

        super()
       
        this.state = {

          hover:false
        }
    }

    drawDown(isHover) {
        

        var c = ReactDOM.findDOMNode(this.refs['downarrow']),
        cxt = c.getContext("2d");
        let colorStroke = "#969696"
        colorStroke = isHover?  "#FFA500":"#969696";

     
            cxt.beginPath();
            cxt.moveTo(0, 20);
            cxt.lineTo(30, 45);
            cxt.lineTo(60, 20);
            cxt.lineWidth = 5;
            cxt.strokeStyle = colorStroke;
            cxt.lineCap = 'round';
            cxt.lineJoin = "round";
            cxt.stroke();
            cxt.moveTo(0, 5);
            cxt.lineTo(30, 30);
            cxt.lineTo(60, 5);
         
            cxt.stroke();
        
    }
    
    componentDidMount() {
    
       this.drawDown(this.state.hover)
       var that = this;
       this.refs['downarrow'].onmouseenter = ()=>{
          
           that.onMouseEnter()
        }
        this.refs['downarrow'].onmouseleave = ()=>{
          
            that.onMouseLeave()
         }
     

    }
    onMouseEnter(){
      
        this.setState({
            hover: true,
        });
        this.drawDown(this.state.hover);
    }
    onMouseLeave(){
      
        this.setState({
            hover: false,
        });
        this.drawDown(this.state.hover);
    }

    render() {
        
      
        return (
            <div id="down" >
            <canvas ref = "downarrow" width="60" height="50">
            canvas not supported
            </canvas>
            </div>
        );
    }
}
export default Arrow;

