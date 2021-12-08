import _ from 'lodash'
//   0:      1:      2:      3:      4:
//   aaaa    ....    aaaa    aaaa    ....
//  b    c  .    c  .    c  .    c  b    c
//  b    c  .    c  .    c  .    c  b    c
//   ....    ....    dddd    dddd    dddd
//  e    f  .    f  e    .  .    f  .    f
//  e    f  .    f  e    .  .    f  .    f
//   gggg    ....    gggg    gggg    ....

//    5:      6:      7:      8:      9:
//   aaaa    aaaa    aaaa    aaaa    aaaa
//  b    .  b    .  .    c  b    c  b    c
//  b    .  b    .  .    c  b    c  b    c
//   dddd    dddd    ....    dddd    dddd
//  .    f  e    f  .    f  e    f  .    f
//  .    f  e    f  .    f  e    f  .    f
//   gggg    gggg    ....    gggg    gggg

export const parseInput = (input) => input.split('\n').map(line => line.split(' | ').map(p => p.split(' ')))

export function part1(input) {
  const segmentsPerNumber = {
    '2': [1],
    '3': [7],
    '4': [4],
    '5': [2, 3, 5],
    '6': [0, 6, 9],
    '7': [8],
  }
  const outputs = parseInput(input).map(([_input, output]) => output).flat()
  return outputs.reduce((acc, val) => {
    return acc + ((segmentsPerNumber[val.length].length == 1) ? 1 : 0)
  }, 0)
}

export function part2(input) {
  const lines = parseInput(input)
  const contains = (arr, other) => _.intersection(arr, other).length == other.length


  return lines.reduce((acc, [input, output]) => {
    input = input.map(i => i.split(''))
    const one = input.find(n => n.length == 2)
    const seven = input.find(n => n.length == 3)
    const four = input.find(n => n.length == 4)
    const eight = input.find(n => n.length == 7)
    const nine = input.find(n => n.length == 6 && contains(n, four))
    const three = input.find(n => n.length == 5 && contains(n, one))
    const five = input.find(n => n.length == 5 && contains(nine, n) && !contains(n, three))
    const two = input.find(n => n.length == 5 && _.intersection(n, nine).length == 4)
    const six = input.find(n => n.length == 6 && contains(n, five) && n != nine)
    const zero = input.find(n => n.length == 6 && n != nine && n != six)

    let patterns = [
      zero,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine
    ].map(p => p.sort().join(''))

    output = output.map(i => i.split('').sort().join(''))

    return acc + parseInt(output.reduce((number, p) => number + patterns.indexOf(p), ''))
  }, 0)
}
