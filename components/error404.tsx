import React from 'react';

const Error404: React.FC = () => {
  return (
    // Container that fills the entire screen and centers the content
    <div className="flex h-screen flex-col items-center justify-center bg-white px-4">
      
      {/* 404 Error Code: Large, bold text for emphasis */}
      <h1 className="text-9xl font-black text-gray-200">
        404
      </h1>
      
      {/* Main Error Message: Emphasized with larger text */}
      <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
        Uh-oh!
      </p>
      
      {/* Subtext: Informational message for the user */}
      <p className="mt-2 text-gray-500">
        We cant find that page.
      </p>
      
    </div>
  );
};

export default Error404;
