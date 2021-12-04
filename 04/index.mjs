function parseInput(input) {
  const parts = input.split('\n\n')
  const numberSequence = parts[0].split(',').map(n => parseInt(n))
  let cards = parts.slice(1).map(part => {
    const lines = part.split('\n').map(line => {
      return line.split(/ +/).filter(n => n != '').map(n => parseInt(n))
    })
    return lines
  })
  return [numberSequence, cards]
}

export function markCard(card, number) {
  return card.map(row => row.map(cell => cell == number ? 'X' : cell))
}

export function isWinningCard(card) {
  for (let i = 0; i < 5; i++) {
    if (card[i][0] == 'X' &&
      card[i][1] == 'X' &&
      card[i][2] == 'X' &&
      card[i][3] == 'X' &&
      card[i][4] == 'X') {
      return true
    }

    if (card[0][i] == 'X' &&
      card[1][i] == 'X' &&
      card[2][i] == 'X' &&
      card[3][i] == 'X' &&
      card[4][i] == 'X') {
      return true
    }
  }

  return false
}

function cardCount(card) {
  return card.reduce((rowSum, row) => rowSum + row.reduce((colSum, col) => {
    if (col == 'X') {
      return colSum
    } else {
      return colSum + col
    }
  }, 0), 0)
}

function printCard(card) {
  console.log(card.map(row => row.join(' ')).join('\n'))
}


export function part1(input) {
  let [numberSequence, cards] = parseInput(input)

  for (let i = 0; i < numberSequence.length; i++) {
    cards = cards.map(card => markCard(card, numberSequence[i]))

    for (let j = 0; j < cards.length; j++) {
      if (isWinningCard(cards[j])) {
        return cardCount(cards[j]) * numberSequence[i]
      }
    }
  }

  return 'somethings wrong at part 1'
}

export function part2(input) {
  let [numberSequence, cards] = parseInput(input)

  for (let i = 0; i < numberSequence.length; i++) {
    cards = cards.map(card => markCard(card, numberSequence[i]))
    if (cards.length > 1) {
      cards = cards.filter(card => !isWinningCard(card))
    }
    if (isWinningCard(cards[0])) {
      return cardCount(cards[0]) * numberSequence[i]
    }
  }

  return 'somethings wrong at part 2'
}
