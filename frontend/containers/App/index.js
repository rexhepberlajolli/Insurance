/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import HomePage from '../../containers/HomePage/Loadable';
import RiskTypeDetailPage from '../../containers/RiskTypeDetailPage/Loadable';
import LoginPage from '../../containers/Login/Loadable';
import LogoutPage from '../../containers/Logout';
import NewRiskTypePage from '../../containers/NewRiskType/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

import Header from '../../components/Header';
import PrivateRoute, { AuthRoute } from '../../components/Routes';

const App = () => (
  <div>
    <Helmet titleTemplate="%s - Insurance" defaultTitle="Insurance">
      <meta name="description" content="A risk type management platform" />
    </Helmet>
    <Header />
    <Container className="mt-4">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/newRiskType" component={NewRiskTypePage} />
        <Route exact path="/riskTypes/:id" component={RiskTypeDetailPage} />
        <PrivateRoute exact path="/logout" component={LogoutPage} />
        <AuthRoute exact path="/auth" component={LoginPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Container>
  </div>
);

export default App;
