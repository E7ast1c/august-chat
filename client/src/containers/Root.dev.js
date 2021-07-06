import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'
import App from '../App.js'

const Root = ({ store }) => (
  <Provider store={store}>
    <>
      <Route path="/" component={App} />
      <DevTools />
    </>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root