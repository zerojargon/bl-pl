import React, {Component} from 'react'

import brandsConfig from '../config/brands'

import store from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/_layout'
import { brands } from '../actions'

class Index extends Component {
  static getInitialProps ({store, isServer, pathname, query}) {

  }
  render () {
    const brand = brandsConfig()[this.props.brands.brand]
    return (
      <Layout brand={brand} brands={brandsConfig()} patterns={this.props.patterns.patterns} sections={this.props.sections.sections}>
        <div>Welcome to the pattern library - {this.props.brands.brand}</div>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleBrandChange: (newBrand) => {
      return dispatch(brands.switch(newBrand))
        .then(res => console.log(res))
    }
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
