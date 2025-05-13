import { useCallback, useEffect, useState } from 'react'

function isFunction(x: unknown): x is (...args: any) => any {
  return typeof x === 'function'
}

type SetState<S> = S | ((prevState?: S) => S)

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (state?: SetState<T>) => void] {
  const getValue = () => {
    const item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item)
    }
    return initialValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setValue(getValue())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const updateValue = useCallback((newValue?: SetState<T>) => {
    const current = isFunction(newValue)
      ? newValue(value)
      : newValue

    setValue(current)

    if (typeof current === 'undefined' || current === null) {
      localStorage.removeItem(key)
    }
    else {
      localStorage.setItem(key, JSON.stringify(current))
    }
  }, [key, value])

  return [value, updateValue] as const
}
