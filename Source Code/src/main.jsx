/*
  This is the main index.jsx while where components are being bundled together and then all of it is pushed into the index.html
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import Pages from './pages.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pages/>
  </React.StrictMode>,
)
