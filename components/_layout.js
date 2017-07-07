import PropTypes from 'proptypes'
import Head from 'next/head'
import { Col, ControlLabel, FormControl, FormGroup, Panel, PanelGroup, Row } from 'react-bootstrap'

const Layout = (props) => (
  <div>
    <Head>
      <title>Pattern Library</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: (props.brand && props.brand.styles) || null }} />
    </Head>
    <div className='container-fluid'>
      <Row>
        <Col xs={12} sm={3} lg={2} componentClass='nav'>
          <FormGroup controlId='formControlsSelect'>
            <ControlLabel>Brand Style</ControlLabel>
            <FormControl componentClass='select' placeholder='select' defaultValue={props.brand}>
              <option value='other'>...</option>
            </FormControl>
          </FormGroup>
          <PanelGroup defaultActiveKey='2' accordion>
            <Panel header='Panel 1' eventKey='1'>Panel 1 content</Panel>
            <Panel header='Panel 2' eventKey='2'>Panel 2 content</Panel>
          </PanelGroup>
        </Col>
        <Col xs={12} sm={9} lg={10} componentClass='main'>
          {props.children}
        </Col>
      </Row>
    </div>
  </div>
)

Layout.propTypes = {
  brand: PropTypes.object.isRequired
}

export default Layout
