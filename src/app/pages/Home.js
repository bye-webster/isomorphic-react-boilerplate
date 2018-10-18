import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import { H1 } from '@components/heading/Heading';
class Home extends Component {
  injectPageMetadata = () => (
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="Description of the page less than 150 characters"
      />
    </Helmet>
  );

  render = () => (
    <Fragment>
      {this.injectPageMetadata()}
      <H1>Home Page</H1>
      <Link to="/about">About</Link>
    </Fragment>
  );
}

export default hot(module)(Home);
