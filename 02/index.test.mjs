import {part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`

test('part1', () => {
  expect(part1(exampleInput)).toEqual(150)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(900)
})

console.log(process.cwd())

test('real input', () => {
  const input = readFileSync('./02/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(1524750)
  expect(part2(input)).toEqual(1592426537)
})
