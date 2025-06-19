import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Clock, 
  Users, 
  MapPin, 
  Gift, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle,
  Hospital,
  Building2,
  FileText,
  GraduationCap,
  Church,
  Ticket,
  UtensilsCrossed,
  ShoppingBag,
  Banknote,
  Car,
  Fuel,
  MoreHorizontal,
  UserPlus,
  Calendar,
  Trophy
} from 'lucide-react';

const Home = () => {
  const { user } = useAuth();

  const pricingData = [
    { time: '15 mins', price: '₹35' },
    { time: '30 mins', price: '₹60' },
    { time: '45 mins', price: '₹85' },
    { time: '1 hour', price: '₹110' },
    { time: '2 hours', price: '₹200' },
    { time: '3 hours', price: '₹280' }
  ];

  const extraCharges = [
    { service: 'Urgent Buddy (Within 30 mins)', price: '₹20' },
    { service: 'Night Time (10 PM – 6 AM)', price: '₹30' },
    { service: 'Peak Hour/Weekend', price: '₹10–₹20' },
    { service: 'Special Requirements', price: '₹10–₹20' }
  ];

  const tipOptions = [
    { amount: '₹10', message: '"Chai ho jaaye Buddy!"' },
    { amount: '₹20', message: '"Aaj bhi line bachayi!"' },
    { amount: '₹50+', message: 'As per your gratitude' }
  ];

  const serviceLocations = [
    { icon: Hospital, text: 'Hospital / OPD / Pharmacy' },
    { icon: Building2, text: 'Govt. Offices – Aadhaar, Ration Card' },
    { icon: FileText, text: 'Passport / Visa / FRRO' },
    { icon: GraduationCap, text: 'College/Coaching Admissions' },
    { icon: Church, text: 'Temple Darshan / Prasad Queue' },
    { icon: Ticket, text: 'Event/Concert Tickets' },
    { icon: UtensilsCrossed, text: 'Food Court / Restaurant' },
    { icon: ShoppingBag, text: 'Sale Events / Store Launches' },
    { icon: Banknote, text: 'ATM / Bank Queues' },
    { icon: Car, text: 'Parking Slot Lines' },
    { icon: Fuel, text: 'Gas Delivery / Utility' },
    { icon: MoreHorizontal, text: 'Custom Requests' }
  ];

  const offers = [
    { icon: Star, title: 'First Booking', discount: '10% OFF' },
    { icon: UserPlus, title: 'Refer & Earn', discount: '₹50 OFF for both' },
    { icon: Calendar, title: 'Repeat Saver', discount: 'Book 3 times, get ₹50 OFF' },
    { icon: Trophy, title: 'Student & Senior', discount: '15% OFF (select days)' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-100 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-200 bg-clip-text text-transparent">
              Line Buddy
            </h1>
            <p className="text-2xl md:text-2xl text-blue-300 font-light mb-5">
              Because Every Second Matters
            </p>
            <p className="text-xl md:text-base text-gray-300 max-w-2xl mx-auto">
              Life chhoti hai, line badi. Line chhodo life pakdo.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-12 mb-16 relative z-10">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Book Your Line Buddy</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Skip the wait - hire someone to stand in line for you
              </p>
              {user ? (
                <Link 
                  to="/book-buddy" 
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg group-hover:scale-105"
                >
                  Book Now <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
                >
                  Login to Book <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Become a Line Buddy</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Earn money by helping others save time
              </p>
              {user ? (
                <Link 
                  to="/become-buddy" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg group-hover:scale-105"
                >
                  Join as Buddy <ArrowRight className="w-5 h-5" />
                </Link>
              ) : (
                <Link 
                  to="/register" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
                >
                  Register to Join <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Service Locations */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-gray-700">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <MapPin className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-blue-400">Where Can You Use Line Buddy?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceLocations.map((location, index) => {
              const IconComponent = location.icon;
              return (
                <div key={index} className="bg-gray-700/50 rounded-2xl p-4 border border-gray-600 hover:border-blue-500/50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{location.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-gray-700">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Clock className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-emerald-400">Standard Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingData.map((item, index) => (
              <div key={index} className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600 hover:border-emerald-500/50 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-300">{item.time}</span>
                  <span className="text-xl font-bold text-emerald-400">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Charges */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-gray-700">
          <h3 className="text-2xl font-bold text-amber-400 mb-8 text-center">Extra Charges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraCharges.map((item, index) => (
              <div key={index} className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{item.service}</span>
                  <span className="text-lg font-semibold text-amber-400">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-gray-700">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Gift className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-purple-400">Thank Your Buddy with a Tip!</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tipOptions.map((tip, index) => (
              <div key={index} className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 text-center hover:bg-purple-500/20 transition-colors">
                <div className="text-3xl font-bold text-purple-400 mb-2">{tip.amount}</div>
                <div className="text-gray-300">{tip.message}</div>
              </div>
            ))}
          </div>
        </div>

        

        {/* Offers */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-gray-700">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Gift className="w-8 h-8 text-red-400" />
            <h3 className="text-2xl font-bold text-red-400">Ongoing Offers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, index) => {
              const IconComponent = offer.icon;
              return (
                <div key={index} className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center hover:bg-red-500/20 transition-colors group">
                  <IconComponent className="w-8 h-8 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-red-400 mb-2">{offer.title}</div>
                  <div className="text-gray-300 text-sm">{offer.discount}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About & Contact Combined */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* About Us */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-6">About Line Buddy</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              An innovative Indian service helping people save time by hiring someone to stand in lines. 
              Whether you're busy or unable to wait, we value your time like never before.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Founder</p>
                <p className="text-emerald-400">Deepak Kumawat</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-300">linebuddyindia@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-300">+91 8949557447, +91 8742037670</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-gray-300">UPI: 8949557447@PTSBI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/95 border-t border-gray-800 text-center py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400">
            © 2025 Line Buddy | Founded by Deepak Kumawat | 
            <a href="mailto:linebuddyindia@gmail.com" className="text-blue-400 hover:underline mx-2">
              linebuddyindia@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;