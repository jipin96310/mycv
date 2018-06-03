import React, { Component } from 'react';



import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './components/home/home.jsx'
import Header from './components/header/header.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'

import ReactDOM from 'react-dom';




export default class App extends Component {
    constructor(props) {
        super(props);
        document.documentElement.style.overflowY = 'hidden';
        this.state = {
            count: 1,
            className: 'hidden',
            //positionY: 0,
            currentState: 1
        }
    }

    add() {
        this.setState({ count: this.state.count + 1 });
    };
   

    moveToPage(startNum,destNum){

        
        window.onmousewheel  = null;

        if(startNum<destNum){
            let startObj = this.refs['page'+startNum];

            startObj.setState({currentY:0})
                   
                    this.setState({
                        currentState: destNum,

                    })

        }else if (startNum>destNum){
            let destObj = this.refs['page'+destNum];
            let windowHeight = document.documentElement.clientHeight;

            destObj.setState({currentY:windowHeight});

            
            this.setState({
                currentState: destNum,

            })


        }


       
        this.timer = setTimeout(
            () => { 

                this.setmousewheelListener()
                this.timer && clearTimeout(this.timer);
            },
            200
          );


    }

    setmousewheelListener(){
        window.onmousewheel = () => this.onMouseWheel(event.deltaY)
     }
   

    onMouseWheel(positionY) {

        let windowHeight = document.documentElement.clientHeight;
       // console.log(windowHeight)
        let startNum = this.state.currentState;


        
                if (positionY > 0 && startNum < 4) {

                    this.moveToPage(startNum,startNum+1);

                } else if (positionY < 0 && startNum > 1) {
                   
                    this.moveToPage(startNum,startNum-1);

                }
             

    }







    componentDidMount() {

        //  window.onscroll = () => this.handleScroll()
        window.onmousewheel = () => this.onMouseWheel(event.deltaY)


        //set onclick listener to arrow
        let page1 = this.refs.page1;
        let page2 = this.refs.page2;
        let page3 = this.refs.page3;
        let page4 = this.refs.page4;

        //todo


        let arrowDown1 = ReactDOM.findDOMNode(page1.downArrow);
        let arrowUp2 = ReactDOM.findDOMNode(page2.upArrow);
        let arrowDown2 = ReactDOM.findDOMNode(page2.downArrown);
        let arrowUp3 = ReactDOM.findDOMNode(page3.upArrow);
        let arrowDown3 = ReactDOM.findDOMNode(page3.downArrow);
        let arrowUp4 = ReactDOM.findDOMNode(page4.upArrow);



        arrowDown1.onclick=()=>{this.moveToPage(1,2) };
        arrowUp2.onclick=()=>{this.moveToPage(2,1)};
        arrowDown2.onclick=()=>{this.moveToPage(2,3)};
        arrowUp3.onclick=()=>{this.moveToPage(3,2)};
        arrowDown3.onclick=()=>{this.moveToPage(3,4)};
        arrowUp4.onclick=()=>{this.moveToPage(4,3)};
        

    }

    render() {
        return (


            <div style={{ height: "100%" }}>
                <Home ref="page1"/>
                <Header ref="page2" />
                <About ref="page3" />
                <Contact ref="page4" />
            </div>


        );
    }
}