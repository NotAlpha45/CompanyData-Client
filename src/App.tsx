import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'

function App() {


  return (
    <>
      <BrowserRouter basename='/companyData'>
        <AppLayout />
      </BrowserRouter>
    </>
  )
}

export default App
