const dy = [-1, -1, -1, 0, 1, 1, 0, 1]
const dx = [-1, 0, 1, -1, 0, 1, 1, -1]

export function step(map) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      map[i][j] += 1
    }
  }

  let flashed = true
  while (flashed) {
    flashed = false

    for (let y1 = 0; y1 < map.length; y1++) {
      for (let x1 = 0; x1 < map.length; x1++) {
        if (map[y1][x1] <= 9)
          continue

        map[y1][x1] = 0
        flashed = true

        // increase neighbors
        for (let i = 0; i < 8; i++) {
          const y2 = y1 + dy[i]
          const x2 = x1 + dx[i]

          if (map[y2] == undefined || map[y2][x2] == undefined || map[y2][x2] == 0)
            continue

          map[y2][x2] += 1
        }
      }
    }
  }

  return map.reduce((acc, line) => acc + line.reduce((a, n) => a + (n == 0 ? 1 : 0), 0), 0)
}

function print(map) {
  let result = ''
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map.length; x++) {
      result += map[y][x]
    }
    result += "\n"
  }
  console.log(result)
}

export const parseInput = (input) => input.split('\n').map(line => line.split('').map(n => parseInt(n)))

export function part1(input) {
  let map = input.split('\n').map(line => line.split('').map(n => parseInt(n)))
  //print(map)
  let res = 0

  for (let i = 0; i < 100; i++) {
    res += step(map)
    //print(map)
  }

  return res
}

export function part2(input) {
  let map = input.split('\n').map(line => line.split('').map(n => parseInt(n)))

  const goal = map.length * map[0].length

  for (let i = 1; i <= 100000; i++) {
    if (goal == step(map))
      return i
  }

  return -1
}
