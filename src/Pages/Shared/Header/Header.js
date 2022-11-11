import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import alogo from '../../../assets/logo1.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const handleSignOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
  }

    const menuItems = <>
    <li>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        {/* <Link to='/login'>Login</Link> */}
    </li>
    </>
    const reviewItems = <>
    <li>
        <Link to='/addservice'>Add service</Link>
        <Link to='/myreviews'>My reviews</Link>
    </li>
    </>
    return (
        <div className="navbar bg-base-100 pt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              {menuItems}
            </ul>
          </div>
          <div className='flex'>
          <Link to='/'>
              <img className='h-12 mt-2' src={alogo} alt="" />
          </Link>
          <Link to='/'>
          <h1 className='text-xl font-bold mt-3 py-2'>ANCIENT SHOT</h1>
          </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-semibold">
          {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          
        
          <div>
            
            {
              user?.uid ?
              <div className='flex justify-between'>
            <div>
          <ul className="menu menu-horizontal p-0 font-semibold">
          {reviewItems}
          </ul>
        </div>
        <div>
        {
            user?.photoURL && <img className='rounded-full w-8 h-8 flex mt-2' src={user.photoURL} alt="" /> 
        }
          </div>
                <button onClick={handleSignOut} className="btn btn-outline text-cyan-50 bg-cyan-500 hover:bg-cyan-50 hover:text-cyan-500 hover:border-cyan-500">Logout</button>
              </div>
                      :
                      <Link to='/login' className=""><button className="btn btn-outline mx-2 text-cyan-500 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500">Login</button></Link>
            }
          </div>
        </div>
      </div>
    );
};

export default Header;