import { useEffect } from 'react'

export const useOnDetect = (handler) => {
    useEffect(() => {
        const abortController = new AbortController()
        document.querySelector('#root').addEventListener('targetFound', handler, { signal: abortController.signal })
        return () => {
            abortController.abort()
        }
    }, [handler])
}
