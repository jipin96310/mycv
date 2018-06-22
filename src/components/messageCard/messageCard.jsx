import React from 'react';
import './style.css'
import { Motion, spring } from 'react-motion';

import { VelocityComponent } from 'velocity-react';
import ReactDOM from 'react-dom';


class MessageCard extends React.Component {


    constructor(props) {

        super(props)

        let styleChoices = ['bg-secondary','bg-info','bg-dark']
        let currentChoice = styleChoices[parseInt(Math.random()*3)]



        this.state = {
            onTouch: false,
           currentChoice:currentChoice,
           isEdited:false
        }

    }
    componentDidMount() {


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

     
        let resData = [];
      
       let curNotes =this.state.notes ;

       let baseTexts = ["请输入点什么~~~","发送失败```","发送成功!!!"];
       let baseClasses = ["alert alert-warning","alert alert-danger","alert alert-success"];


        if (curNotes) {
            for (let i = 0; i < curNotes.length; i++) {
                if( this.state.isEdited==false||i!=curNotes.length-1){
                    resData.unshift(


              
                        <div class={"card text-white "+this.state.currentChoice+" mb-3"}  style={{maxWidth:'100%',margin: '5px 10px 5px 10px'}} >
                        
                            <div class="card-body" >
                                <h5 class="card-title">{curNotes[i].companyName}</h5>
                                <p class="card-text">  {curNotes[i].mainContent}</p>
                            </div>
                        </div>
                     
    
                          
                            )
                        
                }else if( this.state.isEdited==true&&i==curNotes.length-1){

                    resData.unshift(


                   

                     

                        <div class={"card text-white "+this.state.currentChoice+" mb-3"}  style={{maxWidth:'100%',margin: '5px 10px 5px 10px'}}>
                            
                        <div class="card-body">
                        <h5 class="card-title">{curNotes[i].companyName}</h5>
                                <p class="card-text">  {curNotes[i].mainContent}</p>
                        </div>
                    </div>
                
                     
    
                          
                            )
                
               
                }
               
            }

            resData.unshift(
            
                <div class="card text-white bg-danger mb-3" style={{maxWidth:'100%',margin: '5px 10px 5px 10px'}}>
              
                <div class="card-body">
                  <h5 class="card-title">孙肇珩</h5>
                  <p class="card-text">如有疑问，请在此处留言(仅显示近2天留言)</p>
                </div>
              </div>

            )








        }
        let alertType = this.state.alertType

        return (
            <div ref='cardButton' className="card" style={{ width: '100%', paddingBottom: '100%', height: '0', overflow: 'hidden', backgroundColor: this.props.color,cursor:"default" }}>




                <div ref = "cardContent" style={{ margin: '0px',overflowX:'hidden',overflowY:'auto',width: '100%', height: '100%',position:"absolute",left:"0",right:"0"}}>    {resData}</div>


                <VelocityComponent animation={{ bottom: this.state.onTouch&&!this.state.isEdited ? '0px' : '-300px', opacity: this.state.onTouch&&!this.state.isEdited ? '1' : '0' }} duration={500}>
                    <div class="form-inline" style={{ position: 'absolute' }}>

                        <div class="form-group mx-sm-3 mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <input ref="inputArea" type="text" class="form-control" placeholder="您有什么疑问吗？" style={{ margin: '0px 5px 0px 5px' }} ></input>
                            <button ref="buttonSubmit" class="btn btn-primary" >下一步</button>
                        </div>

                    </div>
                </VelocityComponent>

                  <VelocityComponent animation={{ bottom: this.state.isEdited ? '0px' : '-300px', opacity: this.state.isEdited ? '1' : '0' }} duration={200}>
                    <div class="form-inline" style={{ position: 'absolute' }}>

                        <div class="form-group mx-sm-3 mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>

                            <input ref="inputArea2" type="text" class="form-control" placeholder="该如何称呼您？" style={{ margin: '0px 5px 0px 5px' }} ></input>
                            <button ref="buttonSubmit2" class="btn btn-warning" >提交</button>
                        </div>

                    </div>
                </VelocityComponent>

                  <VelocityComponent
                                                        animation={{ opacity: this.state.successTriggered ? 1 : 0,visibility: this.state.successTriggered?"visible":"hidden" }} duration={300}
                                                    >
                                                         <div ref={alertButton => this.alertButton = alertButton} class={baseClasses[alertType]} role="alert" style={{ opacity: 0,width:"80%",marginLeft:"10%" }}>
                                                            {baseTexts[alertType]}
                                                       </div>

                 </VelocityComponent>




            </div >


        );
    }

}

export default MessageCard;
