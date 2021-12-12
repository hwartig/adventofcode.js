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


export function part1(input) {
  const graph = parseInput(input)

  const visits = Object.fromEntries(Object.keys(graph).map(node => [node, 0]))

  const countWaysTo = (currentNode = 'start', currentPath = ['start']) => {
    return graph[currentNode].forEach(node => {

      if (node == 'start' || (node.toLowerCase() == node && currentPath.includes(node))) return

      visits[node] += 1

      if (node == 'end') return

      countWaysTo(node, [...currentPath, node])
    })
  }

  countWaysTo()

  return visits['end']
}

export function part2(input) {
  const graph = parseInput(input)

  const visits = Object.fromEntries(Object.keys(graph).map(node => [node, 0]))

  const countWaysTo = (currentNode = 'start', currentPath = ['start'], secondVisitAvailable = true) => {
    visits[currentNode] += 1

    return graph[currentNode].forEach(node => {
      if (node == 'start') return

      if (node == 'end') {
        //console.log('end', visits)
        //console.log([...currentPath, 'end'].join(','))
        visits['end'] += 1
        return
      }

      //console.log(secondVisitAvailable, [...currentPath, 'end'].join(','))

      if (node.toLowerCase() == node && currentPath.includes(node)) {
        if (secondVisitAvailable) {
          countWaysTo(node, [...currentPath, node], false)
        }
      } else {
        countWaysTo(node, [...currentPath, node], secondVisitAvailable)
      }
    })
  }

  countWaysTo()
  return visits['end']
}
