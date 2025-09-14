"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>

            {/* Nav */}
            <nav className="hidden md:flex gap-10">
              <a href="#home" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#scalp-analysis" className="text-gray-700 hover:text-green-600 font-medium">Scalp Analysis</a>
              <a href="#blood-tests" className="text-gray-700 hover:text-green-600 font-medium">Blood Tests</a>
              <a href="#consult" className="text-gray-700 hover:text-green-600 font-medium">Consult</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
            </nav>

            {/* CTA */}
            <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300">
              Start Scalp Analysis
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[700px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/getstarted.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Stronger Hair Starts with Deeper Analysis.
            </h1>
            <p className="text-xl mb-8 text-white opacity-90">
              Personalized scalp reports, dermatologist-backed blood tests & solutions designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                Start Scalp Test
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition duration-300">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section id="scalp-analysis" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Know Your Scalp in 2 Minutes
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Answer simple questions, get your scalp health report instantly.
          </p>

          <div className="max-w-2xl mx-auto bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to start your scalp analysis?
            </h3>
            <p className="text-lg mb-6">
              Click below to begin your personalized assessment
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Try Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">FolliclePlus</div>
            <p className="text-gray-400 mb-4">
              Stronger hair starts with deeper analysis.
            </p>
            <div className="flex space-x-4 text-2xl">
              <span>📘</span>
              <span>📷</span>
              <span>🐦</span>
              <span>📺</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400">📧 hello@follicleplus.com</p>
            <p className="text-gray-400">📞 1-800-FOLLICLE</p>
            <p className="text-gray-400">🏢 Wellness City, WC</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest hair care tips.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-full text-gray-900"
              />
              <button className="bg-purple-600 px-6 py-2 rounded-r-full hover:bg-purple-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-12 border-t border-gray-800 pt-8">
          © 2024 FolliclePlus. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
