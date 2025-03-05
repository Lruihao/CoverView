export function scrollToTop() {
  window.scrollTo(0, 0)
}

export const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json())
