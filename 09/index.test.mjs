import {parseInput, part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `2199943210
3987894921
9856789892
8767896789
9899965678`

test('parseInput', () => {
  expect(parseInput(exampleInput)).toEqual([[2, 1, 9, 9, 9, 4, 3, 2, 1, 0], [3, 9, 8, 7, 8, 9, 4, 9, 2, 1], [9, 8, 5, 6, 7, 8, 9, 8, 9, 2], [8, 7, 6, 7, 8, 9, 6, 7, 8, 9], [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]])
})

test('part1', () => {
  expect(part1(exampleInput)).toEqual(15)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(1134)
})


test('real input', () => {
  const input = readFileSync('./09/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(564)
  expect(part2(input)).toEqual(1038240)
})
