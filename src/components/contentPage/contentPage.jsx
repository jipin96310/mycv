import React from 'react';
import './style.css';
import { Motion, spring } from 'react-motion';
import MoveCard from '../moveCard/moveCard.jsx'
import Arrow from '../arrow/arrow.jsx';
import UpArrow from '../arrow/uparrow.jsx';
import ContentCard from '../contentCard/contentCard.jsx';
import { VelocityComponent } from 'velocity-react';
import Circle from '../circle/circle.jsx';
import metaData from '../../api/metadata.js'
class Header extends React.Component {



    constructor() {
        super()
        this.state = {

            currentY: 0,
            currentLeft: -300,
            currentRight: -300,
            currentTop: -300
        }

    }

    componentDidMount() {


        //console.log(metaData);
        this.setChooseColorListener()



    }
    componentWillUpdate(nextProps, nextState) {

        if (nextState.currentY === 0) {
            this.moveOut();

        } else {
            this.moveIn();
        }



    }

    setChooseColorListener() {
        let circles = [this.circle1.refs['choosecircle'], this.circle2.refs['choosecircle'], this.circle3.refs['choosecircle']]
        //default color


        circles.map((item, i) => {

            switch (i) {
                case 0:
                    item.onclick = () => {

                        this.circle1.setState({ selected: true })
                        this.circle2.setState({ selected: false, hover: false });
                        this.circle3.setState({ selected: false, hover: false });
                        this.circle1.drawDown(); this.circle2.drawDown(); this.circle3.drawDown();
                        this.setColorStyle('blue')
                    }

                    break;
                case 1:
                    item.onclick = () => {
                        this.circle2.setState({ selected: true })
                        this.circle1.setState({ selected: false, hover: false });
                        this.circle3.setState({ selected: false, hover: false });
                        this.circle1.drawDown(); this.circle2.drawDown(); this.circle3.drawDown();
                        this.setColorStyle('green')
                    }

                    break;
                case 2:
                    item.onclick = () => {
                        this.circle3.setState({ selected: true })

                        this.circle1.setState({ selected: false, hover: false });
                        this.circle2.setState({ selected: false, hover: false });
                        this.circle1.drawDown(); this.circle2.drawDown(); this.circle3.drawDown();
                        this.setColorStyle('white')
                    }

                    break;

            }

        })
    }


    moveIn() {

        if (this.state.currentLeft != 0) {


            this.timer = setTimeout(
                () => {

                    this.setState({

                        currentLeft: 0,
                        currentRight: 0,
                        currentTop: 0,

                    })
                    this.timer && clearTimeout(this.timer);
                },
                10);
        }

    }
    moveOut() {
        if (this.state.currentLeft != -300 && this.state.currentY == 0) {
            this.timer = setTimeout(
                () => {

                    this.setState({

                        currentLeft: -300,
                        currentRight: -300,
                        currentTop: -300,

                    })
                    this.timer && clearTimeout(this.timer);
                },
                10
            );
        }

    }




    setColorStyle(colorName) {

        const colorChoices = {
            white: ['rgba(238, 203, 173,0.9)', 'rgba(238, 203, 173,0.9)', 'rgba(238, 203, 173,0.9)', 'rgba(238, 203, 173,0.9)'],
            blue: ['#912CEE', '#912CEE', '#912CEE', '#912CEE',],
            green: ['#3CB371', '#3CB371', '#3CB371', '#3CB371']



          
     


        }
        // console.log(colorChoices[colorName])
        if (colorChoices[colorName])
            this.moveCard.setState({
                allColors: colorChoices[colorName],

            })

    }



    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }



    render() {




        const styles = {
            header: {

                width: '100%',
                backgroundColor: this.props.color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'absolute',
                zIndex: '1000',
            }
            , headertextL: {
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'left',


            }
            , headertextC: {
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'center',


            }
            , headertextR: {
                position: 'relative',
                width: '100%',
                height: '100%',
                textAlign: 'right'

            },
            smallbar: {
                position: 'absolute',
                right: '20px',
                top: '10px'
            }
        }



        return (
            <Motion style={{ height: spring(this.state.currentY), left: spring(this.state.currentLeft), right: spring(this.state.currentRight), top: spring(this.state.currentTop) }}>
                {({ height, left, right, top }) =>
                    <div ref={header => this.header = header} className="header" style={Object.assign({}, styles.header, { height })} >


                        <div className="container" style={{ justifyContent: 'center', width: '100%', }}>
                            <div class="row justify-content-start"  >

                                <div style={Object.assign({}, styles.headertextL, { left })}>

                                    <VelocityComponent
                                        animation={{ opacity: this.state.onPage ? 1 : 0 }} duration={1000}
                                    >
                                        <MoveCard ref={moveCard => this.moveCard = moveCard} width="200" height="200" metaData={metaData.contentPage} />


                                        <div style={styles.smallbar}>
                                            <Circle ref={circle1 => this.circle1 = circle1} bgColor="#912CEE" selected="true" />
                                            <Circle ref={circle2 => this.circle2 = circle2} bgColor="#3CB371" selected="false" />
                                            <Circle ref={circle3 => this.circle3 = circle3} bgColor="#EECBAD"  selected="false" />
                                        </div>
                                    </VelocityComponent>



                                </div>



                            </div>
                        </div>


                    </div>
                }
            </Motion>
        );
    }
}
export default Header;


/*


                            <div  style={Object.assign({}, styles.headertextC, { top })}>
                                <MoveCard />
                                </div >

                          

                            <div  style={Object.assign({}, styles.headertextR, { right })}>
                                <MoveCard />


                            </div>
*/