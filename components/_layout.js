import PropTypes from 'proptypes'
import Head from 'next/head'
import { Col, ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap'
import Navigation from './organisms/Navigation'

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
        <Col xs={12} sm={3} lg={2} componentClass='nav' className='panel panel-default'>
          <h3>Pattern Library</h3>
          <FormGroup controlId='formControlsSelect'>
            <ControlLabel>Brand Style</ControlLabel>
            <FormControl componentClass='select' placeholder='select' value={props.brand.name} onChange={(e) => props.handleBrandChange(e.target.value)}>
              {Object.keys(props.brands).map(brandKey => {
                const brand = props.brands[brandKey]
                return (brand) ? (
                  <option value={brand.name} key={`brandSelect${brand.name}`}>{brand.name}</option>
                ) : null
              })}
            </FormControl>
          </FormGroup>
          <Navigation>
            {props.sections && props.sections.map(section => (
              <Navigation.Section title={section.name} sectionKey={section.key} key={section.key}>
                {props.patterns.filter(pattern => pattern.sectionKey === section.key).map(pattern => (
                  <Navigation.Item href={pattern.key} title={pattern.name} key={`${section.key}-${pattern.key}`} />
                ))}
              </Navigation.Section>
            ))}
          </Navigation>
        </Col>
        <Col xs={12} sm={9} lg={10} componentClass='main'>
          {props.children}
        </Col>
      </Row>
    </div>
  </div>
)

Layout.propTypes = {
  brand: PropTypes.object.isRequired,
  brands: PropTypes.object.isRequired,
  handleBrandChange: PropTypes.func.isRequired,
  patterns: PropTypes.array.isRequired,
  sections: PropTypes.array.isRequired
}

export default Layout
