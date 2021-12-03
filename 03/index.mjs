export function countBitsAtPos(numbers, pos = 0) {
  let zeroes = 0
  let ones = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i][pos] == '0') {
      zeroes += 1
    } else {
      ones += 1
    }
  }

  return [zeroes, ones]
}

export function part1(input) {
  const numbers = input.split('\n')

  let gammaRate = ''
  let epsilonRate = ''

  for (let i = 0; i < numbers[0].length; i++) {
    let [zeroes, ones] = countBitsAtPos(numbers, i)

    if (zeroes > ones) {
      gammaRate += '0'
      epsilonRate += '1'
    } else {
      gammaRate += '1'
      epsilonRate += '0'
    }
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

const keepMostCommon = (zeroes, ones) => zeroes > ones
const keepLeastCommon = (zeroes, ones) => zeroes <= ones

function filterNumbersByBitCriteria(numbers, criteria) {
  numbers = [...numbers]

  let i = 0
  while (numbers.length > 1) {

    let [zeroes, ones] = countBitsAtPos(numbers, i)

    numbers = numbers.filter(n => n[i] == (criteria(zeroes, ones) ? '0' : '1'))

    i++
  }

  return parseInt(numbers[0], 2)
}

export function part2(input) {
  const numbers = input.split('\n')

  const oxygenGenerator = filterNumbersByBitCriteria(numbers, keepMostCommon)

  const CO2Scrubber = filterNumbersByBitCriteria(numbers, keepLeastCommon)

  return CO2Scrubber * oxygenGenerator
}
