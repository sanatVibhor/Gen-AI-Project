import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage/LoginPage'
import Footer from './components/Footer/Footer'
import DashboardPage from './components/DashboardPage/DashboardPage'
function App() {
  const[loggedIn,setloggedIn]=useState(false);

  return (
    <>
      <div  className="app-container" >
        {loggedIn ? (
           <DashboardPage />
        ) :(
          <LoginPage onLogin={() => setloggedIn(true)} />
        )}   
       <Footer/>
       </div>
    </>
  )
}
export default App
