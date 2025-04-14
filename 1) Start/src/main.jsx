import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const ReactElement = React.createElement(
  'a',
  { href: "https://www.github.com", target: "_Blank" },
  "Click me to fly"
)

createRoot(document.getElementById('root')).render(
    ReactElement
)
