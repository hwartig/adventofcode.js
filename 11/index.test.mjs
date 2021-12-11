import {step, parseInput, part1, part2} from './index'
import {readFileSync} from 'fs'

const simpleInput = `11111
19991
19191
19991
11111`

const exampleInput = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`

test('step', () => {
  expect(step(parseInput(simpleInput))).toEqual(9)
  expect(step(parseInput(exampleInput))).toEqual(0)
})

test('part1', () => {
  expect(part1(exampleInput)).toEqual(1656)
})


test('part2', () => {
  expect(part2(exampleInput)).toEqual(195)
})


test('real input', () => {
  const input = readFileSync('./11/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(1721)
  expect(part2(input)).toEqual(298)
})
