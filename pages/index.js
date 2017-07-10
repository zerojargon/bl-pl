import React, {Component} from 'react'

import brands from '../config/brands'

import store from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/_layout'

class Index extends Component {
  static getInitialProps ({store, isServer, pathname, query}) {

  }
  render () {
    const brand = brands()[this.props.brands.brand]
    return (
      <Layout brand={brand} patterns={this.props.patterns.patterns} sections={this.props.sections.sections}>
        <div>Welcome to the pattern library - {this.props.brands.brand}</div>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brands,
    patterns: state.patterns,
    sections: state.sections
  }
}

export default withRedux(store.makeStore, mapStateToProps, mapDispatchToProps)(Index)
