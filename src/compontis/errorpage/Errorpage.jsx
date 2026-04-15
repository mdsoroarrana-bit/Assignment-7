import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white px-6">
      
      <div className="text-center max-w-xl">
        
        {/* Icon */}
        <div className="text-6xl mb-4">⚠️</div>

        {/* Error Code */}
        <h1 className="text-8xl font-extrabold tracking-widest text-purple-400">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-300">
          Sorry, we couldn`t find the page you re looking for. It might have been removed or the link is broken.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-gray-400 hover:bg-gray-700 px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-gray-400">
          Error code: 404 | Page not found
        </p>
      </div>

    </div>
  );
};

export default Errorpage;