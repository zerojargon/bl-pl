const initialState = {
  sections: [
    {
      name: 'Elements',
      description: 'Elements are the smallest part of our style. The building blocks',
      key: 'elements'
    },
    {
      name: 'Components',
      description: 'Components are the non-application-specific combinations of Elements',
      key: 'components'
    },
    {
      name: 'Patterns',
      description: 'Patterns are examples of usage for a specific application',
      key: 'patterns'
    }
  ]
}

const sections = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export default sections
