'use client'

import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg animate-pulse">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 text-center mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors duration-300"
          >
            Go Back Home
          </a>
        </div>
      </div>
      <div className="mt-8 animate-bounce">
        <svg
          className="w-16 h-16 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;