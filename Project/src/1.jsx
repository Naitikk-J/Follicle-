import React from "react";
import "./App.css"; // import custom CSS
button {
  border-radius: 9px;
  border: px solid;
  background-color: #0B3D2E;
  padding: 0.2em 0.8em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}

export default function App() {
  return (
    <div className="bg-gray-50 font-inter">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-purple-600">🧬 FolliclePlus</div>

            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 font-medium">Home</a>
              <a href="#scalp-analysis" className="text-gray-700 hover:text-purple-600 font-medium">Scalp Analysis</a>
              <a href="#blood-tests" className="text-gray-700 hover:text-purple-600 font-medium">Blood Tests</a>
              <a href="#products" className="text-gray-700 hover:text-purple-600 font-medium">Products</a>
              <a href="#consult" className="text-gray-700 hover:text-purple-600 font-medium">Consult a Dermatologist</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact</a>
            </nav>

            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
              Start Scalp Analysis
            </button>

            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

     
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-4">🧬 FolliclePlus</div>
          <p className="text-gray-400 mb-4">Stronger hair starts with deeper analysis.</p>
          <p className="text-gray-400">&copy; 2024 FolliclePlus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react'; // Added useState, useEffect, useRef imports

// Custom Modal Component for user feedback
const Modal = ({ show, title, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-[100]">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Navbar = ({ onStartScalpAnalysis }) => { // Added onStartScalpAnalysis prop
  return (
    <nav className="hidden md:flex fixed top-0 left-0 w-full bg-white shadow-xl z-50 px-6 py-3 items-center justify-between rounded-b-xl">
      <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img
          // Replaced local image path with a placeholder for Canvas environment compatibility
          src="https://placehold.co/48x48/008080/ffffff?text=FP"
          alt="FolliclePlus Logo"
          className="h-12 w-12 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/CCCCCC/FFFFFF?text=Logo"; }}
        />
        <div className="text-2xl font-bold text-green-900 transition-colors duration-300 hover:text-green-700">FolliclePlus</div>
      </div>

      <div className="flex justify-center items-center space-x-8 flex-grow">
        <a href="#home" className="nav-link relative text-gray-700 hover:text-green-600 font-medium transition-all duration-300 ease-in-out group py-2">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a href="#scalp-analysis" className="nav-link relative text-gray-700 hover:text-green-600 font-medium transition-all duration-300 ease-in-out group py-2">
          Scalp Analysis
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a href="#blood-tests" className="nav-link relative text-gray-700 hover:text-green-600 font-medium transition-all duration-300 ease-in-out group py-2">
          Blood Tests
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a href="#consult" className="nav-link relative text-gray-700 hover:text-green-600 font-medium transition-all duration-300 ease-in-out group py-2">
          Consult a Dermatologist
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a href="#about" className="nav-link relative text-gray-700 hover:text-green-600 font-medium transition-all duration-300 ease-in-out group py-2">
          About Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a href="#contact" className="nav-link relative text-gray-700 hover:text-green-600 font-medium transition-all duration-300 ease-in-out group py-2">
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          onClick={onStartScalpAnalysis} // Added onClick handler
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md transform hover:scale-105 transition-transform duration-300 active:scale-95"
        >
          Start Analysis
        </button>
      </div>
    </nav>
  );
};

const SectionCard = ({ title, description, emoji }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
    <div className="text-5xl mb-4">{emoji}</div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const HeroSection = ({ onStartScalpTest, onBookConsultation }) => (
  <section id="home" className="hero-gradient text-white py-20"
    style={{ background: 'linear-gradient(135deg, #a7f3d0 0%, #34d399 50%, #06b6d4 100%)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Stronger Hair Starts with Deeper Analysis.
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Personalized scalp reports, dermatologist-backed blood tests & solutions designed just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onStartScalpTest} className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Start Scalp Test
            </button>
            <button onClick={onBookConsultation} className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition duration-300">
              Book Consultation
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <svg width="400" height="400" viewBox="0 0 400 400" className="drop-shadow-2xl">
              <circle cx="200" cy="200" r="180" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              <circle cx="200" cy="200" r="120" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
              <circle cx="200" cy="200" r="60" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
              <path d="M200 80 Q190 60 185 40 Q180 20 175 0" stroke="rgba(255,255,255,0.8)" strokeWidth="3" fill="none"/>
              <path d="M220 85 Q230 65 235 45 Q240 25 245 5" stroke="rgba(255,255,255,0.7)" strokeWidth="3" fill="none"/>
              <path d="M180 90 Q170 70 165 50 Q160 30 155 10" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none"/>
              <circle cx="150" cy="150" r="8" fill="#FFD700" className="animate-pulse"/>
              <circle cx="250" cy="150" r="8" fill="#FFD700" className="animate-pulse"/>
              <circle cx="200" cy="250" r="8" fill="#FFD700" className="animate-pulse"/>
              <circle cx="170" cy="220" r="8" fill="#FFD700" className="animate-pulse"/>
              <circle cx="230" cy="220" r="8" fill="#FFD700" className="animate-pulse"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QuizQuestions = [
  {
    title: "How often do you wash your hair?",
    text: "This helps us understand your hair care routine",
    options: ["Daily", "Every other day", "2-3 times a week", "Once a week"]
  },
  {
    title: "Do you experience hair fall?",
    text: "Select the option that best describes your situation",
    options: ["Minimal", "Moderate", "Significant", "Severe"]
  },
  {
    title: "How would you describe your scalp?",
    text: "Understanding your scalp type is crucial",
    options: ["Oily", "Dry", "Normal", "Sensitive"]
  },
  {
    title: "Any recent lifestyle changes?",
    text: "Stress and diet can affect hair health",
    options: ["High stress", "Diet changes", "New medications", "None"]
  },
  {
    title: "What's your main hair concern?",
    text: "This will help us prioritize your treatment",
    options: ["Hair loss", "Thinning", "Dandruff", "Slow growth"]
  }
];

const ScalpAnalyzer = ({ onFinishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const totalQuestions = QuizQuestions.length;

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  const selectAnswer = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinishQuiz();
    }
  };

  const progressPercent = currentQuestionIndex === -1 ? 0 : ((currentQuestionIndex) / totalQuestions) * 100;
  const progressText = currentQuestionIndex === -1 ? "0/5" : `${currentQuestionIndex}/${totalQuestions}`;

  const currentQuestion = QuizQuestions[currentQuestionIndex];

  return (
    <section id="scalp-analysis" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Know Your Scalp in 2 Minutes</h2>
          <p className="text-xl text-gray-600">Answer simple questions, get your scalp health report instantly.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-teal-500 to-lime-500 rounded-2xl p-8 text-white">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm font-medium">{progressText}</span>
              </div>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                <div className="progress-bar bg-white h-2 rounded-full" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>

            <div className="quiz-card min-h-[200px] flex items-center justify-center">
              {currentQuestionIndex === -1 ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to start your scalp analysis?</h3>
                  <p className="text-lg mb-6">Click below to begin your personalized assessment</p>
                  <button onClick={startQuiz} className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                    Try Now
                  </button>
                </div>
              ) : (currentQuestionIndex < totalQuestions ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{currentQuestion.title}</h3>
                  <p className="text-lg mb-6">{currentQuestion.text}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => selectAnswer(index)}
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-4">Analysis Complete!</h3>
                  <p className="text-lg mb-6">Your personalized scalp report is ready. We've identified key areas for improvement.</p>
                  <button onClick={onFinishQuiz} className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                    View Your Report
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseFolliclePlus = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FolliclePlus</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center card-hover bg-white p-8 rounded-2xl transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="text-6xl mb-4">🔬</div>
          <h3 className="text-xl font-semibold mb-3">Science-backed blood tests</h3>
          <p className="text-gray-600">Advanced diagnostics to identify root causes of hair issues</p>
        </div>

        <div className="text-center card-hover bg-white p-8 rounded-2xl transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="text-6xl mb-4">👩‍⚕️</div>
          <h3 className="text-xl font-semibold mb-3">Dermatologist approved</h3>
          <p className="text-gray-600">All treatments reviewed and recommended by certified specialists</p>
        </div>

        <div className="text-center card-hover bg-white p-8 rounded-2xl transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="text-6xl mb-4">🧴</div>
          <h3 className="text-xl font-semibold mb-3">Personalized recommendations</h3>
          <p className="text-gray-600">Custom product selection based on your unique scalp profile</p>
        </div>

        <div className="text-center card-hover bg-white p-8 rounded-2xl transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-3">Track progress with reports</h3>
          <p className="text-gray-600">Monitor your hair health journey with detailed analytics</p>
        </div>
      </div>
    </div>
  </section>
);

const BloodTestConsultation = ({ onBookTest }) => (
  <section id="blood-tests" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <svg width="500" height="400" viewBox="0 0 500 400" className="w-full h-auto">
            <rect x="50" y="50" width="400" height="300" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
            <circle cx="150" cy="150" r="30" fill="#a7f3d0"/>
            <rect x="120" y="180" width="60" height="80" rx="10" fill="#2dd4bf"/>
            <rect x="130" y="190" width="40" height="5" fill="white"/>
            <circle cx="350" cy="150" r="30" fill="#bef264"/>
            <rect x="320" y="180" width="60" height="80" rx="10" fill="#84cc16"/>
            <rect x="200" y="100" width="100" height="120" rx="5" fill="white" stroke="#d1d5db"/>
            <rect x="210" y="110" width="80" height="8" fill="#e5e7eb"/>
            <rect x="210" y="125" width="60" height="6" fill="#e5e7eb"/>
            <rect x="210" y="140" width="70" height="6" fill="#e5e7eb"/>
            <rect x="210" y="155" width="50" height="6" fill="#10b981"/>
            <rect x="210" y="170" width="65" height="6" fill="#ef4444"/>
            <rect x="210" y="185" width="55" height="6" fill="#10b981"/>
            <circle cx="100" cy="300" r="15" fill="#ef4444"/>
            <rect x="95" y="295" width="10" height="2" fill="white"/>
            <rect x="99" y="291" width="2" height="10" fill="white"/>
            <circle cx="400" cy="300" r="15" fill="#2dd4bf"/>
            <path d="M395 300 L400 295 L405 300 L400 305 Z" fill="white"/>
          </svg>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get to the Root Cause of Hair Loss</h2>
          <p className="text-lg text-gray-600 mb-8">Our comprehensive blood tests analyze key factors affecting your hair health.</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-700"><strong>Vitamin D:</strong> Essential for hair follicle health</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-700"><strong>Iron Levels:</strong> Critical for hair growth cycles</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-700"><strong>Thyroid Function:</strong> Regulates hair growth rate</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-gray-700"><strong>Hormones:</strong> Balance affects hair thickness</span>
            </div>
          </div>

          <button onClick={onBookTest} className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Book Your Test Today
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ProductsSection = ({ onAddToCart, onShopAll }) => (
  <section id="products" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-xl text-gray-600">Scientifically formulated solutions for every hair type</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-6 transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl h-48 mb-4 flex items-center justify-center">
            <div className="text-6xl">🧴</div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Revitalizing Shampoo</h3>
          <p className="text-gray-600 mb-4">Deep cleansing formula with biotin and keratin</p>
          <button onClick={() => onAddToCart('shampoo')} className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Add to Cart - $29.99
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl h-48 mb-4 flex items-center justify-center">
            <div className="text-6xl">💧</div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Growth Serum</h3>
          <p className="text-gray-600 mb-4">Advanced peptide complex for hair regeneration</p>
          <button onClick={() => onAddToCart('serum')} className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Add to Cart - $49.99
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl h-48 mb-4 flex items-center justify-center">
            <div className="text-6xl">💊</div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Hair Supplements</h3>
          <p className="text-gray-600 mb-4">Essential vitamins and minerals for healthy hair</p>
          <button onClick={() => onAddToCart('supplements')} className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Add to Cart - $39.99
          </button>
        </div>
      </div>

      <div className="text-center">
        <button onClick={onShopAll} className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
          Shop All Products
        </button>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
        <p className="text-xl text-gray-600">Trusted by 1000+ people</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="testimonial-card bg-gray-50 rounded-2xl p-8 shadow-md transition transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              S
            </div>
            <div className="ml-4">
              <h4 className="font-semibold">Sarah M.</h4>
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">"After 3 months of using FolliclePlus products, my hair is noticeably thicker and healthier. The scalp analysis was spot-on!"</p>
          <div className="text-sm text-gray-500">Before/After: 40% increase in hair density</div>
        </div>

        <div className="testimonial-card bg-gray-50 rounded-2xl p-8 shadow-md transition transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
              M
            </div>
            <div className="ml-4">
              <h4 className="font-semibold">Michael R.</h4>
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">"The blood test revealed my iron deficiency was causing hair loss. Now I'm on the right supplements and seeing real results."</p>
          <div className="text-sm text-gray-500">Before/After: Reduced hair fall by 60%</div>
        </div>

        <div className="testimonial-card bg-gray-50 rounded-2xl p-8 shadow-md transition transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="ml-4">
              <h4 className="font-semibold">Amanda K.</h4>
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">"The dermatologist consultation was incredibly helpful. Finally found products that work for my sensitive scalp."</p>
          <div className="text-sm text-gray-500">Before/After: Eliminated scalp irritation</div>
        </div>
      </div>
    </div>
  </section>
);

const BlogSection = ({ onReadArticle }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn from Experts</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 h-48 flex items-center justify-center">
            <div className="text-6xl">🥗</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Best Diet for Hair Growth</h3>
            <p className="text-gray-600 mb-4">Discover the essential nutrients your hair needs to thrive and grow stronger.</p>
            <button onClick={() => onReadArticle('diet')} className="text-green-600 font-semibold hover:text-green-700">Read More →</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-md transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-gradient-to-br from-red-400 to-pink-500 h-48 flex items-center justify-center">
            <div className="text-6xl">🔬</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Dandruff vs Psoriasis: Know the Difference</h3>
            <p className="text-gray-600 mb-4">Learn to identify and treat different scalp conditions effectively.</p>
            <button onClick={() => onReadArticle('conditions')} className="text-green-600 font-semibold hover:text-green-700">Read More →</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-md transition transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="bg-gradient-to-br from-teal-400 to-indigo-500 h-48 flex items-center justify-center">
            <div className="text-6xl">📚</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Latest Research on Hair Fall</h3>
            <p className="text-gray-600 mb-4">Stay updated with cutting-edge research and breakthrough treatments.</p>
            <button onClick={() => onReadArticle('research')} className="text-green-600 font-semibold hover:text-green-700">Read More →</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTABanner = ({ onStartFreeAnalysis }) => (
  <section className="gradient-bg text-white py-20" style={{ background: 'linear-gradient(135deg, #2dd4bf 0%, #059669 100%)' }}>
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-bold mb-8">Take the First Step to Healthier Hair.</h2>
      <button onClick={onStartFreeAnalysis} className="bg-white text-green-600 px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition duration-300">
        Start Free Scalp Analysis
      </button>
    </div>
  </section>
);

const Footer = ({ onSubscribeNewsletter, onOpenSocial }) => {
  const emailRef = useRef(null);

  const handleSubscribe = () => {
    const email = emailRef.current.value;
    onSubscribeNewsletter(email);
    if (email) {
      emailRef.current.value = '';
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">🧬 FolliclePlus</div>
            <p className="text-gray-400 mb-4">Stronger hair starts with deeper analysis.</p>
            <div className="flex space-x-4">
              <button onClick={() => onOpenSocial('facebook')} className="text-2xl hover:text-green-400">📘</button>
              <button onClick={() => onOpenSocial('instagram')} className="text-2xl hover:text-green-400">📷</button>
              <button onClick={() => onOpenSocial('twitter')} className="text-2xl hover:text-green-400">🐦</button>
              <button onClick={() => onOpenSocial('youtube')} className="text-2xl hover:text-green-400">📺</button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@follicleplus.com</p>
              <p>📞 1-800-FOLLICLE</p>
              <p>🏢 123 Hair Health Ave<br/>Wellness City, WC 12345</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest hair care tips.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-full text-gray-900" ref={emailRef} />
              <button onClick={handleSubscribe} className="bg-green-600 px-6 py-2 rounded-r-full hover:bg-green-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FolliclePlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  const scalpAnalysisRef = useRef(null);

  const openModal = (title, message) => {
    setModalContent({ title, message });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleStartScalpAnalysis = () => {
    if (scalpAnalysisRef.current) {
      scalpAnalysisRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConsultation = () => {
    openModal('Consultation Booking', 'Consultation booking feature coming soon! Call 1-800-FOLLICLE to book now.');
  };

  const handleBookTest = () => {
    openModal('Blood Test Booking', 'Blood test booking feature coming soon! Our team will contact you within 24 hours.');
  };

  const handleAddToCart = (product) => {
    openModal('Cart Update', `${product.charAt(0).toUpperCase() + product.slice(1)} added to cart! Checkout feature coming soon.`);
  };

  const handleShopAll = () => {
    openModal('Products', 'Full product catalog coming soon! Contact us for immediate orders.');
  };

  const handleReadArticle = (topic) => {
    openModal('Blog Article', `Opening article about ${topic}. Full blog section coming soon!`);
  };

  const handleFinishQuiz = () => {
    openModal('Analysis Complete', 'Your detailed scalp report will be emailed to you within 5 minutes!');
  };

  const handleSubscribeNewsletter = (email) => {
    if (email) {
      openModal('Newsletter', 'Thank you for subscribing! You\'ll receive our weekly hair care tips.');
    } else {
      openModal('Newsletter', 'Please enter your email address.');
    }
  };

  const handleOpenSocial = (platform) => {
    openModal('Social Media', `Opening ${platform} page. Follow us for daily hair care tips!`);
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .hero-gradient { background: linear-gradient(135deg, #a7f3d0 0%, #34d399 50%, #06b6d4 100%); }
        .gradient-bg { background: linear-gradient(135deg, #2dd4bf 0%, #059669 100%); }
        .quiz-card { min-height: 200px; display: flex; align-items: center; justify-content: center; }
        .testimonial-card { min-height: 300px; }
      `}</style>

      <Navbar onStartScalpAnalysis={handleStartScalpAnalysis} />

      <HeroSection onStartScalpTest={handleStartScalpAnalysis} onBookConsultation={handleBookConsultation} />

      <div ref={scalpAnalysisRef}>
        <ScalpAnalyzer onFinishQuiz={handleFinishQuiz} />
      </div>

      <WhyChooseFolliclePlus />

      <BloodTestConsultation onBookTest={handleBookTest} />

      <ProductsSection onAddToCart={handleAddToCart} onShopAll={handleShopAll} />

      <Testimonials />

      <BlogSection onReadArticle={handleReadArticle} />

      <CTABanner onStartFreeAnalysis={handleStartScalpAnalysis} />

      <Footer onSubscribeNewsletter={handleSubscribeNewsletter} onOpenSocial={handleOpenSocial} />

      <Modal
        show={showModal}
        title={modalContent.title}
        message={modalContent.message}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
