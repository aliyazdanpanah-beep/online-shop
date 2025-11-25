"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-4">
      <div className="text-center">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-200 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-pink-200 rounded-full blur-xl opacity-50 animate-pulse delay-500"></div>

        {/* Main Content */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/60 max-w-md mx-auto">
          {/* Error Number */}
          <div className="text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            404
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            The page you're looking for seems to have wandered off into the
            digital void.
          </p>

          {/* Animated Icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <span className="text-3xl text-white">🔍</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Go Home
            </Link>

            <Link
              href="/store"
              className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-300"
            >
              Browse Store
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute -top-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>If you believe this is an error, please contact support</p>
          <a
            href="mailto:ali.yazdanpanahfard@gmail.com"
            className="text-purple-600 hover:underline"
          >
            ali.yazdanpanahfard@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
