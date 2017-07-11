const initialState = {
  patterns: [
    {
      name: 'Auction - Grid Item',
      key: 'auctionGridItem',
      sectionKey: 'patterns'
    },
    {
      name: 'Auction - List Item',
      key: 'auctionListItem',
      sectionKey: 'patterns'
    }
  ]
}

const patterns = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export default patterns
