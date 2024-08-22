import React, { useEffect, useRef, useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { user } from "../store/slice/userSlice";
import { useSelector,useDispatch } from "react-redux";

const NavBar = () => {
  const proImg=useRef();
  const dispatch =useDispatch();
  useEffect(()=>{
       dispatch(user());
  },[]);
  const users=useSelector((state)=>{return state.user.data});
  //console.log(user);
  const navigate=useNavigate();
  const [toggl, setToggl] = useState(false);

  const tog = () => {
    if(toggl===false){
     
      setToggl(true);
    }
    else{
    
      setToggl(false);
    }
  };
  useEffect(() => {
    let timer;
  
    const listener = () => {
      if (document.hidden) {
        timer = setTimeout(() => {
          deleteCookie();
          navigate('/login');
        }, 15 * 60 * 1000); // 15 minutes
      } else {
        clearTimeout(timer);
      }
    };
  
    document.addEventListener('visibilitychange', listener);
  
    return () => {
      document.removeEventListener('visibilitychange', listener);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (proImg.current && !proImg.current.contains(event.target)) {
        setToggl(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toggl]);
  
  const deleteCookie=async ()=>{
    await axios.delete('http://localhost:8080/deleteCookie').then(()=>{
      dispatch(user());
      navigate('/');
      alert("cookie is deleted");
      tog();
      //window.location.reload();

    }).catch((err)=>{console.log("Error deleting cookie")});
  }
  const profile= ()=>{
    tog();
    navigate('/profile');
  }
  return (
    <nav className="bg-gray-800 h-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src="logo.png" alt="Your Company" />
            </div>
            <div className=" sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  DashBoard
                </button>
                <Link to="/">
                
                  <button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
      
{users===null? (
  <>
        <Link to="/signin">
                  <button
                    href="#"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white mr-4"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                   SignIn
                  </button>
                </Link>
                <Link to='/LogIn'>
                <button
                  href="#"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white ml-4"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  LogIn
                </button>
                </Link>
</>
):
(

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Link to='/blog'>
                <button
                  href="#"
                  className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white ml-4"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                Add Blog
                </button>
                </Link>
          <div className="relative ml-3">
            <div>
              <button
                ref={proImg}
                onClick={tog}
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={users.userImage}
                  alt=""
                />
              </button>
            </div>

            {toggl && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                  <button
                  onClick={profile}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </button>
                <button
                onClick={deleteCookie}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
)}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
