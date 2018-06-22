import React from 'react';

import { Motion, spring } from 'react-motion';
import { VelocityComponent } from 'velocity-react';
import Arrow from '../arrow/arrow.jsx';
import UpArrow from '../arrow/uparrow.jsx';
import Circle from '../circle/circle.jsx';
import ContentCard from '../contentCard/contentCard.jsx';


class ResourcePage extends React.Component {



    constructor() {
        super()
        this.state = {

            currentY: 0,

        }

    }
    /*
    setCardSize() {



        let contentCard1 = this.refs.page3.contentCard1;
        let contentCard2 = this.refs.page3.contentCard2;
        let contentCard3 = this.refs.page3.contentCard3;

        contentCard1.setState({ cardHeight: cardHeight + 20, cardWidth: cardWidth + 20 })
        contentCard2.setState({ cardHeight: cardHeight + 20, cardWidth: cardWidth + 20 })
        contentCard3.setState({ cardHeight: cardHeight + 20, cardWidth: cardWidth + 20 })



     
    }
    */
   setColorStyle(colorName) {

    const colorChoices = {
        blue: '#912CEE',
        green: '#3CB371',
        white: 'rgba(238, 203, 173,0.9)'


    }
    // console.log(colorChoices[colorName])
    if (colorChoices[colorName])
        this.contendCard1.setState({
            singleColor: colorChoices[colorName],

        })
        this.contendCard2.setState({
            singleColor: colorChoices[colorName],

        })
        this.contendCard3.setState({
            singleColor: colorChoices[colorName],

        })

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

    componentDidMount() {

        this.setChooseColorListener()



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
                zIndex: '500',
            },
            smallbar: {
                position: 'absolute',
                right: '20px',
                top: '10px'
            }

        }



        return (
            <Motion style={{ height: spring(this.state.currentY), left: spring(this.state.currentLeft), right: spring(this.state.currentRight), top: spring(this.state.currentTop) }}>
                {({ height, left, right, top }) => <div ref={header => this.header = header} className="header" style={Object.assign({}, styles.header, { height })} >
                    <VelocityComponent
                        animation={{ opacity: this.state.onPage ? 1 : 0 }} duration={1000}
                    >
                        <div class="container" style={{ justifyContent: 'center', width: '100%' , position: 'absolute'}}>

                            <div class="row justify-content-start" style={{ }}>

                                <div class="col-4" > <ContentCard ref={contendCard1 => this.contendCard1 = contendCard1} stylename="cube" type = "1"/> </div>
                                <div class="col-4"  > <ContentCard ref={contendCard2 => this.contendCard2 = contendCard2} stylename="cube" type = "2"/> </div>

                               
                            </div>
                            <div style={{ display: 'inline-block', height: '20px' }}></div>
                            <div class="row justify-content-start"  >
                                <div class="col-8" > <ContentCard ref={contendCard3 => this.contendCard3 = contendCard3} stylename="rectangle" type = "3"/> </div>

                            </div>
                            <div style={styles.smallbar}>
                                    <Circle ref={circle1 => this.circle1 = circle1} bgColor="#912CEE" selected="false" />
                                    <Circle ref={circle2 => this.circle2 = circle2} bgColor="#3CB371" selected="true" />
                                    <Circle ref={circle3 => this.circle3 = circle3} bgColor="#EECBAD" selected="false" />
                                </div>


                        </div>
                         
                    </VelocityComponent>



                </div>
                }
            </Motion>
        );
    }
}
export default ResourcePage;