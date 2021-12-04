import {isWinningCard, markCard, part1, part2} from './index'
import {readFileSync} from 'fs'

const exampleInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

3 15  0  2 22
9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
2  0 12  3  7`

test('isWinningCard', () => {
  const card1 = [
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19]
  ]
  const card2 = [
    ['X', 'X', 'X', 'X', 'X'],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19]
  ]
  const card3 = [
    ['X', 13, 17, 11, 0],
    ['X', 2, 23, 4, 24],
    ['X', 9, 14, 16, 7],
    ['X', 10, 3, 18, 5],
    ['X', 12, 20, 15, 19]
  ]
  const card4 = [
    [13, 17, 11, 0, 'X'],
    [2, 23, 4, 24, 'X'],
    [9, 14, 16, 7, 'X'],
    [10, 3, 18, 5, 'X'],
    [12, 20, 15, 19, 'X']
  ]
  const card5 = [
    ['X', 'X', 'X', 'X', 'X'],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19]
  ]

  expect(isWinningCard(card1)).toEqual(false)
  expect(isWinningCard(card2)).toEqual(true)
  expect(isWinningCard(card3)).toEqual(true)
  expect(isWinningCard(card4)).toEqual(true)
  expect(isWinningCard(card5)).toEqual(true)
})

test('markCard', () => {
  const card = [
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19]
  ]
  const expected = [
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 'X', 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19]
  ]

  expect(markCard([[22]], 22)).toEqual([['X']])
  expect(markCard(card, 14)).toEqual(expected)
})
test('part1', () => {
  expect(part1(exampleInput)).toEqual(4512)
})

test('part2', () => {
  expect(part2(exampleInput)).toEqual(1924)
})

test('real input', () => {
  const input = readFileSync('./04/input.txt').toString().trimEnd()

  expect(part1(input)).toEqual(28082)
  expect(part2(input)).toEqual(8224)
})
