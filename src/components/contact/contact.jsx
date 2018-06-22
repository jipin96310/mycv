import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import Api from '../../api/api';
import { VelocityComponent } from 'velocity-react';
import './style.css';
class Contact extends Component {

    constructor() {
        super()
        this.state = {
            currentY: 0,
            toggleBottom: 0,
            successTriggered: false
        }

    }



    onSubmit() {
        let elements = []
        let tagElements = this.contactForm

        for (var j = 0; j < tagElements.length; j++) {
            elements.push(tagElements[j].value);

        }

        if (elements[0] && elements[1] && elements[2]) {
            let bundleData = {
                actionName: "contactMe",
                name: elements[0],
                companyName: elements[1],

                contactWay: elements[2],
                job: elements[3] || "none",
                extra: elements[4] || "none"


            }

            let res = Api.contactMe(bundleData);

            if (res) {

                res.then((jsondata) => {
                    if (jsondata.constructor == Array) {
                        if (jsondata[0].success) {

                            this.alertButton.innerText = "发送成功";
                            this.alertButton.className = "alert alert-success";
                           this.showAlert()

                           for (var index in tagElements) {
                           tagElements[index].value=""
                            
                        }
                          

                        }
                    }

                })

            }

        } else {
           this.alertButton.innerText = "请填写完整数据";
            this.alertButton.className = "alert alert-danger";
            this.showAlert()
        }

    }

    showAlert() {
        this.setState({ successTriggered: true })

        this.timer = setTimeout(
            () => {

                this.setState({

                    successTriggered: false,


                })
                this.timer && clearTimeout(this.timer);
            },
            1000
        );

    }




    render() {

        const styles = {
            about: {

                width: '100%',
                backgroundColor: this.props.color,
               
                alignItems: 'center',
                overflow: 'hidden',
                position: 'absolute',
                zIndex: '0',
            }

        }
     

    
        return (
            <Motion style={{ height: spring(this.state.currentY), bottom: spring(this.state.toggleBottom) }}>
                {({ height, bottom }) =>




                    <div className="about-wrapper" style={Object.assign({}, styles.about, { height, bottom })} >






                        <div class="container" style={{ justifyContent: 'center', width: '100%', position: 'absolute',left:'0',right:'0',top:'100px' }}>

                            <div class="row justify-content-start" style={{}}>

                                <div class="col-4" >   <div style={{}}><h2>联系方式</h2></div> </div>
                                <div class="col-4"  >  </div>


                            </div>
                            <div style={{ display: 'inline-block', height: '20px' }}></div>
                            <div class="row justify-content-start"  >



                                <div class="col-4" >  <div className="about-text">

                                    <h3>方式1：</h3>
                                    <div class="form-group">
                                        <label ><i class="fa fa-qq fa-lg"></i> QQ：</label>
                                        <p>375543979</p>
                                    </div>
                                    <div class="form-group">
                                        <label ><i class="fa fa-wechat fa-lg"></i> 微信：</label>
                                        <p>18667345163</p>
                                    </div>
                                    <div class="form-group">
                                        <label ><i class="fa fa-phone fa-lg"></i> 手机：</label>
                                        <p>18667345163</p>
                                    </div>




                                </div> </div>
                                <div class="col-4"  >
                                    <div className="about-text">
                                        <div className={this.props.className}>
                                            <h3>方式2：</h3>
                                            <form ref={contactForm => this.contactForm = contactForm}>


                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">您的称呼</label>
                                                    <input type="text" class="form-control" ></input>
                                                </div>

                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">贵公司名称</label>
                                                    <input type="text" class="form-control" ></input>
                                                </div>

                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">联系方式</label>
                                                    <input type="text" class="form-control" placeholder="QQ/微信/电话/E-Mail"></input>
                                                </div>

                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">岗位 (选填)</label>
                                                    <input type="text" class="form-control" placeholder="贵公司大致的岗位需求"></input>

                                                </div>

                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">附言 (选填)</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <div type="submit" class="btn btn-primary" onClick={() => this.onSubmit()}>提交</div>
                                                    <VelocityComponent
                                                        animation={{ opacity: this.state.successTriggered ? 1 : 0 }} duration={300}
                                                    >
                                                        <div ref={alertButton => this.alertButton = alertButton} class="alert alert-success" role="alert" style={{ opacity: 0 }}>
                                                            发送成功
                                                       </div>

                                                    </VelocityComponent>
                                                </div>

                                            </form>





                                        </div></div> </div>


                            </div>



                        </div>




                    </div>

                }
            </Motion>
        )
    }
}
export default Contact;