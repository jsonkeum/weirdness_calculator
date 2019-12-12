import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header';
import Calculator from './Calculator.js';
import ScoreContainer from '../containers/ScoreContainer';

//set up the browser routes in this component so we can display the results on a new route.

const Root = ({ store }) => (
  <Provider store={store}>
    <Header />
    <Router>
      <Route exact path="/" component={Calculator} />
      <Route exact path="/results" component={ScoreContainer} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;