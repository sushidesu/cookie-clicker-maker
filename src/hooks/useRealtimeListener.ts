import { useState, useEffect } from "react"
import { RealtimeListnable } from "domain/repository"

export const useRealtimeListener = <T>(
  listenableRepository: RealtimeListnable<T>,
): T | null | undefined => {
  const [data, setData] = useState<T | null | undefined>(null)
  useEffect(() => {
    listenableRepository.subscribe((newValue) => {
      setData(newValue)
    })
    return () => {
      listenableRepository.unSubscribe()
    }
  }, [setData])

  return data
}
