import Navbar from "@/component/navbar/page";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-4">
        <div className="text-center">
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-200 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-pink-200 rounded-full blur-xl opacity-50 animate-pulse delay-500"></div>

          {/* Main Content - بدون backdrop-blur */}
          <div className="relative mt-23 bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 max-w-md mx-auto">
            {/* Profile Icon */}
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl md:text-3xl text-white">👨‍💻</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
              Let's work together on your next project
            </p>

            {/* Email Section */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 md:p-6 shadow-lg mb-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="text-white text-center">
                <p className="text-xs md:text-sm opacity-90 mb-2">
                  Email me at
                </p>
                <a
                  href="mailto:ali.yazdanpanahfard@gmail.com"
                  className="text-lg md:text-xl font-bold hover:underline break-all"
                >
                  ali.yazdanpanahfard@gmail.com
                </a>
              </div>
            </div>

            {/* Role Badge */}
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              Frontend Developer
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 md:space-x-6 mt-6 md:mt-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl">📱</span>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl">💼</span>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-lg md:text-xl">🐙</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 md:w-6 md:h-6 bg-purple-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-full opacity-60"></div>
            <div className="absolute -top-2 -left-2 w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full opacity-60"></div>
          </div>

          {/* Footer Note */}
          <p className="text-gray-500 text-xs md:text-sm mt-6 md:mt-8">
            I'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
