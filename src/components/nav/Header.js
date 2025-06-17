import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  const [togglemenu, settogglemenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    settogglemenu(false);
    if (location.pathname === '/' || location.hash === '#/') {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="relative">
      <div className="flex justify-between px-5 py-7 w-full bg-[#111418] h-[50px] items-center z-50 absolute">
        <p className="font-medium text-[20px] text-white">Bavanagaran.R</p>

        <nav className="hidden sm:block z-50">
          <ul className="flex text-white gap-2">
            <li className="h-full rounded px-1 hover:text-[#F97316]"><button onClick={() => goToSection('#home')}>Home</button></li>
            <li className="h-full rounded px-1 hover:text-[#F97316]"><button onClick={() => goToSection('#about')}>About</button></li>
            <li className="h-full rounded px-1 hover:text-[#F97316]"><button onClick={() => goToSection('#project')}>Project</button></li>
            <li className="h-full rounded px-1 hover:text-[#F97316]"><button onClick={() => goToSection('#resume')}>Resume</button></li>
            <li className="h-full rounded px-1 hover:text-[#F97316]"><button onClick={() => goToSection('#contact')}>Contact</button></li>
          </ul>
        </nav>

        <button onClick={() => settogglemenu(!togglemenu)} className="block sm:hidden z-50">
          <Bars3Icon className="text-white h-7" />
        </button>
      </div>

      <nav className={`block sm:hidden z-0 w-full transition-all bg-[#030303] duration-500 absolute left-0 right-0 ${togglemenu ? "top-[56px]" : "-top-[400px]"}`}>
        <ul className="flex flex-col mobile-view-nav text-white px-2">
          <li className="text-center border-b py-2 hover:text-[#F97316]"><button className="w-full" onClick={() => goToSection('#home')}>Home</button></li>
          <li className="text-center border-b py-2 hover:text-[#F97316]"><button className="w-full" onClick={() => goToSection('#about')}>About</button></li>
          <li className="text-center border-b py-2 hover:text-[#F97316]"><button className="w-full" onClick={() => goToSection('#project')}>Project</button></li>
          <li className="text-center border-b py-2 hover:text-[#F97316]"><button className="w-full" onClick={() => goToSection('#resume')}>Resume</button></li>
          <li className="text-center border-b py-2 hover:text-[#F97316]"><button className="w-full" onClick={() => goToSection('#contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
