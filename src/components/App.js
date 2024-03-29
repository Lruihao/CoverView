import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editor from './Editor'
import Home from './Home'
import Faq from './Faq'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Editor />} exact path="/editor" />
        <Route element={<Faq />} exact path="/faq" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
