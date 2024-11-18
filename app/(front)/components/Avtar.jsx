"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Avatar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <img
        id="AvtarButton"
        type="button"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src="user.jpg"
        alt="User dropdown"
      />

      {dropdownOpen && (
        <div
          id="userDropdown"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@gmail.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="AvtarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            
          </ul>
          <div className="py-1">
            <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign in</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
