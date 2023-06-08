import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Index'

function App() {
  return (
    <div className="">
      <div className="h-48 bg-secondary">
        <h1 className='bg-red-900'>This is for add and featured</h1>
      </div>
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
