import {part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `199
200
208
210
200
207
240
269
260
263`

test('part1', () => {
  expect(part1(exampleInput)).toEqual(7)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(5)
})

console.log(process.cwd())

test('real input', () => {
  const input = readFileSync('./input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(1624)
  expect(part2(input)).toEqual(1653)
})
