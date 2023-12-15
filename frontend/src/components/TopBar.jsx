import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 text-white">
          <div className="flex justify-start">
            <button>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Icon from Heroicons (menu icon) */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="flex-grow text-center font-semibold text-xl">
            Spring Boot React Full Stack Application
          </div>
          <div>
            {/* <button className="font-semibold">Login</button> */}
            <h1>---</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
