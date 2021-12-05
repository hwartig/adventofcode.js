import _ from 'lodash'

function printGrid(grid) {
  console.log(_.unzip(grid).map(row => row.map(cell => cell == 0 ? '.' : cell).join('')).join('\n'))
}

function countDangerZones(grid) {
  return grid.reduce((acc, row) => acc + row.filter(n => n > 1).length, 0)
}

function buildGrid(coordPairs, includeDiagonals = false) {
  const maxx = _.max(coordPairs.map(([fromx, _fromy, tox, _toy]) => [fromx, tox]).flat())
  const grid = new Array(maxx + 1).fill().map(() => [])

  coordPairs.forEach(([fromx, fromy, tox, toy]) => {
    const dx = tox - fromx
    const dy = toy - fromy

    _.range(1 + Math.max(Math.abs(dx), Math.abs(dy))).forEach(i => {
      const x = fromx + (dx > 0 ? 1 : (dx < 0) ? -1 : 0) * i
      const y = fromy + (dy > 0 ? 1 : (dy < 0) ? -1 : 0) * i

      // printGrid(grid)

      if (dx == 0 || dy == 0 || includeDiagonals) {
        grid[x][y] = grid[x][y] ? grid[x][y] + 1 : 1
      }

      // printGrid(grid)
    })
  })

  return grid
}

function parseInput(input) {
  return input.split('\n').
    map(line => line.split(' -> ').
      map(pairs => pairs.split(',').
        map(number => parseInt(number))).flat())
}

export function part1(input) {
  const coordPairs = parseInput(input)
  const grid = buildGrid(coordPairs)

  return countDangerZones(grid)
}

export function part2(input) {
  const coordPairs = parseInput(input)
  const grid = buildGrid(coordPairs, true)

  return countDangerZones(grid)
}
