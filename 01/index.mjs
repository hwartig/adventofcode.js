function countIncreases(numbers, indexDistance = 1) {
  let increases = 0

  for (let i = indexDistance; i < numbers.length; i++) {
    if (numbers[i - indexDistance] < numbers[i]) {
      increases += 1
    }
  }

  return increases
}

export function part1(input) {
  const numbers = input.split('\n').map(line => parseInt(line))

  return countIncreases(numbers)
}

export function part2(input) {
  const numbers = input.split('\n').map(line => parseInt(line))

  return countIncreases(numbers, 3)
}
