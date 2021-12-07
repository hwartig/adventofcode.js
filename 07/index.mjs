function solve(input, fuelCalcCb) {
  const crab = input.split(',').map(line => parseInt(line))

  let counts = crab.reduce((arr, f) => {
    if (arr[f] == undefined) {
      arr[f] = 1
    } else {
      arr[f] += 1
    }
    return arr
  }, {})

  let minFuel = 1e9

  for (let pos = 1; pos < Object.keys(counts).length; pos++) {
    const fuelNeedsForPos = Object.entries(counts).reduce((acc, [i, cnt]) => {
      const dx = Math.abs(pos - i)

      return acc + fuelCalcCb(dx) * cnt
    }, 0)

    if (fuelNeedsForPos < minFuel) {
      minFuel = fuelNeedsForPos
    }
  }

  return minFuel
}

export function part1(input) {
  return solve(input, dx => dx)
}

export function part2(input) {
  return solve(input, dx => (dx + 1) * dx / 2)
}
