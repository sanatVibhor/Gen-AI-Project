import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage/LoginPage'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div  className="app-container" >
       <LoginPage/>
       <Footer/>
       </div>
    </>
  )
}

export default App
