import {part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`

test('part1', () => {
  expect(part1(exampleInput)).toEqual(5)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(12)
})

test('real input', () => {
  const input = readFileSync('./05/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(7142)
  expect(part2(input)).toEqual(20012)
})
