export const getters = {
  should_show: state => card => {
    const cards = state.cards.reduce((acc, curr) => {
      acc.push(curr.name)
      return acc
    }, [])
    return cards.includes(card)
  },
  cards: state => state.cards
}
