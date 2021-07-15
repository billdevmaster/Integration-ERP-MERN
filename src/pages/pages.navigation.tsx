import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../components/style/container.component';
import NotFoundScreen from './404/not-found.screen';
import HomeScreen from './home/home.screen';
import HeaderScreen from './layout/header.screen';

const Footer = styled.div`
  background-color: black;
  width: 100%;
  padding: 30px 0;
  color: white;
  > div {
    max-width: 1210px;
    margin: 0 auto;
  }
  p {
    margin: 0;
  }
`

const PagesNavigation = () => {
    return (
        <>
        <Container>
          <Router>
              <HeaderScreen />
              <Switch>
                  <Route exact path="/" component={HomeScreen} />
                  <Route exact path="/404" component={NotFoundScreen} />
                  <Redirect to='/404' />
              </Switch>
          </Router>

          <Footer>
            <div>
              <p>Copyright@2021</p>  
            </div>
          </Footer>
        </Container>
       </>
    );
}

export default PagesNavigation;