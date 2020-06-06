/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import CostOfOwnership from 'containers/CostOfOwnership/Loadable';
import GasPriceCheck from 'containers/GasPriceCheck/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavigationDrawer from 'components/NavigationDrawer';
import HomePageTabs from 'components/HomePageTabs';
import Header from 'components/Header';
// import Footer from 'components/Footer';
import { BrowserView, MobileView } from 'react-device-detect';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <BrowserView>
        <Header />
        <HomePageTabs />
      </BrowserView>
      <MobileView>
        <NavigationDrawer />
      </MobileView>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/costOfOwnership" component={CostOfOwnership} />
        <Route path="/gasPriceCheck" component={GasPriceCheck} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
