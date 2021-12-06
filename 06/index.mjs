function solve(input, days) {
  const fish = input.split(',').map(line => parseInt(line))

  let counts = fish.reduce((arr, f) => {
    arr[f] += 1
    return arr
  }, new Array(8).fill(0))

  for (let i = 0; i < days; i++) {
    const newCounts = new Array(9).fill(0)

    counts.forEach((c, j) => {
      if (j == 0) {
        newCounts[6] += c
        newCounts[8] += c
      } else {
        newCounts[j - 1] += c
      }
    })

    counts = newCounts
  }

  return counts.reduce((acc, n) => acc + n, 0)
}

export function part1(input) {
  return solve(input, 80)
}

export function part2(input) {
  return solve(input, 256)
}
