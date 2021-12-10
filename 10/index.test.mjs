import {isValid, autocompleteScore, part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `
[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`

test('isValid', () => {
  expect(isValid("")).toEqual(0)
  expect(isValid("{([(<{}[<>[]}>{[]{[(<()>")).toEqual(1197)
  expect(isValid("[[<[([]))<([[{}[[()]]]")).toEqual(3)
  expect(isValid("[{[{({}]{}}([{[{{{}}([]")).toEqual(57)
  expect(isValid("[<(<(<(<{}))><([]([]()")).toEqual(3)
  expect(isValid("<{([([[(<>()){}]>(<<{{")).toEqual(25137)
})

test('part1', () => {
  expect(part1(exampleInput)).toEqual(26397)
})

test('autocompleteScore', () => {
  expect(autocompleteScore("")).toEqual(0)
  expect(autocompleteScore("[({(<(())[]>[[{[]{<()<>>")).toEqual(288957)
  expect(autocompleteScore("[(()[<>])]({[<{<<[]>>(")).toEqual(5566)
  expect(autocompleteScore("(((({<>}<{<{<>}{[]{[]{}")).toEqual(1480781)
  expect(autocompleteScore("{<[[]]>}<{[{[{[]{()[[[]")).toEqual(995444)
  expect(autocompleteScore("<{([{{}}[<[[[<>{}]]]>[]]")).toEqual(294)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(288957)
})


test('real input', () => {
  const input = readFileSync('./10/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(388713)
  expect(part2(input)).toEqual(3539961434)
})
