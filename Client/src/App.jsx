import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './component/Home.jsx'
import SignIn from './component/SignIn.jsx';
import LogIn from './component/LogIn.jsx';
import axios from 'axios';
import NavBar from './component/Navbar.jsx';
import MakeBlog from './component/MakeBlog.jsx';
import Profile from './component/Profile.jsx';
import Aos from 'aos';
import { useEffect } from 'react';

function App() {
 axios.defaults.withCredentials=true;
 useEffect(()=>{
   Aos.init({duration: 200});
 },[])
  return (
    <>
      <Router>
       <NavBar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/signin'  element={<SignIn/>}/>
          <Route path='/login'  element={<LogIn/>}/>
          <Route path='/blog'  element={<MakeBlog/>}/>
          <Route path='/profile'  element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
