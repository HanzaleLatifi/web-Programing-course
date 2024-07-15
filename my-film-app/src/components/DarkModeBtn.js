import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';


const DarkModeBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's theme preference on initial load
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex items-center h-8 w-16 rounded-full p-1 bg-gray-300 dark:bg-gray-800 focus:outline-none transition-colors duration-300"
    >
      <span
        className={`absolute left-1 transform transition-transform duration-200 ${
          isDarkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        {isDarkMode ? (
          <MoonIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        )}
      </span>
    </button>
  );
};

export default DarkModeBtn;
