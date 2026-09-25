import { useEffect } from 'react'

// Lightweight per-page <title> and meta description manager — no extra
// dependency needed for a site this size. Runs on mount and whenever
// title/description change (e.g. navigating between service pages).
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Coded For You` : 'Coded For You'
    document.title = fullTitle

    const setMeta = (selector, attr, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [, attrName, attrValue] = selector.match(/\[([\w:-]+)="([^"]+)"\]/)
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute(attr, content)
    }

    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:title"]', 'content', fullTitle)
      setMeta('meta[property="og:description"]', 'content', description)
      setMeta('meta[name="twitter:title"]', 'content', fullTitle)
      setMeta('meta[name="twitter:description"]', 'content', description)
    }
  }, [title, description])
}
