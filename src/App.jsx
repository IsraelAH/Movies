import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormSearch from './components/FormSearch'
import Movies from './components/Movies'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from './components/MainPage'
import SingleMovie from './components/SingleMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/movies/:id' element={<SingleMovie/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
