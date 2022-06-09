import React from 'react';
import { Link } from 'react-router-dom';

const NaveBar = ({ children }) => {
  return (
    <div className="drawer drawer-mobile bg-[#ecf0f3]">
      <input id="myMainSideBarMenu" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* <!-- Page content here -->  */}
        <label htmlFor="myMainSideBarMenu" className="btn rounded-none w-full drawer-button lg:hidden"> Menu </label>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="myMainSideBarMenu" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 text-base-content">
          {/* <!-- Sidebar content here -->  */}
          <li><Link className='kib_inside_effect mt-4' to='/'>Home</Link></li>
          <li><Link className='kib_inside_effect mt-4' to='/Contact'>Contact Me</Link></li>
          <li><Link className='kib_inside_effect mt-4' to='/MyPortfolio'> My Projects </Link></li>
        </ul>

      </div>
    </div>
  );
};

export default NaveBar;