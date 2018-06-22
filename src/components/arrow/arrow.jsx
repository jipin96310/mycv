import React from 'react';
import './style.css';
import { Motion, spring } from 'react-motion';
import ReactDOM from 'react-dom';


class Arrow extends React.Component {


    constructor() {

        super()

        this.state = {

            hover: false,
            currentY: 20
        }
    }

    drawDown(isHover) {


        var c = ReactDOM.findDOMNode(this.refs['downarrow']),
            cxt = c.getContext("2d");
        let colorStroke = "#FFFAFA"
        colorStroke = isHover ? "#FFA500" : "#FFFAFA";


        cxt.beginPath();
        cxt.moveTo(0, 30);
        cxt.lineTo(60, 55);
        cxt.lineTo(120, 30);
        cxt.lineWidth = 5;
        cxt.strokeStyle = colorStroke;
        cxt.lineCap = 'round';
        cxt.lineJoin = "round";
        cxt.stroke();
        cxt.moveTo(0, 15);
        cxt.lineTo(60, 40);
        cxt.lineTo(120, 15);

        cxt.stroke();


        cxt.moveTo(0, 45);
        cxt.lineTo(60, 70);
        cxt.lineTo(120, 45);

        cxt.stroke();






    }



    componentDidMount() {

       // this.drawDown(this.state.hover)
        var that = this;
        this.refs['downarrow'].onmouseenter = () => {

            that.onMouseEnter()
        }
        this.refs['downarrow'].onmouseleave = () => {

            that.onMouseLeave()
        }


    }
    onMouseEnter() {

        this.setState({
            hover: true,
            currentY: 0
        });
      //  this.drawDown(this.state.hover);
    }
    onMouseLeave() {

        this.setState({
            hover: false,
        });
      //  this.drawDown(this.state.hover);
    }

    render() {


        return (




            <div id="down" >

                <i ref="downarrow" width="120" height="80" id = "downcanvas" class = "fa  fa-arrow-circle-o-down  fa-3x" style = {{color:this.state.hover?"#FFA500":"#FFFAFA"}}>
                    
            </i>
            <Motion style={{ height: spring(this.state.currentY) }}>
                {({ height }) => <div style={Object.assign({}, { overflow: 'hidden', fontSize: '14',color:"#FFFAFA" }, { height })} >点击或滚轮翻页</div>
                }
            </Motion>

            </div>
            
            
           
         
        );
    }
}
export default Arrow;

