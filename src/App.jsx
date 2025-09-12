import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Cards'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './ProductDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default App
