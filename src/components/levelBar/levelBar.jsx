import React from 'react';
import './style.css'
import { Motion, spring } from 'react-motion';

import { VelocityComponent } from 'velocity-react';
import ReactDOM from 'react-dom';


class levelBar extends React.Component {


    constructor(props) {

        super(props)
        this.state={
            onTouch:false,
            styleColor:"#FFA500"
        }

    }
    componentDidMount(){

      
     
        

    }

    onMouseEnter() {
        this.setState({ onTouch: true })
      
    }

    onMouseLeave() {
        this.setState({ onTouch: false })
    }

    render() {

      
        return (
            <div  style={{width:"100%"}}  >
               	<h3 class="levelBar-title">{this.props.title}</h3>
				<div class="levelBar">
					<div class="levelBar-bar" style={{width:this.props.level+"%",background:this.state.styleColor,height:"10px"}}>
						<span>{this.props.level}</span>
					</div>
				</div>
            </div>


        );
    }

}

export default levelBar;




