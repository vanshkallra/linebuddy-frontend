import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-700/70 text-white text-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Line Buddy
          </h1>
          <p className="text-xl md:text-2xl italic opacity-90 mb-8">
            Because Every Second Matters.
          </p>
          <p className="text-lg md:text-xl opacity-80">
            Life chhoti hai, line badi. Line chhodo life pakdo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Action Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-emerald-600 mb-4">Book Your Line Buddy</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Skip the wait - hire someone to stand in line for you
            </p>
            {user ? (
              <Link 
                to="/book-buddy" 
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg"
              >
                Book Now 🙂
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg"
              >
                Login to Book
              </Link>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Become a Line Buddy</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Earn money by helping others save time ⏳💸
            </p>
            {user ? (
              <Link 
                to="/become-buddy" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg"
              >
                Join as Buddy
              </Link>
            ) : (
              <Link 
                to="/register" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg"
              >
                Register to Join
              </Link>
            )}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
            💸 Standard Pricing (Incl. Platform Fee)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">🕒 Wait Time</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">💰 Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-3">15 mins</td><td className="border border-gray-300 px-4 py-3">₹35</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3">30 mins</td><td className="border border-gray-300 px-4 py-3">₹60</td></tr>
                <tr><td className="border border-gray-300 px-4 py-3">45 mins</td><td className="border border-gray-300 px-4 py-3">₹85</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3">1 hour</td><td className="border border-gray-300 px-4 py-3">₹110</td></tr>
                <tr><td className="border border-gray-300 px-4 py-3">2 hours</td><td className="border border-gray-300 px-4 py-3">₹200</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3">3 hours</td><td className="border border-gray-300 px-4 py-3">₹280</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Extra Charges */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-amber-600 mb-6">🧾 Extra Charges (If Applicable)</h3>
          <ul className="space-y-3 text-lg">
            <li><strong>Urgent Buddy (Within 30 mins):</strong> ₹20</li>
            <li><strong>Night Time (10 PM – 6 AM):</strong> ₹30</li>
            <li><strong>Peak Hour/Weekend:</strong> ₹10–₹20</li>
            <li><strong>Formal Dress / Umbrella / Document Handling:</strong> ₹10–₹20</li>
          </ul>
        </div>

        {/* Tip Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-emerald-600 mb-6">☕ Want to Thank Your Buddy? Leave a Tip!</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-emerald-600 mb-2">₹10</div>
              <div className="text-gray-700">"Chai ho jaaye Buddy!"</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-emerald-600 mb-2">₹20</div>
              <div className="text-gray-700">"Aaj bhi line bachayi!"</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-emerald-600 mb-2">₹50+</div>
              <div className="text-gray-700">As per your gratitude</div>
            </div>
          </div>
        </div>

        {/* Where to Use */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-purple-600 mb-6">📍 Where Can You Use Line Buddy?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Hospital / OPD / Pharmacy Lines',
              'Govt. Offices – Aadhaar, Ration Card, etc.',
              'Passport / Visa / FRRO',
              'College/Coaching Admissions',
              'Temple Darshan / Prasad Queue',
              'Event/Concert Ticket Queues',
              'Food Court / Restaurant Token Lines',
              'Sale Events / Store Launches',
              'ATM / Bank Queues',
              'Parking Slot Lines',
              'Gas Delivery / Utility Queues',
              'Other (Custom Request) ✅'
            ].map((item, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-600">
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Offers */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-xl font-bold text-red-600 mb-6">🎁 Ongoing Customer Offers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 bg-red-50 rounded-xl text-center">
              <div className="font-bold text-red-600 mb-2">First Booking</div>
              <div className="text-gray-700">10% OFF</div>
            </div>
            <div className="p-6 bg-red-50 rounded-xl text-center">
              <div className="font-bold text-red-600 mb-2">Refer & Earn</div>
              <div className="text-gray-700">₹50 OFF for both</div>
            </div>
            <div className="p-6 bg-red-50 rounded-xl text-center">
              <div className="font-bold text-red-600 mb-2">Repeat Saver</div>
              <div className="text-gray-700">Book 3 times, get ₹50 OFF next</div>
            </div>
            <div className="p-6 bg-red-50 rounded-xl text-center">
              <div className="font-bold text-red-600 mb-2">Student & Senior Days</div>
              <div className="text-gray-700">15% OFF (on select days)</div>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-emerald-600 mb-6">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Line Buddy is an innovative service based in India, created to help people save their time by hiring someone to stand in lines for them. Whether you're busy or physically unable to wait, we've got your back. Our mission is simple: value your time like never before.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            <strong>Founder:</strong> Deepak Kumawat
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-emerald-600 mb-6">Contact Us</h2>
          <div className="text-lg space-y-2 text-gray-700">
            <p><strong>Email:</strong> linebuddyindia@gmail.com</p>
            <p><strong>WhatsApp:</strong> +91 8949557447, +91 8742037670</p>
            <p><strong>UPI Payment:</strong> 8949557447@PTSBI</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/95 text-white text-center py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; 2025 Line Buddy | Founded by Deepak Kumawat | Email: linebuddyindia@gmail.com | WhatsApp: +91 8949557447</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;