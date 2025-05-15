import { BrowserRouter, Route, Routes } from 'react-router'
import Editor from '@/views/Editor'
import Faq from '@/views/Faq'
import Home from '@/views/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route element={<Editor />} path="/editor" />
        <Route element={<Faq />} path="/faq" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
