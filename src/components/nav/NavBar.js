import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import profile from '../../img/profile.jpg';
import database from '../../alldata/data';

const NavBar = () => {
  let { details } = useContext(database);
  const location = useLocation();
  const navigate = useNavigate();

  // check if current path is home
  const isHome = location.pathname === '/' || location.hash === '#/';

  const scrollOrNavigate = (id) => {
    if (isHome) {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      // Wait for the page to navigate, then scroll after a short delay
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen text-white py-8">
      <div className="rounded-full overflow-hidden w-40 border-[#343A40] border-4">
        <img src={profile} alt="profile" className="w-full h-full" />
      </div>

      <h1 className="text-2xl font-bold mt-4">Bavanagaran</h1>

      <nav className="mt-8">
        <ul className="space-y-4 text-center">
          <li><button onClick={() => scrollOrNavigate('#home')} className="hover:text-orange-500 font-semibold">Home</button></li>
          <li><button onClick={() => scrollOrNavigate('#about')} className="hover:text-orange-500">About Me</button></li>
          <li><button onClick={() => scrollOrNavigate('#project')} className="hover:text-orange-500">My Work</button></li>
          <li><button onClick={() => scrollOrNavigate('#resume')} className="hover:text-orange-500">Resume</button></li>
          <li><button onClick={() => scrollOrNavigate('#contact')} className="hover:text-orange-500">Contact</button></li>
        </ul>
      </nav>

      <div className="flex w-full gap-3 justify-center items-center mt-7">
        <a href={details.linkin_link} className="text-gray-400 hover:text-white">{details.linkdin_logo}</a>
        <a href={details.gamil_link} className="text-gray-400 hover:text-white">{details.gamil_logo}</a>
        <a href={details.git_link} className="text-gray-400 hover:text-white">{details.git_logo}</a>
      </div>
    </div>
  );
};

export default NavBar;
