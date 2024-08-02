import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './component/Home.jsx'
import SignIn from './component/SignIn.jsx';
import LogIn from './component/LogIn.jsx';
import axios from 'axios';
import NavBar from './component/Navbar.jsx';

function App() {
 axios.defaults.withCredentials=true;
  return (
    <>
      <Router>
       <NavBar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/signin'  element={<SignIn/>}/>
          <Route path='/login'  element={<LogIn/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
