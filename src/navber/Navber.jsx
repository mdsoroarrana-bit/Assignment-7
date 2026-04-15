import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
    const Links =(
        <>
         <li>
            <NavLink to={"/"} className={({isActive}) => isActive ? "text-white  bg-emerald-800" : ""} >Home</NavLink>
            </li>
         <li>
            <NavLink to={"/timeline"} className={({isActive}) => isActive ? "text-white bg-emerald-800" : ""} >Timeline</NavLink>
            </li>
         <li>
            <NavLink to={"/stats"} className={({isActive}) => isActive ? "text-white  bg-emerald-800" : ""} >Stats</NavLink>
            </li>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
               {Links}
              </ul>
            </div>
            <p className="text-2xl text-stone-700 font-bold ">Keen<span className="text-[#194536]">Keeper</span> </p>
          </div>
          
          <div className="navbar-end">
           <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 m-4 gap-4">
               {Links}
            </ul>
          </div>
          </div>
        </div>
        </div>
    );
};

export default Navber;