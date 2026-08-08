import App from './App.jsx'
import SeoPage from './SeoPage.jsx'
import { getSeoPage, normalizePath } from './seoPages.js'

export default function RootApp({ path }) {
  const currentPath = normalizePath(path ?? (typeof window !== 'undefined' ? window.location.pathname : '/'))
  const page = getSeoPage(currentPath)
  return page ? <SeoPage page={page} /> : <App />
}
