import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLanguage } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLanguageMenuOpen(false); // Close language menu when opening navigation menu
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
    setMenuOpen(false); // Close navigation menu when opening language menu
  };

  const handleClickOutside = (event) => {
    const navMenu = document.getElementById('navigation-menu');
    const languageMenu = document.getElementById('language-menu');

    if (!navMenu.contains(event.target) && !event.target.closest('button[name="navigation-menu-btn"]')) {
      setMenuOpen(false);
    }
    if (!languageMenu.contains(event.target) && !event.target.closest('button[name="language-btn"]')) {
      setLanguageMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="backdrop-blur-lg bg-gray-900 bg-opacity-10 px-3 py-4 w-screen z-20">
      <div className="fade-in-up flex items-center justify-end justify-items-center max-w-6xl mx-auto w-full sm:justify-between">
        <a href="#" className="animate-bounce mr-auto sm:mr-0">
          <img src="/images/logo/Tonkeeper-battery.png" alt="Tonkeeper-logo" width="35" />
        </a>
        <nav className="flex relative">
          <button className="block duration-200 transition-all sm:hidden" name="navigation-menu-btn" type="button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-50" />
          </button>
          <ul id="navigation-menu" className={`${menuOpen ? 'flex' : 'hidden'} absolute bg-gray-700 flex-col gap-2 items-center justify-center justify-items-center p-2 right-0 rounded-md shadow-xl top-14 sm:bg-transparent sm:flex sm:flex-row sm:gap-6 sm:p-0 sm:relative sm:right-0 sm:rounded-none sm:shadow-none sm:top-0`}>
            <li className="mb-2 w-full sm:mb-0 sm:w-auto">
              <a href="#home" className="block capitalize duration-200 font-semibold hover:bg-gray-800 hover:rounded-md hover:text-white p-2 text-base text-gray-300 transition-all sm:hover:bg-transparent sm:hover:rounded-none sm:p-0">
                Home
              </a>
            </li>
            <li className="mb-2 w-full sm:mb-0 sm:w-auto">
              <a href="#features" className="block capitalize duration-200 font-semibold hover:bg-gray-800 hover:rounded-md hover:text-white p-2 text-base text-gray-300 transition-all sm:hover:bg-transparent sm:hover:rounded-none sm:p-0">
                Features
              </a>
            </li>
            <li className="mb-2 w-full sm:mb-0 sm:w-auto">
              <a href="#overview" className="block capitalize duration-200 font-semibold hover:bg-gray-800 hover:rounded-md hover:text-white p-2 text-base text-gray-300 transition-all sm:hover:bg-transparent sm:hover:rounded-none sm:p-0">
                Overview
              </a>
            </li>
            <li className="mb-2 w-full sm:mb-0 sm:w-auto">
              <a href="#getstarted" className="block capitalize duration-200 font-semibold hover:bg-gray-800 hover:rounded-md hover:text-white p-2 text-base text-gray-300 transition-all sm:hover:bg-transparent sm:hover:rounded-none sm:p-0">
                Get Started
              </a>
            </li>
            <li className="mb-2 w-full sm:mb-0 sm:w-auto">
              <a href="https://t.me/help_tonkeeper_bot" target="_blank" rel="noopener noreferrer" className="block capitalize duration-200 font-semibold hover:bg-gray-800 hover:rounded-md hover:text-white p-2 text-base text-gray-300 transition-all sm:hover:bg-transparent sm:hover:rounded-none sm:p-0">
                Community
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col ml-3 relative sm:ml-0">
          <button className="capitalize duration-200 flex font-semibold gap-1 hover:bg-gray-700 hover:rounded-lg items-center px-3 py-2 text-base text-gray-100 transition-all" name="language-btn" type="button" onClick={toggleLanguageMenu}>
            <FontAwesomeIcon icon={faLanguage} className="fa-pull-left" />
            Eng
          </button>
          <div id="language-menu" className={`${languageMenuOpen ? 'flex' : 'hidden'} absolute backdrop-blur bg-gray-700 right-0 rounded-lg shadow-xl top-16`}>
            <ul className="capitalize duration-200 flex flex-col font-semibold gap-2 items-center justify-items-start justify-start list-none p-2 text-base text-center text-white transition-all w-40">
              {['English', 'Español', 'हिन्दी', '中文', 'Português', 'Русский', 'Bahasa Indonesia', 'Turkish', 'Українська', '한국어'].map((lang) => (
                <li key={lang} className="cursor-pointer duration-200 hover:bg-gray-800 hover:rounded-lg hover:text-gray-50 p-2 text-gray-300 transition-all w-full">
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
