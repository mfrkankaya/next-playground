export function sum(...numbers: number[]) {
  return numbers.reduce((acc, cur) => acc + cur, 0)
}

export function average(...numbers: number[]) {
  return sum(...numbers) / numbers.length
}
