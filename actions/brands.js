export default {
  switch: (brand) => {
    return (dispatch) => {
      return new Promise((resolve, reject) => {
        resolve(
          dispatch({
            type: 'BRAND_SWITCH',
            brand: brand
          })
        )
      })
    }
  }
}
