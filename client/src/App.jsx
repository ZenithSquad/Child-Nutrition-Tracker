import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header'
import Home from "./components/home"
import Login from './components/login'
import Beneficiaries from './components/beneficiaries'
import Register from './components/register'

const App = () => {
  const [login, setLogin] = useState(false)
  const [text, setText] = useState("")

  return (
    <>
      <Header login={login} text={text} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLogin={setLogin} setText={setText} />} />
        <Route path="/beneficiaries" element={<Beneficiaries />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App