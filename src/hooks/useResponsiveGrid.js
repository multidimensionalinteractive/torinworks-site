import { useRef, useEffect } from 'react'

export function useResponsiveGrid(desktopCols = '1fr 1fr') {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mq = window.matchMedia('(max-width: 760px)')
    const apply = () => {
      el.style.gridTemplateColumns = mq.matches ? '1fr' : desktopCols
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [desktopCols])
  return ref
}
