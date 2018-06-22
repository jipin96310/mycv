import React from 'react';
import './style.css'
import { Motion, spring } from 'react-motion';

import { VelocityComponent } from 'velocity-react';
import ReactDOM from 'react-dom';


class ButtonCard extends React.Component {


    constructor(props) {

        super(props)
        this.state={
            onTouch:false,
        
        }

    }
    componentDidMount(){

      
        var that = this;
        this.refs['cardButton'].onmouseenter = () => {

            that.onMouseEnter()
        }
        this.refs['cardButton'].onmouseleave = () => {

            that.onMouseLeave()
        }

     
     
        

    }

    onMouseEnter() {
        this.setState({ onTouch: true })
      
    }

    onMouseLeave() {
        this.setState({ onTouch: false })
    }

    render() {
//        <p style = {{fontSize:'0.1em',textAlign:'center'}}>Some quick</p>
        let that = this;
        let list = this.props.contentdata.map((item,i) => (
            <p key={i} style = {{fontSize:'0.15em',textAlign:'center'}}>
                  
                   {'---'+item+'---'}
            </p>
        ));

        let styles = {
            font:{

                fontFamily: "'Microsoft YaHei','黑体'",
                color:"#FFFAFA",
                fontSize:"18px"
            }

        }
        return (
            <div ref='cardButton' className="card"  style={{position:'relative', width: '100%', paddingBottom: '100%', height: '0', overflow: 'hidden', backgroundColor: this.props.color ,cursor:'pointer'}}>
                <div >

                    <div style = {{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)'}}><i className = {this.props.stylename} style = {{color:"#FFFAFA"}}></i></div>
                    <div style = {{position:'absolute',top:'80%',left:'50%',transform:'translate(-50%, -80%)'}}><span style = {styles.font}>{this.props.headTitle}</span></div>  

                    <VelocityComponent animation={{ bottom: this.state.onTouch ? '0px' : '-300px',opacity: this.state.onTouch ? '1' : '0'}} duration={500}>

                      




                        <div style={{ padding:'5px',position:'absolute',bottom: '-300px',boxShadow:'1px 1px 3px #1C1C1C',backgroundColor:' rgba(255, 250, 250, 0.5)',color:'#3B3B3B' ,width:'100%' ,paddingBottom: '100%', height: '0'} }>

                            <div className = "card-title" style={{}} >
                            <p class="card-text" style={{fontFamily:"'黑体-简','微软雅黑'"}}>{this.props.title} </p>

             

                            {list}


                          </div>
                        </div>
                    </VelocityComponent>
                  


                </div>
            </div>


        );
    }

}

export default ButtonCard;




