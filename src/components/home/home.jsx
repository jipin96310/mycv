import React, { Component } from 'react';
import Arrow from '../arrow/arrow.jsx';
import { Motion, spring } from 'react-motion';
import App from '../../App.js'
import { VelocityComponent } from 'velocity-react';
import Api from '../../api/api';

import ButtonCard from '../buttonCard/buttonCard.jsx';
import MessageCard from '../messageCard/messageCard.jsx'
import './style.css';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            toggleTop: 0,
            currentY: document.documentElement.clientHeight,
            toggleLeft: -document.documentElement.clientWidth,
            onPage: false,
            data1: ['基本信息', '求职意向', '相关技能', "教育背景", "实习经验"],
            data2: ['相关材料', '相关资源', '个人简评'],
            data3: ['方法1', '方法2'],


        }

        // let res = Api.getAllNotes();

        //  res.then((ss)=>{  console.log( ss)})

    }

    appear() {
        if (this.state.onPage == false) {
            this.timer = setTimeout(
                () => {

                    this.setState({

                        onPage: true,


                    })
                    this.timer && clearTimeout(this.timer);
                },
                10
            );
        }
    }


    showAlert(alertType) {

        this.card4.setState({ successTriggered: true,alertType:alertType })

        this.timer2 = setTimeout(
            () => {

                this.card4.setState({

                    successTriggered: false,
                  

                })
                this.timer2 && clearTimeout(this.timer2);
            },
            1000
        );

    }


    fetchAllNotes() {
        let Card4 = this.card4;

        let promiseRes = Api.getAllNotes();
        let notes = [];
        promiseRes.then((res) => {

            if (res && res.constructor == Array) {
                for (let index in res) {

               

                        notes.push(res[index])

                    


                }


                Card4.setState({ notes: notes })
            } else {

                console.log('error res', res)
            }


        })

    }


    addSubmitOnclickListener() {
        let submitButton = this.card4.refs['buttonSubmit'];
        let inputArea = this.card4.refs['inputArea'];

        let submitButton2 = this.card4.refs['buttonSubmit2'];
        let inputArea2 = this.card4.refs['inputArea2'];



        submitButton.onclick = () => {




            if (inputArea.value) {




                this.card4.setState({ isEdited: true })


            } else {
                this.showAlert(0);
            }



        }



        submitButton2.onclick = () => {
            let dataBundle = {
                actionName: "addOne",
                companyName: inputArea2.value || "匿名",
                mainContent: inputArea.value

            }
            let res = Api.addNote(dataBundle);



            inputArea2.value = ""
            inputArea.value = ""
            if (res)
                res.then((ss) => {

                    if (ss && ss.constructor == Array && ss[0].status) {

                        this.fetchAllNotes();
                        this.card4.setState({ isEdited: false })
                        this.card4.refs['cardContent'].scrollTo(0,0);
                        this.showAlert(2);
                    } else {

                        this.showAlert(1);
                    }



                })
        }

    }



    componentDidMount() {
        this.appear()

        this.addSubmitOnclickListener();
        this.fetchAllNotes();
    }

    render() {
        const styles = {
            home: {

                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'absolute',
                zIndex: '1500',
                opactiy: 0
            }

        }



        return (






            <Motion style={{ height: spring(this.state.currentY), top: spring(this.state.toggleTop), left: spring(this.state.toggleLeft) }}>
                {({ height, top, left }) =>
                    <div className="home" style={Object.assign({}, styles.home, { height, top, left })} >

                        <VelocityComponent
                            animation={{ opacity: this.state.onPage ? 1 : 0 }} duration={1000}
                        >
                            <div class="container" style={{ justifyContent: 'center', width: '100%', opacity: '0' }}>

                                <div class="row justify-content-start">

                                    <div class="col-4" ><ButtonCard ref={card1 => this.card1 = card1} id="cardItem" title="Page I" headTitle = "个人信息" color="#912CEE" contentdata={this.state.data1} stylename = "fa fa-info-circle fa-5x"/></div>
                                    <div class="col-4"  ><ButtonCard ref={card2 => this.card2 = card2} id="cardItem" title="Page II" headTitle = "自述与作品" color="#3CB371" contentdata={this.state.data2} stylename = "fa fa-file-code-o fa-5x"/></div>
                                </div>
                                <div style={{ display: 'inline-block', height: '20px' }}></div>
                                <div class="row justify-content-start"  >
                                    <div class="col-4" ><ButtonCard ref={card3 => this.card3 = card3} id="cardItem" title="Page III" headTitle = "联系方式" color="rgba(238, 203, 173,0.9)" contentdata={this.state.data3} stylename = "fa fa-address-book fa-5x" /></div>

                                    <div class="col-4" >
                                        <MessageCard ref={card4 => this.card4 = card4} id="cardItem" title="GuestBook" color="#ebebeb" />
                                    </div>


                                </div>
                            </div>
                        </VelocityComponent>





                    </div>
                }
            </Motion>


        )
    }
}
export default Home;