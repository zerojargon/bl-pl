import { ListGroup, Panel } from 'react-bootstrap'

export default (props) => (
  <Panel header={props.title} eventKey={props.sectionKey}>
    {props.description && (<p>props.description</p>)}
    {props.children && (
      <ListGroup fill>
        {props.children}
      </ListGroup>
    )}
  </Panel>
)
