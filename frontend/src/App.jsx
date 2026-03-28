
import './App.css'
import AdminPage from './pages/adminPage'
import Homepage from './pages/homepage'
import LoginPage from './pages/loginPage' 
import TrendingProducts from './components/trendingProducts'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
  
      <div className='w-full h-screen border-[6px] flex justify-center items-center'>
        
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
    
       </Routes>
        
         </div>
    
      
   
  )
}

export default App
