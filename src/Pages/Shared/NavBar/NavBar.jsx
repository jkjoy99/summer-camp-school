import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavBar = () => {
  
  const {user, logOut}= useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch( error => console.error(error));
  }

  const navItems = <>
    <li ><Link to='/'> Home</Link></li>
    <li><Link to='/instructors'> Instructors</Link></li>
    <li><Link to='/classes'> Classes</Link></li>
    
    {
      user ? <> 
      <button onClick={handleLogOut} className="btn btn-ghost">logout</button>
     <img className='rounded-full  w-10 h-10 mt-1 bg-slate-800 opacity-100 'title={user.email} src= { user.photoURL }  alt="" /> 
       </> : <> 
      <li><Link to='/login'>Login</Link></li>
      <li ><Link to='/signup'> SignUp</Link></li>
      </>
    }

  </>

  return (
    <div className="navbar fixed z-30 -mt-0 bg-opacity-40 max-w-7xl text-black bg-red-100 shadow-xl rounded-lg h-28  mb-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">


            {navItems}

          </ul>
        </div>
        <Link to="/" className=" ">
          <img className='rounded-full w-16 h-16 ml-4  ' src="https://as1.ftcdn.net/v2/jpg/05/60/63/32/1000_F_560633236_TVV7yZeu1OofG70GMpKg78vkVzoUpWRN.jpg" alt="" />
        </Link>
        <p className='ml-4 font-bold text-2xl'> Music Instrument Learning School </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg ">
          {navItems}
          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;