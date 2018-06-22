import React from 'react';
import './style.css'
import { Motion, spring } from 'react-motion';

import { VelocityComponent } from 'velocity-react';
import ReactDOM from 'react-dom';


class ContentCard extends React.Component {


    constructor(props) {

        super(props)


      
        var temp = (new Array(9)).fill("#FFD700")

        this.state = {
            onTouch: false,
            singleColor: "#3CB371",
            fontColor: "#FFFAFA",
            hrefColor:temp
        }

    }
    componentDidMount() {





    }

    onMouseEnter() {
        this.setState({ onTouch: true })

    }

    onMouseLeave() {
        this.setState({ onTouch: false })
    }

    openNewWindow(url) {

        window.open(url)
    }



    hrefOnMouseEnter(num){
       this.state.hrefColor[num] = "#FFFAFA";
    }

    hrefOnMouseLeave(num){
      
           

            this.state.hrefColor[num] = "#FFD700";
    }

    render() {

        let styles = {

            cube: {
                width: "100%",
                height: "0",
                paddingBottom: "100%",
                background: this.state.singleColor,
                position: 'relative',
                overflowY: 'auto', overflowX: 'hidden',
                cursor: 'default'
            },
            rectangle: {
                width: "100%",
                height: "0",
                paddingBottom: "50%",
                background: this.state.singleColor,
               
                cursor: 'default'
            }
        }
        let hardCodeContent;


        //use hardcode to save some time
        //  console.log(this.props.stylename)

        hardCodeContent = {
            1:
                <div style={{ position: 'absolute', width: '90%', height: '90%', margin: "auto", top: '0', left: '0', right: '0', bottom: '0', color:"#FFFAFA", overflowY: 'auto', overflowX: 'hidden',}}>
                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div style={{ fontSize: '20px',color:'#FFFAFA',fontWeight:'bold' }}>>>>相关材料</div>

                    </div>
                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div style={{ fontSize: '20px',color:'#FFFAFA' }}>---硕士</div>

                    </div>

                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div class="hreftext" onMouseEnter={()=>this.hrefOnMouseEnter(0)} onMouseLeave={()=>this.hrefOnMouseLeave(0)} onClick={() => this.openNewWindow('image/master-degree.jpg')} style={{color:this.state.hrefColor[0]}}>点击查看</div> <div class="bodyText" >学位证</div>
                    </div>
                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div class="hreftext"  onMouseEnter={()=>this.hrefOnMouseEnter(1)} onMouseLeave={()=>this.hrefOnMouseLeave(1)} onClick={() => this.openNewWindow('image/degree-proof.jpg')} style={{color:this.state.hrefColor[1]}}>点击查看</div> <div class="bodyText">学位证明</div>
                    </div>
                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div class="hreftext"  onMouseEnter={()=>this.hrefOnMouseEnter(2)} onMouseLeave={()=>this.hrefOnMouseLeave(2)} onClick={() => this.openNewWindow('image/transcript.jpg')} style={{color:this.state.hrefColor[2]}}>点击查看</div> <div class="bodyText">成绩单</div>
                    </div>
                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div style={{ fontSize: '20px' }}>---本科</div>

                    </div>

                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div class="hreftext"  onMouseEnter={()=>this.hrefOnMouseEnter(3)} onMouseLeave={()=>this.hrefOnMouseLeave(3)} onClick={() => this.openNewWindow('image/bachelor.jpg')} style={{color:this.state.hrefColor[3]}}>点击查看</div>  <div class="bodyText">学位证</div>
                    </div>
                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div class="hreftext"  onMouseEnter={()=>this.hrefOnMouseEnter(4)} onMouseLeave={()=>this.hrefOnMouseLeave(4)} onClick={() => this.openNewWindow('image/graduation.jpg')} style={{color:this.state.hrefColor[4]}}>点击查看</div> <div class="bodyText">毕业证</div>
                    </div>



                </div>
            ,
            2: 
             <div  style={{ position: 'absolute', width: '90%', height: '90%', margin: "auto", top: '0', left: '0', right: '0', bottom: '0',color:"#FFFAFA" , overflowY: 'auto', overflowX: 'hidden',}}>
            <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                <div style={{ fontSize: '20px' ,fontWeight:'bold'}}>>>>相关资源</div>
                <div style={{ fontSize: '16px' }}>---一些课余做的小项目源码</div>
                <div style={{ fontSize: '14px',color:"#FF3030" }}>部分Github项目请使用edge访问，近期chrome有时无法正常访问Github</div>
            </div>
          

            <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                <div class="hreftext"  onMouseEnter={()=>this.hrefOnMouseEnter(5)} onMouseLeave={()=>this.hrefOnMouseLeave(5)}   onClick={() => this.openNewWindow('https://github.com/jipin96310/mycv')} style={{color:this.state.hrefColor[5]}}>点击查看</div> <div class="bodyText">本站源码  <i className = "fa fa-github fa-lg"></i></div>
            </div>
            <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                <div class="hreftext" onMouseEnter={()=>this.hrefOnMouseEnter(6)} onMouseLeave={()=>this.hrefOnMouseLeave(6)}  onClick={() => this.openNewWindow('https://github.com/jipin96310/game-website')} style={{color:this.state.hrefColor[6]}} >点击查看</div> <div class="bodyText">Node.js +Express 网站 <i className = "fa fa-github fa-lg"></i></div>
            </div>

           
            <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                <div class="hreftext"  onMouseEnter={()=>this.hrefOnMouseEnter(7)} onMouseLeave={()=>this.hrefOnMouseLeave(7)} onClick={() => this.openNewWindow('https://github.com/jipin96310/66days')} style={{color:this.state.hrefColor[7]}}>点击查看</div>  <div class="bodyText">微信小游戏 <i className = "fa fa-github fa-lg"></i></div>
            </div>
           
            <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                <div class="hreftext"  onMouseEnter={()=>this.hrefOnMouseEnter(8)} onMouseLeave={()=>this.hrefOnMouseLeave(8)} onClick={() => this.openNewWindow('image/qrcode.jpg')} style={{color:this.state.hrefColor[8]}}>查看二维码</div> <div class="bodyText">微信小程序(因内容原因，无法上架)</div>
            </div>



        </div>
            ,
            3:
                <div style={{ position: 'absolute', width: '90%', height: '90%', margin: "auto", top: '0', left: '0', right: '0', bottom: '0', overflowY: 'auto', overflowX: 'hidden',color:"#FFFAFA" }}>

                    <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                        <div style={{ fontSize: '16px' }}>本人是一名美国斯蒂文斯理工CS硕士生毕业生，预计今年(2018)6月毕业，7-8月回到国内。擅长语言Java，JavaScript，并且掌握C++\Swift以及CSS/Html等语言。熟练理解掌握DP、DFS、BFS、BackTracking等各类算法，以及树、链表等数据结构类型。自行开发过几个Android app，微信小程序，微信小游戏以及几个nodejs的web项目。熟练掌握Postgresql\MySQL等关系型数据库以及非关系型数据库MongoDB。熟练掌握AWS,腾讯云等服务器配置使用，对于互联网前端后端以及数据库数据结构等相关知识都有所了解掌握。
                                                               此外本人拥有扎实的英语语言基础，大学四六级加雅思加GRE，可以满足企业的国际化需求。
                                                    本人乐于实践，有极强的动手能力和逻辑能力，可以快速上手一切项目。</div>

                    </div>
                </div>






        }









        return (







            <Motion >
                {({ translateX, translateY, scale, boxShadow }) =>
                    <div
                        className = "contentCard"
                        style={
                            styles[this.props.stylename]
                            // boxShadow: `${boxShadow}px 5px 5px rgba(0,0,0,0.5)`,

                        }
                    >

                        {hardCodeContent[this.props.type]}

                    </div>
                }
            </Motion >


        );
    }

}

export default ContentCard;




