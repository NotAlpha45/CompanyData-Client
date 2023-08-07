
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'

function App() {


  return (
    <>
      <BrowserRouter basename='/'>
        <AppLayout />
      </BrowserRouter>
    </>
  )
}

export default App
