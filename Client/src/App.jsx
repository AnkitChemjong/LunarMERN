import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './component/Home.jsx'
import SignIn from './component/SignIn.jsx';
import LogIn from './component/LogIn.jsx';
import axios from 'axios';
import NavBar from './component/Navbar.jsx';
import MakeBlog from './component/MakeBlog.jsx';
import Profile from './component/Profile.jsx';
import Aos from 'aos';
import React,{ useEffect,useState } from 'react';
import Loading from './component/Loading.jsx';
import { useSelector } from 'react-redux';

function App() {
  const [loading,setLoading]=useState(true);
 axios.defaults.withCredentials=true;
 const user=useSelector((state)=>{return state.user.loading})
//  const blog=useSelector((state)=>{return state.blogs.status})
//  const userBlog=useSelector((state)=>{return state.userB.status})
//  console.log(userBlog,user,blog)
 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  },1000);
 },[])
 useEffect(()=>{
   Aos.init({duration: 200});
 },[])
 if(loading){
  
  return(
    <Loading/>
  )
 }
 else{
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
 }

export default App
