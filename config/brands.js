import defaultStyles from '../styles/default/style.less'
import machbidStyles from '../styles/machbid/style.less'

export default (props) => {
  return {
    default: {
      name: 'default',
      styles: defaultStyles
    },
    machbid: {
      name: 'machbid',
      styles: machbidStyles
    },
    none: {
      name: 'none',
      styles: {}
    }
  }
}
