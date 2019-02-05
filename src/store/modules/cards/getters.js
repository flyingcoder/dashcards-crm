export const getters = {
  should_show: state => card => {
    const cards = state.cards.reduce((acc, curr) => {
      acc.push(curr.name.toLowerCase())
      return acc
    }, [])
    return cards.includes(card.toLowerCase())
  },
  cards: state => state.cards,
  dash_items: state => state.dash_items
}
