import React from 'react';
import './style.css';
import { Motion, spring } from 'react-motion';
import ReactDOM from 'react-dom';


class Circle extends React.Component {


    constructor(props) {

        super(props)

        this.state = {

            hover: false,
            currentY: 20,
            //gColor: '#FFFAFA',
            clientWidth:'20',
            selected:this.props.selected=="true"?true:false
        }
    }


    componentWillUpdate(){

    }

    drawDown() {


        var c = ReactDOM.findDOMNode(this.refs['choosecircle']),
            cxt = c.getContext("2d");
        let colorStroke = "#B0B0B0"
        colorStroke = this.state.selected||this.state.hover? "#FFA500" : "#B0B0B0";
        //colorStroke = isHover ? "#FFA500" : "#B0B0B0";
      

        cxt.beginPath();
      

       
        cxt.lineWidth = (this.state.clientWidth/4)+"";  
        cxt.strokeStyle = colorStroke
        cxt.save();  
       
        cxt.arc(50, 50, this.state.clientWidth, 0,360,false);  
        cxt.restore();  
        cxt.stroke(); 




        cxt.beginPath();
        cxt.fillStyle = this.props.bgColor;
        cxt.arc(50, 50, this.state.clientWidth*3/4, 0, 360, false);

      cxt.fill();

       
      



    }



    componentDidMount() {

        this.drawDown(this.state.hover)
        var that = this;

    

        this.refs['choosecircle'].onmouseenter = () => {

            that.onMouseEnter()
        }
        this.refs['choosecircle'].onmouseleave = () => {

            that.onMouseLeave()
        }


    }

  


    onMouseEnter() {

        this.setState({
            hover: true,
            currentY: 0
        });
      this.drawDown();
    }
    onMouseLeave() {

        this.setState({
            hover: false,
        });
       this.drawDown();
    }

    render() {


        return (




            <div id="choose" >

                <canvas ref="choosecircle" width="100" height="100">
                    canvas not supported
            </canvas>
            

            </div>




        );
    }
}
export default Circle;

