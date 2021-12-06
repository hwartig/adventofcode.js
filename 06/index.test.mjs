import {part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `3,4,3,1,2`

test('part1', () => {
  expect(part1(exampleInput)).toEqual(5934)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(26984457539)
})

test('real input', () => {
  const input = readFileSync('./06/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(386536)
  expect(part2(input)).toEqual(1732821262171)
})
