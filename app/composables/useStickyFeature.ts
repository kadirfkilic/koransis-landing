import { ref, onMounted, onUnmounted } from 'vue'

export function useStickyFeature(featureCount: number) {
  const activeIndex = ref(0)
  let observers: IntersectionObserver[] = []

  function init(featureEls: HTMLElement[]) {
    if (!import.meta.client) return

    observers = featureEls.map((el, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeIndex.value = index
            }
          })
        },
        {
          threshold: 0.5,
          rootMargin: '-30% 0px -30% 0px'
        }
      )
      observer.observe(el)
      return observer
    })
  }

  function scrollToFeature(index: number) {
    activeIndex.value = index
  }

  onUnmounted(() => {
    observers.forEach((obs) => obs.disconnect())
  })

  return { activeIndex, init, scrollToFeature }
}
