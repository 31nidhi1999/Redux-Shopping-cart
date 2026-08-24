import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const { products, loading, error} = useSelector((state) => state.products)
  console.log(loading)
  console.log(products)

  return (
    <>
      <h1>Shopping Cart</h1>
      {loading && <p>Loading...</p>}
    </>
  )
}

export default App
