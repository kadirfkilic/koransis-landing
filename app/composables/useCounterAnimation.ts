import { ref } from 'vue'

export function useCounterAnimation(target: number, duration = 2000) {
  const current = ref(0)
  let started = false

  function easeOut(t: number): number {
    return 1 - Math.pow(1 - t, 3)
  }

  function start() {
    if (started) return
    started = true

    const startTime = performance.now()

    function update(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      current.value = Math.round(easeOut(progress) * target)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  return { current, start }
}
