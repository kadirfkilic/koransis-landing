export function useScrollReveal() {
  const observe = (el: HTMLElement) => {
    if (!import.meta.client) return

    const children = el.querySelectorAll('.scroll-reveal')
    if (children.length === 0) {
      el.classList.add('scroll-reveal')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            if (target.classList.contains('scroll-reveal')) {
              target.classList.add('revealed')
            }
            const revealChildren = target.querySelectorAll('.scroll-reveal')
            revealChildren.forEach((child) => {
              child.classList.add('revealed')
            })
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (children.length === 0) {
      observer.observe(el)
    } else {
      observer.observe(el)
    }
  }

  return { observe }
}
