export const parseInput = (input) => input.split('\n').map(line => line.split('').map(n => parseInt(n)))

function findLowPoints(map) {
  const result = []

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (isLowPoint(map, y, x))
        result.push([y, x])
    }
  }

  return result
}

function isLowPoint(map, y1, x1) {
  const dy = [-1, 0, 1, 0]
  const dx = [0, -1, 0, 1]

  for (let i = 0; i < 4; i++) {
    const y2 = y1 + dy[i]
    const x2 = x1 + dx[i]

    if (map[y2] == undefined || map[y2][x2] == undefined)
      continue

    if (map[y1][x1] >= map[y2][x2])
      return false
  }

  return true
}

function calcBasinSize(map, y, x) {
  if (map[y] == undefined || map[y][x] == undefined || map[y][x] == 9 || map[y][x] == -1)
    return 0

  // mark each position we've visited already
  map[y][x] = -1

  return 1 +
    calcBasinSize(map, y + 1, x) +
    calcBasinSize(map, y - 1, x) +
    calcBasinSize(map, y, x + 1) +
    calcBasinSize(map, y, x - 1)
}

export function part1(input) {
  const map = parseInput(input)

  return findLowPoints(map).reduce((acc, [y, x]) => acc + map[y][x] + 1, 0)
}

export function part2(input) {
  const map = parseInput(input)

  return findLowPoints(map).map(([y, x]) => calcBasinSize(map, y, x)).sort((a, b) => a - b).slice(-3).reduce((acc, val) => acc * val)
}
