import { renderHook, act } from '@testing-library/react'
import { useCounter } from '@/hooks/use-counter'

describe('useCounter', () => {
  it('Should increment and decrement', () => {
    const { result } = renderHook(useCounter)

    expect(result.current.count).toBe(0)

    act(() => result.current.increment())
    expect(result.current.count).toBe(1)

    act(() => result.current.decrement())
    expect(result.current.count).toBe(0)
  })

  it('Should initialize with a custom value', () => {
    const { result } = renderHook(useCounter, { initialProps: 10 })
    expect(result.current.count).toBe(10)

    act(() => result.current.increment())
    expect(result.current.count).toBe(11)

    act(() => result.current.decrement())
    expect(result.current.count).toBe(10)
  })

  it('Should be able to negative value', () => {
    const { result } = renderHook(useCounter, { initialProps: -10 })
    expect(result.current.count).toBe(-10)

    act(() => result.current.increment())
    expect(result.current.count).toBe(-9)

    act(() => result.current.decrement())
    expect(result.current.count).toBe(-10)
  })
})
