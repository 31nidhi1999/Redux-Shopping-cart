import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const productState = useSelector((state) => state.products)
  console.log(productState)

  return (
    <>
      <h1>Shopping Cart</h1>
    </>
  )
}

export default App
