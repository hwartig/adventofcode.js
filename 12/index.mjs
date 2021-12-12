export const parseInput = (input) => input.split('\n').map(line => line.split('-')).reduce((acc, [from, to]) => {
  if (acc[from] == undefined) {
    acc[from] = [to]
  } else
    acc[from].push(to)

  if (acc[to] == undefined) {
    acc[to] = [from]
  } else
    acc[to].push(from)

  return acc
}, {})

function countWaysTo(graph, secondVisitAvailable = true, currentNode = 'start', currentPath = ['start']) {
  return graph[currentNode].reduce((acc, node) => {
    if (node == 'start') return acc
    if (node == 'end') return acc + 1

    if (node.toLowerCase() == node && currentPath.includes(node)) {
      if (secondVisitAvailable) {
        return acc + countWaysTo(graph, false, node, [...currentPath, node])
      }
      return acc
    }

    return acc + countWaysTo(graph, secondVisitAvailable, node, [...currentPath, node])
  }, 0)
}

export function part1(input) {
  return countWaysTo(parseInput(input), false)
}

export function part2(input) {
  return countWaysTo(parseInput(input))
}
