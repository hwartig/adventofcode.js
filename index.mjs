#!/usr/bin/env zx

const day = argv._[1] || new Date().getUTCDate()

const dir = `./${('0' + day).slice(-2)}/`

const {part1, part2} = await import(dir + 'index.mjs')

const input = fs.readFileSync(dir + 'input.txt').toString().trimEnd()

console.log(part1(input))
console.log(part2(input))
