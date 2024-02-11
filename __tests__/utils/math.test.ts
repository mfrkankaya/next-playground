import { sum, average } from '@/utils/math'

describe('sum', () => {
  it('Should sum numbers', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15)
  })

  it('Should sum negative numbers', () => {
    expect(sum(-1, -2, -3, -4, -5)).toBe(-15)
  })

  it('Should return 0 if no numbers are passed', () => {
    expect(sum()).toBe(0)
  })

  it('Should sum only one number', () => {
    expect(sum(1)).toBe(1)
  })
})

describe('average', () => {
  it('Should calculate average of numbers', () => {
    expect(average(1, 2, 3, 4, 5)).toBe(3)
  })

  it('Should calculate average of negative numbers', () => {
    expect(average(-1, -2, -3, -4, -5)).toBe(-3)
  })

  it('Should calculate average of only one number', () => {
    expect(average(1)).toBe(1)
  })
})
