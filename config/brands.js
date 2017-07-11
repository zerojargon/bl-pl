import defaultStyles from '../styles/default/style.less'

export default (props) => {
  return {
    default: {
      name: 'default',
      styles: defaultStyles
    },
    none: {
      name: 'none',
      styles: {}
    }
  }
}
