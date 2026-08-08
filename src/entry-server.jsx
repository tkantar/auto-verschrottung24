import { renderToString } from 'react-dom/server'
import RootApp from './RootApp.jsx'
export { seoPages } from './seoPages.js'

export const render = (path = '/') => renderToString(<RootApp path={path} />)
