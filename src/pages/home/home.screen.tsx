import React from 'react';
import { Link } from 'react-router-dom'
import { Col, Row, Button, UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import { VscLock } from 'react-icons/vsc';
import { AiOutlineArrowRight } from 'react-icons/ai';


import mark1Image from '../../assets/images/1.png';
import mark2Image from '../../assets/images/1.png';
import mark3Image from '../../assets/images/3.png';
import mark4Image from '../../assets/images/4.png';
import mark5Image from '../../assets/images/5.png';
import { HomeStyleWrapper } from './style';

const HomeScreen = () => {
  return (
    <HomeStyleWrapper>
      <Row className="hero-panel">
        <Row className="title">
          <p>SAFE / SECURE / PRIVATE</p>
          <h1>The future of<br /> finance is DeFi</h1>
          <div className="button-group">
            <Button class="start-free">START FOR FREE <AiOutlineArrowRight/></Button>
            <a href="#learn_more"><Button class="learn-more">LEARN MORE <AiOutlineArrowRight/></Button></a>
          </div>
        </Row>
        <Row className="powerful-features" id="learn_more">
          <Col lg={4} className="title">
            <h1>Powerful<br />features</h1>
            <p>Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum rhoncus convallis.</p>
          </Col>
          <Col className="item" lg={4}>
            <div>
              <VscLock size={50}/>  
              <h5>Completely trustless</h5>
              <p>Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.</p> 
              <Link to="/">Learn more </Link>
            </div>
          </Col>
          <Col className="item" lg={4}>
            <div>
              <VscLock size={50}/>  
              <h5>Completely trustless</h5>
              <p>Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.</p> 
              <Link to="/">Learn more </Link>
            </div>
          </Col>
          <Col className="item" lg={4}>
            <div>
              <VscLock size={50}/>  
              <h5>Completely trustless</h5>
              <p>Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.</p> 
              <Link to="/">Learn more </Link>
            </div>
          </Col>
          <Col className="item" lg={4}>
            <div>
              <VscLock size={50}/>  
              <h5>Completely trustless</h5>
              <p>Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.</p> 
              <Link to="/">Learn more </Link>
            </div>
          </Col>
          <Col className="item" lg={4}>
            <div>
              <VscLock size={50}/>  
              <h5>Completely trustless</h5>
              <p>Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl. Duis in lectus ac nibh molestie.</p> 
              <Link to="/">Learn more </Link>
            </div>
          </Col>
        </Row>
        <Row className="marks">
          <Col lg={2}>
          </Col>
          <Col lg={2}>
            <img src={mark1Image} alt="" />
          </Col>
          <Col lg={2}>
            <img src={mark2Image} alt="" />
          </Col>
          <Col lg={2}>
            <img src={mark3Image} alt="" />
          </Col>
          <Col lg={2}>
            <img src={mark4Image} alt="" />
          </Col>
          <Col lg={2}>
            <img src={mark5Image} alt="" />
          </Col>
        </Row>
      </Row>
      <Row className="work-description">
        <h1 className="text-center">How it Works</h1>
        <p className="text-center">Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum <br/> rhoncus convallis.</p>
        <Row className="wrapper">
          <Col lg={6} className="item">
            <span className="number">
              1
            </span>
            <div className="description">
              <p>Define - Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis, mauris quis suscipit feugiat eros.</p>
            </div>
          </Col>
          <Col lg={6} className="item down">
            <span className="number">
              2
            </span>
            <div className="description">
              <p>Define - Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis, mauris quis suscipit feugiat eros.</p>
            </div>
          </Col>
          <Col lg={6} className="item">
            <span className="number">
              3
            </span>
            <div className="description">
              <p>Define - Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis, mauris quis suscipit feugiat eros.</p>
            </div>
          </Col>
          <Col lg={6} className="item down">
            <span className="number">
              4
            </span>
            <div className="description">
              <p>Define - Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis, mauris quis suscipit feugiat eros.</p>
            </div>
          </Col>
        </Row>
      </Row>
      <Row className="questions">
        <Col lg={6} className="left-panel">
          <h1>Questions</h1>
          <p>Aliquam hendrerit ligula eu lobortis maximus. Praesent element rhoncus ex eu sodales convallis ultrices sit amet.</p> 
          <div className="collapse-wrapper">
            <div className="item">
              <a id="toggler" style={{ marginBottom: '1rem' }}>
                How do I know that my investment is safe?
              </a>
              <UncontrolledCollapse toggler="#toggler" className="content"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
              </UncontrolledCollapse>
            </div>
            <div className="item">
              <a id="toggler1" style={{ marginBottom: '1rem' }}>
                How do I know that my investment is safe?
              </a>
              <UncontrolledCollapse toggler="#toggler1" className="content"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
              </UncontrolledCollapse>
            </div>
            <div className="item">
              <a id="toggler2" style={{ marginBottom: '1rem' }}>
                How do I know that my investment is safe?
              </a>
              <UncontrolledCollapse toggler="#toggler2" className="content"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
              </UncontrolledCollapse>
            </div>
            <div className="item">
              <a id="toggler3" style={{ marginBottom: '1rem' }}>
                How do I know that my investment is safe?
              </a>
              <UncontrolledCollapse toggler="#toggler3" className="content"> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
              </UncontrolledCollapse>
            </div>
          </div>
        </Col>
        <Col lg={6}>
        </Col>
      </Row>
      <Row className="findout">
        <h1>Find out more</h1>
        <p>Hendrerit ligula eu lobortis maximus. Praesent elementum rhoncus<br /> convallis dapibus turpis lorem enim.</p>
        <Col className="item" lg={4}>
          <div>
            <VscLock size={50}/>  
            <h5>Meet the Team</h5>
            <p>Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum rhoncus convallis.</p> 
            <Link to="/">Learn more </Link>
          </div>
        </Col>
        <Col className="item" lg={4}>
          <div>
            <VscLock size={50}/>  
            <h5>Meet the Team</h5>
            <p>Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum rhoncus convallis.</p> 
            <Link to="/">Learn more </Link>
          </div>
        </Col>
        <Col className="item" lg={4}>
          <div>
            <VscLock size={50}/>  
            <h5>Meet the Team</h5>
            <p>Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum rhoncus convallis.</p> 
            <Link to="/">Learn more </Link>
          </div>
        </Col>
      </Row>
      <Row className="feature-finance">
        <Row className="bg"></Row>        
        <Row className="wrapper">
          <Col lg={6}>
            <p className="title">SAFE / SECURE / PRIVATE</p>
            <h1>The future of finance is DeFi</h1>
            <p className="description">Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum rhoncus convallis. Vivamus sit amet malesuada augue, id sollicitudin nunc. Quisque vehicula velit id scelerisque.</p>
          </Col>
          <Col lg={6} className="involve">
            <Button className="get-involve">GET INVOLVED <AiOutlineArrowRight/></Button>
          </Col>
        </Row>
      </Row>
    </HomeStyleWrapper>
  );
}

export default HomeScreen;
