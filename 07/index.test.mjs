import {part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `16,1,2,0,4,2,7,1,2,14`

test('part1', () => {
  expect(part1(exampleInput)).toEqual(37)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(168)
})

test('real input', () => {
  const input = readFileSync('./07/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(323647)
  expect(part2(input)).toEqual(87640209)
})
