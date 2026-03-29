
import './App.css'
import AdminPage from './pages/adminPage'
import AdminProductPage from './pages/admin/adminProductpage'
import Homepage from './pages/homepage'
import LoginPage from './pages/loginPage' 
import Testpage from './pages/test'
import TrendingProducts from './components/trendingProducts'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {
 

  return (
  
      <div className='w-full h-screen border-[6px] flex justify-center items-center'>
       <Toaster position="top-right" reverseOrder={false} />
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/products" element={<AdminProductPage />} />
        <Route path="/add-product" element={<AdminProductPage />} />  
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<Testpage />} />
    
       </Routes>
        
         </div>
    
      
   
  )
}

export default App
