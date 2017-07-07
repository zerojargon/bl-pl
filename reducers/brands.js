const initialState = {
  brand: 'default'
}

const brands = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_BRAND':
      return Object.assign({}, state, { brand: action.brand })
    default: return state
  }
}

export default brands
