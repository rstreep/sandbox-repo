import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return(
        <div className="min-h-screen flex flex-col">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-lg font-semibold">My App</h1>
            <Link to="/login" className="text-white hover:text-blue-300">
              Login
            </Link>
          </div>
        </nav>
        <div className="flex-1 container mx-auto flex items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">Welcome to My App</h2>
          <p className="text-gray-600">
            This is the homepage content. You can add your content here.
          </p>
        </div>
      </div> 
    );
};