import {parseInput, part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`

const simpleInput = `acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf`

test('parseInput', () => {
  expect(parseInput(simpleInput)).toEqual([[["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"], ["cdfeb", "fcadb", "cdfeb", "cdbaf"]]])
})

test('part1', () => {
  expect(part1(exampleInput)).toEqual(26)
})

test('part2', () => {
  expect(part2(simpleInput)).toEqual(5353)

  const expected = [
    8394,
    9781,
    1197,
    9361,
    4873,
    8418,
    4548,
    1625,
    8717,
    4315,
  ]
  exampleInput.split('\n').forEach((input, i) => expect(part2(input)).toEqual(expected[i]))

  expect(part2(exampleInput)).toEqual(61229)
})


test('real input', () => {
  const input = readFileSync('./08/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(525)
  expect(part2(input)).toEqual(1083859)
})
