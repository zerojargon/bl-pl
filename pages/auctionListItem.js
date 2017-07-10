import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import brands from '../config/brands'

import store from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/_layout'

class Index extends Component {
  render() {
    const brand = brands()[this.props.brands.brand]
    return (
      <Layout brand={brand} patterns={this.props.patterns.patterns} sections={this.props.sections.sections}>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h1>Auction List Item</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h2>Unauthenticated</h2>
            <div className='ui-lot-item-list user-not-logged-in ' style={{ display: 'block' }}>
              <div className='timedItem' style={{ overflow: 'auto' }}>
                <div className='col-md-6 col-sm-12 col-xs-12 timeditem-list-one'>
                  <div className='ui-timeditem-image-grid-box'>
                    <div className='itemImageRegion'>
                      <div>
                        <div className='ui-timed-image'>
                          <a rel='prettyPhoto' title='Item Title One' href='https://res.cloudinary.com/bidlogix-test/image/upload/q_70,c_fill/v1499250300/local/1_epeqml_ilupxc.jpg' alt='1_epeqml.jpg' />
                          <div className='text-center'>
                            <a rel='prettyPhoto' title='Item Title One' href='https://res.cloudinary.com/bidlogix-test/image/upload/q_70,c_fill/v1499250300/local/1_epeqml_ilupxc.jpg' alt='1_epeqml.jpg' />
                            <a id='itemDetails219image' className='evh_LoadItemDetails img-responsive' data-id='219' href='/auction-031/itemDetails/159/219'>
                              <img id='biddingItemImage_219' className='x-timed-preview img-responsive' src='https://res.cloudinary.com/bidlogix-test/image/upload/q_70,w_380,h_285,c_fill/v1499250300/local/1_epeqml_ilupxc.jpg' alt='1_epeqml.jpg' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='watchingRegion'>
                      <div>
                        <div className='item-image-mask-top col-md-12'>
                          Lot 1
                                &nbsp;
                              </div>
                      </div>
                    </div>
                    <div className='timeLeftRegion'>
                      <div>
                        <div id='timeLeftMessage219' className='item-image-mask-bottom' style={{ maxWidth: '380px' }}>
                          <p className=''>Bidding Ends on 8 July at 06:00PM BST
                            <span id='timeLeft_219' />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12 col-xs-12 timeditem-list-two'>
                  <div className='timedDetailsRegion'>
                    <div>
                      <div className='t2-timed-title text-center'>
                        <h5 id='lotTitle219'>
                          <a id='itemDetails219' href='/auction-031/itemDetails/159/219' className='evh_LoadItemDetails' data-id='219'>Item Title One</a>
                        </h5>
                      </div>
                      <div className='t2-timed-summary text-center'>
                        <p id='lotSummary219'>The Item Summary goes here, with a short amount of text about the item.</p>
                      </div>
                    </div>
                  </div>
                  <div className='currentBidRegion'>
                    <div>
                      <div className='row text-center currentBidInner bordered'>
                        <div className='w2-highbid-inplay'>
                          <span id='highestBidMessage219'>Highest Bid:
                            <strong>
                              <span id='highestBid219'>-</span>
                            </strong>
                          </span>
                          <span id='highBidAmountCalculation219' />
                        </div>
                        <div>
                          <small className='comment text-center'>&nbsp;</small>
                        </div>

                        <div className='col-md-12'>
                          &nbsp;
                        </div>

                        <div id='bidTypeMessage219' className='col-md-12' />

                      </div>
                    </div>
                  </div>
                  <div className='messageRegion'>
                    <div>
                      <div>
                        <div id='itemActionsMessage219' className='w2-messages-box'>
                          <div className='row'>
                            <div className='message-box-wrapper col-md-12 text-center w2-message-warning'>
                              <h5>You are not logged in</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id='reserveIndicator' className='col-md-12'>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                  <div className='catalogueRegion' />
                  <div className='placeBidRegion'>
                    <div>
                      <div className='btn-group btn-group-justified' role='group' aria-label='...'>
                        <div className='btn-group' role='group' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                          <button id='loginButton219' className='x-login btn btn-primary ' data-amount='100' type='button'>Log In</button>
                        </div>
                      </div>
                      <div className='row text-center offer-message'>
                        <div id='offerMessage219' className='col-md-12 text-nowrap text-center test'>
                          <small>&nbsp;<br />&nbsp;</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='maxBidRegion'>
                    <div>
                      <div id='autobiddingView_219' className=''>
                        <div id='autobidMessage_219' className='col-md-12 col-sm-12 col-xs-12 text-center'>
                          <small>
                            &nbsp;
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h2>Authenticated</h2>
            <div className='ui-lot-item-list' style={{ display: 'block' }}>
              <div className='timedItem' style={{ overflow: 'auto' }}>
                <div className='col-md-6 col-sm-12 col-xs-12 timeditem-list-one'>
                  <div className='ui-timeditem-image-grid-box'>
                    <div className='itemImageRegion'>
                      <div>
                        <div className='ui-timed-image'>
                          <a rel='prettyPhoto' title='Item Title One' href='https://res.cloudinary.com/bidlogix-test/image/upload/q_70,c_fill/v1499250300/local/1_epeqml_ilupxc.jpg' alt='1_epeqml.jpg' />
                          <div className='text-center'>
                            <a rel='prettyPhoto' title='Item Title One' href='https://res.cloudinary.com/bidlogix-test/image/upload/q_70,c_fill/v1499250300/local/1_epeqml_ilupxc.jpg' alt='1_epeqml.jpg' />
                            <a id='itemDetails219image' className='evh_LoadItemDetails img-responsive' data-id='219' href='/auction-031/itemDetails/159/219'>
                              <img id='biddingItemImage_219' className='x-timed-preview img-responsive' src='https://res.cloudinary.com/bidlogix-test/image/upload/q_70,w_380,h_285,c_fill/v1499250300/local/1_epeqml_ilupxc.jpg' alt='1_epeqml.jpg' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='watchingRegion'>
                      <div>
                        <div className='item-image-mask-top col-md-12'>


                          Ref 219 &nbsp;

                          <a id='watching_219' href='#' className='x-watching' title='Watch This Item'>
                      <i className='fa fa-binoculars' style={{ color: 'white' }} data-toggle='tooltip' data-placement='bottom' title='' data-original-title='Watch This Item'></i>
                    </a> &nbsp;
                          <a id='watchingLink_219' href='/auction-031/myBids/3' className='watchlist-link' data-toggle='tooltip' data-container='body'
                            title='' data-original-title='Go to Watch List'><i className='fa fa-th-list' style={{ color: 'white', fontSize: '14px' }}></i></a>

                        </div>
                      </div>
                    </div>
                    <div className='timeLeftRegion'>
                      <div>
                        <div id='timeLeftMessage219' className='item-image-mask-bottom' style={{ maxWidth: '380px' }}>
                          <p className=''>&nbsp;
                            <span id='timeLeft_219'></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12 col-xs-12 timeditem-list-two'>
                  <div className='timedDetailsRegion'>
                    <div>
                      <div className='t2-timed-title text-center'>
                        <h5 id='lotTitle219'>
                          <a id='itemDetails219' href='/auction-031/itemDetails/158/219' className='evh_LoadItemDetails' data-id='219'>Title</a>
                        </h5>
                      </div>
                      <div className='t2-timed-summary text-center'>
                        <p id='lotSummary219'>Summary</p>
                      </div>
                    </div>
                  </div>
                  <div className='currentBidRegion'>
                    <div>
                      <div className='row text-center currentBidInner bordered'>
                        <div className='w2-highbid-inplay'>
                          <span id='highestBidMessage219'>Highest Bid: <strong>
                <span id='highestBid219'>-</span></strong>
                          </span>
                          <span id='highBidAmountCalculation219'></span>
                        </div>
                        <div><small className='comment text-center'>&nbsp;</small></div>

                        <div className='col-md-12'>
                          &nbsp;
                        </div>

                        <div id='bidTypeMessage219' className='col-md-12'>
                        </div>



                      </div>
                    </div>
                  </div>
                  <div className='messageRegion'>
                    <div>
                      <div>
                        <div id='itemActionsMessage219' className='w2-messages-box'>
                          <div className='row'>
                            <div className='message-box-wrapper col-md-12 text-center w2-message-warning'>
                              <h5>You are not registered for this auction</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id='reserveIndicator' className='col-md-12'>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                  <div className='catalogueRegion'></div>
                  <div className='placeBidRegion'>
                    <div>
                      <div className='btn-group btn-group-justified' role='group' aria-label='...'>
                        <div className='btn-group' role='group' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                          <button id='buynowButton_219' className='x-buynow disabled btn btn-primary' type='button'>Buy Now £12</button>
                        </div>
                        <div className='btn-group' role='group' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                          <button id='registerButton219' className='x-register btn btn-primary ' data-amount='12' type='button'>Register</button>
                        </div>
                      </div>
                      <div className='row text-center offer-message'>
                        <div id='offerMessage219' className='col-md-12 text-nowrap text-center test'>
                          <small>&nbsp;<br />&nbsp;</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='maxBidRegion'>
                    <div>
                      <div id='autobiddingView_219' className=''>
                        <div id='autobidMessage_219' className='col-md-12 col-sm-12 col-xs-12 text-center'><small>
                &nbsp;
              </small></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h2>No Image</h2>
            <div className='ui-lot-item-list user-not-logged-in ' style={{ display: 'block' }}>
              <div className='timedItem' style={{ overflow: 'auto' }}>
                <div className='col-md-6 col-sm-12 col-xs-12 timeditem-list-one'>
                  <div className='ui-timeditem-image-grid-box'>
                    <div className='itemImageRegion'>
                      <div>
                        <div className='ui-timed-image'>
                          <div className='text-center'>
                            <a id='itemDetails219image' className='evh_LoadItemDetails img-responsive' data-id='219' href='/auction-031/itemDetails/158/219'>
                              <span className='img-error-list-home'><br />Awaiting Image!</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='watchingRegion'>
                      <div>
                        <div className='item-image-mask-top col-md-12'>


                          Ref 219 &nbsp;
                      </div>
                      </div>
                    </div>
                    <div className='timeLeftRegion'>
                      <div>
                        <div id='timeLeftMessage219' className='item-image-mask-bottom' style={{ maxWidth: '380px' }}>
                          <p className=''>&nbsp;
                          <span id='timeLeft_219'></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12 col-xs-12 timeditem-list-two'>
                  <div className='timedDetailsRegion'>
                    <div>
                      <div className='t2-timed-title text-center'>
                        <h5 id='lotTitle219'>
                          <a id='itemDetails219' href='/auction-031/itemDetails/158/219' className='evh_LoadItemDetails' data-id='219'>Title</a>
                        </h5>
                      </div>
                      <div className='t2-timed-summary text-center'>
                        <p id='lotSummary219'>Summary</p>
                      </div>
                    </div>
                  </div>
                  <div className='currentBidRegion'>
                    <div>
                      <div className='row text-center currentBidInner bordered'>
                        <div className='w2-highbid-inplay'>
                          <span id='highestBidMessage219'>Highest Bid: <strong>
                            <span id='highestBid219'>-</span></strong>
                          </span>
                          <span id='highBidAmountCalculation219'></span>
                        </div>
                        <div><small className='comment text-center'>&nbsp;</small></div>

                        <div className='col-md-12'>
                          &nbsp;
                        </div>

                        <div id='bidTypeMessage219' className='col-md-12'>
                        </div>



                      </div>
                    </div>
                  </div>
                  <div className='messageRegion'>
                    <div>
                      <div>
                        <div id='itemActionsMessage219' className='w2-messages-box'>
                          <div className='row'>
                            <div className='message-box-wrapper col-md-12 text-center w2-message-warning'>
                              <h5>You are not logged in</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id='reserveIndicator' className='col-md-12'>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                  </div>
                  <div className='catalogueRegion'></div>
                  <div className='placeBidRegion'>
                    <div>

                      <div className='btn-group btn-group-justified' role='group' aria-label='...'>
                        <div className='btn-group' role='group' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                          <button id='buynowButton_219' className='x-buynow disabled btn btn-primary' type='button'>Buy Now £12</button>
                        </div>
                        <div className='btn-group' role='group' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                          <button id='loginButton219' className='x-login btn btn-primary ' data-amount='12' type='button'>Log In</button>
                        </div>
                      </div>
                      <div className='row text-center offer-message'>
                        <div id='offerMessage219' className='col-md-12 text-nowrap text-center test'>
                          <small>&nbsp;<br />&nbsp;</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='maxBidRegion'>
                    <div>
                      <div id='autobiddingView_219' className=''>
                        <div id='autobidMessage_219' className='col-md-12 col-sm-12 col-xs-12 text-center'><small>
                          &nbsp;
              </small></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
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
