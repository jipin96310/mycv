import React, { Component } from 'react';



import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './components/home/home.jsx';
import ContentPage from './components/contentPage/contentPage.jsx';
import ResourcePage from './components/resourcePage/resourcePage.jsx'

import Contact from './components/contact/contact.jsx';

import UpArrow from './components/arrow/uparrow.jsx';
import DownArrow from './components/arrow/arrow.jsx';


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


    moveToPage(startNum, destNum) {


        window.onmousewheel = null;

        let startObj = this.refs['page' + startNum];
        let destObj = this.refs['page' + destNum];
        let windowHeight = document.documentElement.clientHeight;
        startObj.setState({ currentY: 0, onPage: false });
        destObj.setState({ currentY: windowHeight, onPage: true });


        this.setState({
            currentState: destNum,
        })



        this.timer = setTimeout(
            () => {

                this.setmousewheelListener()
                this.timer && clearTimeout(this.timer);
            },
            200
        );



        this.setOnclickListener();
    }

    setmousewheelListener() {
        window.onmousewheel = () => this.onMouseWheel(event.deltaY)
    }


    onMouseWheel(positionY) {




        let windowHeight = document.documentElement.clientHeight;

        let startNum = this.state.currentState;
        let downArrow = this.downArrow


        if (positionY > 0) {
            if (startNum == 1) downArrow.setState({ currentY: 0 })
            if (startNum < 4) {
                this.moveToPage(startNum, startNum + 1);
            } else if (startNum >= 4) {
                this.hintOnEdge(startNum);
            }

        } else if (positionY < 0) {

            if (startNum > 1) {
                this.moveToPage(startNum, startNum - 1);
            } else if (startNum <= 1) {
                this.hintOnEdge(startNum);
            }
        }


    }


    hintOnEdge(startNum) {
        let startObj = this.refs['page' + startNum];
        let windowHeight = document.documentElement.clientHeight;

        startObj.setState({ toggleTop: 100, toggleBottom: 100 });



        this.hintTimer = setTimeout(
            () => {

                startObj.setState({ toggleTop: 0, toggleBottom: 0 });
                this.hintTimer && clearTimeout(this.hintTimer);
            },
            200
        );



    }



    setOnclickListener() {
        let arrowDown = ReactDOM.findDOMNode(this.downArrow);
        let arrowUp = ReactDOM.findDOMNode(this.upArrow);

        let page1 = this.refs['page1'];

        if (page1.card1) {
          
            page1.card1.refs['cardButton'].onclick = () => { this.moveToPage(1, 2) };
            page1.card2.refs['cardButton'].onclick = () => { 
                this.moveToPage(1, 2) 
                this.moveToPage(2, 3) 
            };
            page1.card3.refs['cardButton'].onclick = () => { 
                this.moveToPage(1, 2)
                this.moveToPage(2, 3) 
                this.moveToPage(3, 4) 
            
            };

        }



        switch (this.state.currentState) {
            case 1:

                arrowDown.onclick = () => { this.moveToPage(1, 2) };
                break;
            case 2:

                arrowDown.onclick = () => { this.moveToPage(2, 3) };
                arrowUp.onclick = () => { this.moveToPage(2, 1) };
                break;
            case 3:

                arrowDown.onclick = () => { this.moveToPage(3, 4) };
                arrowUp.onclick = () => { this.moveToPage(3, 2) };
                break;
            case 4:

                arrowUp.onclick = () => { this.moveToPage(4, 3) };
                break;

        }
    }



    componentWillUpdate() {

    }


    onWindowResize() {

      
        this.resizeTimer = setTimeout(
            () => {

                if (this.state) {


                  // console.log(this.refs.page1.card1['cardButton'].clientHeight)
                    this.moveToPage(this.state.currentState, this.state.currentState);

                    this.setCardSize()

                }

                this.resizeTimer && clearTimeout(this.resizeTimer);
            },
            100
        );


    }

    setCardSize(){
     
       let cardHeight = this.refs.page1.card1.refs['cardButton'].clientHeight;
       let cardWidth = this.refs.page1.card1.refs['cardButton'].clientWidth;
    
   

       

        let  moveCard = this.refs.page2.moveCard;


        moveCard.setState({

            cardHeight:cardHeight+20,
            cardWidth:cardWidth+20

        })
      
    }

    componentDidMount() {


        window.onmousewheel = () => this.onMouseWheel(event.deltaY)
        window.addEventListener('resize', this.onWindowResize.bind(this))

        //set listener to arrow
        this.setOnclickListener();
        //set card size
        this.setCardSize();

        //move page from left to right
        let startObj = this.refs['page' + 1];
        startObj.setState({ toggleLeft: 0 })

        
     






    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize.bind(this))
    }






    render() {

        const styles = {
            mask: {

                width: '100%',
                height: '100vh',
                backgroundColor: 'darkcyan',
                display: 'flex',
                justifyContent: 'center',

                overflow: 'hidden',
                position: 'absolute',
                zIndex: '-100',
            },
            downPanel: {
                position: 'absolute',
                bottom: '10px',




            },
            downPanelHidden: {
                position: 'absolute',
                bottom: '10px',



                visibility: 'hidden',


            },
            upPanel: {
                position: 'absolute',
                top: '0',




            },
            upPanelHidden: {
                position: 'absolute',
                top: '0',


                visibility: 'hidden',



            }, navbar: {
                position: 'absolute',



                right: '150px',
                height: '100%',
                zIndex: '2000',

            }


        }

        return (


            <div style={{ height: "100%" }}>

                <div id="navbar" style={styles.navbar}>
                    <div style={this.state.currentState == 1 ? styles.upPanelHidden : styles.upPanel}>
                        <UpArrow ref={upArrow => this.upArrow = upArrow} />

                    </div>
                    <div style={this.state.currentState == 4 ? styles.downPanelHidden : styles.downPanel}>
                        <DownArrow ref={downArrow => this.downArrow = downArrow} />
                    </div>
                </div>

                <Home ref="page1" />
                <ContentPage ref="page2" color='rgba(0,0,0,0.5)' />
                <ResourcePage ref="page3" color='rgba(0,0,0,0.5)' />
                <Contact ref="page4" color = 'rgba(238, 203, 173,0.9)'/>

 
                <div style={styles.mask}></div>


            </div>


        );
    }
}