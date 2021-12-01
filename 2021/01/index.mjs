#!/usr/bin/env zx

export function part1(input) {
  const numbers = input.split('\n').map(line => parseInt(line))

  let increases = 0
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] < numbers[i]) {
      increases += 1
    }
  }

  return increases
}

export function part2(input) {
  const lines = input.split('\n')

  const numbers = lines.map(line => parseInt(line))

  let sums = []

  for (let i = 2; i < numbers.length; i++) {
    sums.push(numbers[i - 2] + numbers[i - 1] + numbers[i])
  }

  let increases = 0
  for (let i = 1; i < sums.length; i++) {
    if (sums[i - 1] < sums[i]) {
      increases += 1
    }
  }

  return increases
}

if (typeof $ === 'function') {
  const input = fs.readFileSync('input.txt').toString().trimEnd()

  console.log(part1(input))
  console.log(part2(input))
}
