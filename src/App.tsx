
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import GraphDisplayer from './components/graph/graph-displayer'

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
