import React from 'react';
import { Motion, spring } from 'react-motion';
import range from 'lodash.range';
import LevelBar from '../levelBar/levelBar.jsx'
import './style.css'


const springSetting1 = { stiffness: 180, damping: 10 };
const springSetting2 = { stiffness: 120, damping: 17 };
function reinsert(arr, from, to) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}


const [count] = [4];
// indexed by visual position


export default class MoveCard extends React.Component {
  constructor(props) {
    super(props);





    this.state = {
      mouseXY: [0, 0],
      mouseCircleDelta: [0, 0], // difference between mouse and circle pos for x + y coords, for dragging
      lastPress: null, // key of the last pressed component
      isPressed: false,
      order: range(count), // index: visual position. value: component key/id
      cardWidth: '200',
      cardHeight: '200',
      allColors: ['#912CEE', '#912CEE', '#912CEE', '#912CEE'],
      className: 'moveCard-ball-blue'
    };
  };

  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);


    // window.addEventListener()
  };





  handleTouchStart = (key, pressLocation, e) => {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  };

  handleTouchMove = (e) => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  handleMouseMove = ({ pageX, pageY }) => {
    const { order, lastPress, isPressed, mouseCircleDelta: [dx, dy] } = this.state;
    if (isPressed) {
      const mouseXY = [pageX - dx, pageY - dy];
      const col = clamp(Math.floor(mouseXY[0] / this.state.cardWidth), 0, 2);
      const row = clamp(Math.floor(mouseXY[1] / this.state.cardHeight), 0, Math.floor(count / 3));
      const index = row * 3 + col;
      const newOrder = reinsert(order, order.indexOf(lastPress), index);
      this.setState({ mouseXY, order: newOrder });
    }
  };

  handleMouseDown = (key, [pressX, pressY], { pageX, pageY }) => {
    this.setState({
      lastPress: key,
      isPressed: true,
      mouseCircleDelta: [pageX - pressX, pageY - pressY],
      mouseXY: [pressX, pressY],

    });
  };

  handleMouseUp = () => {
    this.setState({ isPressed: false, mouseCircleDelta: [0, 0] });
  };

  render() {
    let currentData = this.props.metaData;
    let dataArray = [];
    let indexArray = [];


    //feeding data
    for (let index in currentData) {
      dataArray.push(currentData[index]);
      indexArray.push(index);
    }


    const [width, height] = [this.state.cardWidth, this.state.cardHeight];
    const { order, lastPress, isPressed, mouseXY } = this.state;
    const layout = range(count).map(n => {

      const row = Math.floor(n / 2);
      const col = n % 2;
      return [width * col, height * row];
    });
    return (
      <div className="moveCard-container" >
        {order.map((_, key) => {
          let style;
          let x;
          let y;
          let hardcodeContent;
          const visualPosition = order.indexOf(key);
          if (key === lastPress && isPressed) {
            [x, y] = mouseXY;
            style = {
              translateX: x,
              translateY: y,
              scale: spring(1.5, springSetting1),
              boxShadow: spring((x - (3 * width - 50) / 2) / 15, springSetting1),
            };
          } else {
            [x, y] = layout[visualPosition];
            style = {
              translateX: spring(x, springSetting2),
              translateY: spring(y, springSetting2),
              scale: spring(1, springSetting1),
              boxShadow: spring((x - (3 * width - 50) / 2) / 15, springSetting1),
            };
          }


          //hardcode content to  save some time
          switch (key) {
            case 0:
              hardcodeContent = <div style={{ display: 'flex', width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',color:'#FFFAFA' }}>
                <div style={{ position: '', width: '90%', height: '90%', margin: "auto", top: '0', left: '0', right: '0' }}>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div style={{ fontSize: '20px' ,fontWeight:'bold'}}>>>>基本信息</div>

                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div class="preText">姓名</div> <div class="bodyText">孙肇珩</div>
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div class="preText">性别</div> <div class="bodyText">男</div>
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div class="preText">出生地</div> <div class="bodyText">浙江嘉兴海盐</div>
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div class="preText">居住地</div> <div class="bodyText">浙江杭州余杭</div>
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div class="preText">身份</div> <div class="bodyText">群众</div>
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>>>>求职意向</div>

                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div class="preText">意向岗位</div> <div class="bodyText">WEB前端后端、Nodejs相关开发岗位、Android相关开发岗位</div>
                  </div>


                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div class="preText">意向城市</div> <div class="bodyText">杭州、上海、深圳</div>
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div class="preText">入职时间</div> <div class="bodyText">7月</div>
                  </div>


                </div>
              </div>
              break;
            case 1:
              hardcodeContent = <div style={{ display: 'flex', width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',color:'#FFFAFA' }}>
                <div style={{ position: '', width: '90%', height: '90%', margin: "auto", top: '0', left: '0', right: '0' }}>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div style={{ fontSize: '20px',fontWeight:'bold' }}>>>>相关技能</div>

                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>---编程语言</div>

                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="JAVA" level="80" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="JS" level="75" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="SWIFT" level="60" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="C++" level="60" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <div style={{ fontSize: '20px' }}>---其他技术</div>

                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="非关系型数据库" level="80" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="关系型数据库" level="70" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="SQL" level="75" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="Node.js" level="70" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="React.js" level="70" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="Android Develope" level="75" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="IOS Develope" level="60" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="Linux" level="60" />
                  </div>
                  <div class="row" style={{ margin: '0px auto', width: '100%' }}>
                    <LevelBar title="Cloud Computering" level="65" />
                  </div>
              
       
                </div>
              </div>
              break
            case 2:
              hardcodeContent = <div style={{ display: 'flex', width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', }}>
                <div style={{ position: '', width: '90%', height: '90%', margin: "auto", top: '0', left: '0', right: '0' }}>
                  <div style={{ fontSize: '20px',color:'#FFFAFA',fontWeight:'bold' }}>>>>教育背景</div>
                  <div class="row cardRadius" style={{ margin: '5px auto', width: '100%' }}>

                    <div class="preText">硕士</div> <div class="bodyText">Stevens Institute of Techbology</div>
                    <div class="preText"></div> <div class="bodyText" style={{ fontSize: '14px' }}>2018 US NEWS 全美69名</div>
                    <div class="preText">专业</div> <div class="bodyText">Computer Science</div>
                    <div class="preText">时间</div> <div class="bodyText">2016-2018</div>
                  </div>
                  <div class="row cardRadius" style={{ margin: '5px auto', width: '100%' }}>

                    <div class="preText">本科</div> <div class="bodyText">绍兴文理元培学院</div>
                    <div class="preText">专业</div> <div class="bodyText">计算机科学</div>
                    <div class="preText">时间</div> <div class="bodyText">2012-2016</div>
                  </div>
                  <div class="row cardRadius" style={{ margin: '5px auto', width: '100%' }}>

                    <div class="preText">高中</div> <div class="bodyText">海盐高级中学</div>
                    <div class="preText">专业</div> <div class="bodyText">/</div>
                    <div class="preText">时间</div> <div class="bodyText">2009-2012</div>
                  </div>



                </div>
              </div>
              break;
            case 3:
              hardcodeContent = <div style={{ display: 'flex', width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',color:'#FFFAFA'}}>
                <div style={{ position: '', width: '90%', height: '90%', margin: "auto", top: '0', left: '0', right: '0' }}>
                  <div style={{ fontSize: '20px' }}>>>>实习经验</div>
                  <div class="row cardRadius" style={{ margin: '5px auto', width: '100%',color:'#303030' }}>

                    <div class="preText">公司</div> <div class="bodyText">龙即信息技术有限公司</div>

                    <div class="preText">时间</div> <div class="bodyText">2016.8-2016.9</div>
                    <div class="preText">实习内容</div> <div class="bodyText">java后端相关</div>
                  </div>



                </div>
              </div>
              break;


          }





          return (
            <Motion key={key} style={style}>
              {({ translateX, translateY, scale, boxShadow }) =>
                <div
                  onMouseDown={this.handleMouseDown.bind(null, key, [x, y])}
                  onTouchStart={this.handleTouchStart.bind(null, key, [x, y])}
                  className={this.state.className}
                  style={{
                    backgroundColor: this.state.allColors[key],

                    WebkitTransform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                    transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                    zIndex: key === lastPress ? 5000 : visualPosition,
                    height: height - 20,
                    width: width - 20,
                    position: 'absolute',

                    // boxShadow: `${boxShadow}px 5px 5px rgba(0,0,0,0.5)`,
                  }}
                >

                  {hardcodeContent}

                </div>
              }
            </Motion>
          );
        })}
      </div>
    );
  };
}