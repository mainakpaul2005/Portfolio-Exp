/**
 * Enhanced smooth scroll utility
 * Provides custom easing and better control over scroll behavior
 */

export function smoothScrollTo(
  targetId: string,
  options?: {
    offset?: number
    duration?: number
    callback?: () => void
  }
) {
  const target = document.getElementById(targetId)
  if (!target) return

  const offset = options?.offset ?? 100
  const duration = options?.duration ?? 800
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  // Easing function for smooth animation
  function easeInOutCubic(t: number): number {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutCubic(progress)
    
    window.scrollTo(0, startPosition + distance * ease)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    } else {
      options?.callback?.()
    }
  }

  requestAnimationFrame(animation)
}

/**
 * Initialize smooth scroll for all anchor links
 */
export function initSmoothScroll() {
  // Handle all anchor links on the page
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a[href^="#"]')
    
    if (anchor) {
      const href = anchor.getAttribute('href')
      if (href && href !== '#') {
        const id = href.replace('#', '')
        const element = document.getElementById(id)
        
        if (element) {
          e.preventDefault()
          smoothScrollTo(id, {
            offset: 100,
            duration: 800,
            callback: () => {
              // Update URL without triggering navigation
              window.history.pushState({}, '', href)
            }
          })
        }
      }
    }
  })

  // Handle keyboard navigation (for accessibility)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'PageDown' || e.key === 'PageUp' || e.key === 'Home' || e.key === 'End') {
      // Let native keyboard scrolling use CSS smooth-scroll
      return
    }
  })
}
