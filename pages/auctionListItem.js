import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import brandsConfig from '../config/brands'

import store from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/_layout'
import AuctionListItem from '../components/organisms/AuctionListItem'
import brands from '../actions/brands'

class Index extends Component {
  render () {
    const brand = brandsConfig()[this.props.brands.brand]
    return (
      <Layout brand={brand} brands={brandsConfig()} patterns={this.props.patterns.patterns} sections={this.props.sections.sections} handleBrandChange={this.props.handleBrandChange}>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h1>Auction List Item</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h2>Unauthenticated</h2>
            <AuctionListItem.Unauthenticated />
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h2>Authenticated</h2>
            <AuctionListItem.Authenticated />
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h2>No Image</h2>
            <AuctionListItem.AwaitingImage />
          </Col>
        </Row>
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
