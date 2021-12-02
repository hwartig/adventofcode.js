export function part1(input) {
  let [horizontalPosition, depth] = [0, 0]

  input.split('\n').forEach((line) => {
    let [direction, distance] = line.split(' ')
    distance = parseInt(distance)

    switch (direction) {
      case 'forward':
        horizontalPosition += distance
        break
      case 'up':
        depth -= distance
        break
      case 'down':
        depth += distance
        break
    }
  })

  return horizontalPosition * depth
}

export function part2(input) {
  let [horizontalPosition, depth, aim] = [0, 0, 0]

  input.split('\n').forEach((line) => {
    let [direction, distance] = line.split(' ')
    distance = parseInt(distance)

    switch (direction) {
      case 'forward':
        horizontalPosition += distance
        depth += aim * distance
        break
      case 'up':
        aim -= distance
        break
      case 'down':
        aim += distance
        break
    }
  })

  return horizontalPosition * depth
}
