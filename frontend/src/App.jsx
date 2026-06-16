import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './pages/adminPage'
import HomePage from './pages/homepage'
import TestPage from './pages/test'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
//519045774965-ro4alkboe6441vhch4ap2hvt20htlsak.apps.googleusercontent.com
function App() {  

  return (   
    <GoogleOAuthProvider clientId="519045774965-ro4alkboe6441vhch4ap2hvt20htlsak.apps.googleusercontent.com">
      <div className='w-full h-screen flex justify-center items-center bg-primary text-secondary'>
        <Toaster position='top-right'/>
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/admin/*' element={<AdminPage />} />
          <Route path='/test' element={<TestPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div> 
      </GoogleOAuthProvider>
  )

}

export default App
