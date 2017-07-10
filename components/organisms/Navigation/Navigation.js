import { PanelGroup } from 'react-bootstrap'
import NavigationItem from '../../molecules/NavigationItem'
import NavigationSection from '../../molecules/NavigationSection'

const Navigation = (props) => (
  <PanelGroup defaultActiveKey="2" accordion>
    {props.children}
  </PanelGroup>
)

Navigation.Item = NavigationItem
Navigation.Section = NavigationSection

export default Navigation
