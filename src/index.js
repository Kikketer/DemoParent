import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserClient, Hub } from '@sentry/react'
import App from './App'

// Sentry.init({
// 	dsn: process.env.SENTRY_DSN,
// 	debug: true,
// })

const clientConfig = {
	dsn: process.env.SENTRY_DSN,
	debug: true,
}

// Create the client to give to the Hub
const client = new BrowserClient(clientConfig)
const hub = new Hub(client)

// const root = createRoot(document.getElementById('root'))
// root.render(<App />)
ReactDOM.render(<App />, document.getElementById('root'))
