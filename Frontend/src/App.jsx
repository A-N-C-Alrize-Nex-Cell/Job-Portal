import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import JobDescription from './components/JobDescription';
import Jobs from './components/Jobs';
import Profile from './components/Profile';


function App() {

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/jobs'element={<Jobs/>}/>
        <Route path='/profile'element={<Profile/>}/>
        <Route path='/description/:id'element={<JobDescription/>}/>
        
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
