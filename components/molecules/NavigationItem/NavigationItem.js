import { ListGroupItem } from 'react-bootstrap'
import Link from 'next/link'

export default (props) => {
  return (props.href && props.title) ? (
    <ListGroupItem>
      <Link href={props.href}><a>{props.title}</a></Link>
    </ListGroupItem>
  ) : null
}
