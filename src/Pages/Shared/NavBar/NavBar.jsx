import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RiSunFill } from 'react-icons/ri';
import { BsFillMoonFill } from 'react-icons/bs';
import { AuthContext } from '../../../Providers/AuthProvider';
import useInstructor from '../../../Hooks/useInstructor';
import useAdmin from '../../../Hooks/useAdmin';
import  './NavBar.css'

const NavBar = () => {

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [theme, setTheme] = useState('light-theme');

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  const setThemeItem = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
    else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      
      {isAdmin?.admin ? (
        <li>
          <Link to="/dashboard/manageusers">Dashboard</Link>
        </li>
      ) : isInstructor?.instructor ? (
        <li>
          <Link to="/dashboard/addclass">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/enrolledclass">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl calor pb-4  shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img
              className="h-16 w-16 mr-3 rounded-full"
              src="https://as1.ftcdn.net/v2/jpg/05/60/63/32/1000_F_560633236_TVV7yZeu1OofG70GMpKg78vkVzoUpWRN.jpg"
              alt=""
            />{" "}
            <h2 className="text-2xl font-bold drop-shadow-2xl text-purple-600">
              Music Instrument School
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-ghost normal-case text-xl"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost normal-case text-xl">
                Login
              </Link>
              <Link to="/signup" className="btn btn-ghost normal-case text-xl">
                SignUP
              </Link>
            </>
          )}
          <div className='block mr-6'>
                {
                  theme === 'dark-theme' ? <RiSunFill  className='font-bold text-3xl icons' onClick={() => setThemeItem('dark-theme')} /> : <BsFillMoonFill className='font-bold text-2xl icons' onClick={() => setThemeItem('light-theme')} />
                }
              </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;