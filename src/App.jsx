import React from 'react'
import Sidebar from './components/Layout/Sidebar'
import Content from './components/Layout/Content'

import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/style/style.scss"

function App() {
  return (
    <div className='app-wrapper'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default App