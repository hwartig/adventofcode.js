import {parseInput, part1, part2} from './index'
import {readFileSync} from 'fs'

const simpleInput = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`

const exampleInput = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`

test('parseInput', () => {
  expect(parseInput(simpleInput)).toEqual({"A": ["start", "c", "b", "end"], "b": ["start", "A", "d", "end"], "c": ["A"], "d": ["b"], "end": ["A", "b"], "start": ["A", "b"]})
})

test('part1', () => {
  expect(part1(simpleInput)).toEqual(10)
  expect(part1(exampleInput)).toEqual(19)
})


test('part2', () => {
  expect(part2(simpleInput)).toEqual(36)
  expect(part2(exampleInput)).toEqual(103)
})


test('real input', () => {
  const input = readFileSync('./12/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(4167)
  expect(part2(input)).toEqual(98441)
})
