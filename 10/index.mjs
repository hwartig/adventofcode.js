const matching = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
}

export function isValid(line) {
  const errorScores = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
  }

  const open = []

  for (let i = 0; i < line.length; i++) {
    if ('([{<'.includes(line[i])) {
      open.push(line[i])
    } else {
      if (matching[open[open.length - 1]] == line[i]) {
        open.pop()
      } else {
        //console.log(line, '=> at', i, 'found', line[i], 'instead of', matching[open[open.length - 1]], errorScores[line[i]])
        return errorScores[line[i]]
      }
    }
  }
  return 0
}

export function autocompleteScore(line) {
  const errorScores = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
  }

  const open = []

  for (let i = 0; i < line.length; i++) {
    if ('([{<'.includes(line[i])) {
      open.push(line[i])
    } else {
      if (matching[open[open.length - 1]] == line[i]) {
        open.pop()
      } else {
        return 0
      }
    }
  }

  return open.reverse().reduce((acc, char) => acc * 5 + errorScores[matching[char]], 0)
}

export function part1(input) {
  return input.split('\n').reduce((acc, line) => acc + isValid(line), 0)
}

export function part2(input) {
  const scores = input.split('\n').map(autocompleteScore).filter(score => score > 0).sort((a, b) => a - b)
  return scores[Math.floor(scores.length / 2)]
}
