import { writable } from 'svelte/store'

export interface SupportValue {
  oklch: boolean
  p3: boolean
}

const defaultValues: SupportValue = {
  oklch: false,
  p3: false,
}

const p3media = () => window.matchMedia('(color-gamut: p3)')

function getSupportedSpaces() {
  if (typeof window !== 'undefined') {
    // FireFox can’t display P3 yet. Remove when this issue will be resolved.
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1626624
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')

    if (isFirefox) return defaultValues

    if (CSS.supports('color', 'color(display-p3 1 1 1)')) {
      defaultValues.oklch = true
      defaultValues.p3 = p3media().matches
    }
    return defaultValues
  } else {
    return defaultValues
  }
}

function createSpacesSupport() {
  const supportedSpaces = getSupportedSpaces()

  const { subscribe, update } = writable(supportedSpaces)

  return {
    subscribe,
    update,
  }
}

export const support = createSpacesSupport()

// Handle posible changes in device or settings
if (typeof window !== 'undefined') {
  p3media().addEventListener('change', () => {
    support.update(({ ...state }) => {
      return {
        ...state,
        p3: p3media().matches,
      }
    })
  })
}
