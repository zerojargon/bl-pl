const initialState = {
  brand: 'default'
}

const brands = (state = initialState, action) => {
  switch (action.type) {
    case 'BRAND_SWITCH':
      return Object.assign({}, state, { brand: action.brand })
    default: return state
  }
}

export default brands
