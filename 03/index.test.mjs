import {countBitsAtPos, part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`

test('countBitsAtPos', () => {
  const numbers = exampleInput.split('\n')

  expect(countBitsAtPos(numbers)).toEqual([5, 7])
  expect(countBitsAtPos(numbers, 0)).toEqual([5, 7])
  expect(countBitsAtPos(numbers, 1)).toEqual([7, 5])
  expect(countBitsAtPos(numbers, 2)).toEqual([4, 8])
  expect(countBitsAtPos(numbers, 3)).toEqual([5, 7])
  expect(countBitsAtPos(numbers, 4)).toEqual([7, 5])
})

test('part1', () => {
  expect(part1(exampleInput)).toEqual(198)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(230)
})

test('real input', () => {
  const input = readFileSync('./03/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(3277364)
  expect(part2(input)).toEqual(5736383)
})
