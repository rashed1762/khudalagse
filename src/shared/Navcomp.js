import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import img1 from '../assests/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './nav.css'
import { useContext } from 'react';
import { AuthContext } from './../context/AuthProvider';

const Navcomp = () => {
  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err));
  }
  return (
    <div>
      <div className="navbar bg-green-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl logo">Khuda Lagse?</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a><NavLink to='/' as={Link}>Home</NavLink></a></li>
      <li><a><NavLink to='/about' as={Link}>about</NavLink></a></li>
      <li><a><NavLink to='/food' as={Link}>food</NavLink></a></li>
      <div className='profile'>

</div>
      
      
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-outline btn-accent btn-box avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        {
          user?.uid?
          <li><button onClick={handleLogOut} className="btn btn-ghost">Log Out</button></li>
          :<li><a><NavLink to='/login' as={Link}>Login</NavLink></a></li>
        }
       
      </ul>
    </div>
  </div>
</div>
<div className='extranav'>

<div className='cart mt-16'>
  <NavLink to='/cart' as={Link} >
  <label tabIndex={0} className="btn btn-outline btn-accent btn-box">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cartimg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
  </NavLink>

</div>
</div>


    </div>
  )
}

export default Navcomp;
