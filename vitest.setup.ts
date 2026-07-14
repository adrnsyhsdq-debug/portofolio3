import '@testing-library/jest-dom/vitest'

// jsdom does not implement IntersectionObserver, which Motion's
// `whileInView` prop (used by <Reveal> and the hero copy) relies on to
// detect scroll position. Without this stub, every component that uses it
// would throw "IntersectionObserver is not defined" during tests.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []
  observe = () => undefined
  unobserve = () => undefined
  disconnect = () => undefined
  takeRecords = () => []
}

// @ts-expect-error - jsdom has no built-in IntersectionObserver
global.IntersectionObserver = MockIntersectionObserver

// jsdom does not implement window.matchMedia, which Motion's
// `useReducedMotion` hook calls to read the OS "reduce motion" preference.
// Without this stub, every component that uses motion hooks would throw
// "matchMedia is not a function" during tests.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  }),
})