import React from 'react'

export function useCounter(initial = 0) {
  const [count, setCount] = React.useState(initial)

  const increment = React.useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  const decrement = React.useCallback(() => {
    setCount((c) => c - 1)
  }, [])

  return { count, increment, decrement }
}
