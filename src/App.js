import React, { useState, useEffect } from 'react';
import { Users, Store, Gift, Star, ArrowRight, Mail, Phone, User, MapPin } from 'lucide-react';

export default function KasoowaFoodHubSplash() {
  const [activeTab, setActiveTab] = useState('vendor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    location: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Set launch date to 6 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 6);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      location: ''
    });
  };

  const containerClass = `min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 transition-all duration-1000 ${
    isVisible ? 'opacity-100' : 'opacity-0'
  }`;

  return (
    <div className={containerClass}>
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          🎉 Registration successful! We'll be in touch soon.
        </div>
      )}

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Kasoowa FoodHub</h1>
              <p className="text-xs text-green-600">Nigerian Groceries Marketplace</p>
            </div>
          </div>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            Launching Soon
          </div>
        </div>
      </header>

      {/* Hero Animation Section */}
      <section className="bg-white pt-2">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[250px] lg:h-[300px] max-w-[1920px] mx-auto">
            <div className="w-full h-full bg-gradient-to-br from-green-100 via-green-50 to-white flex items-center justify-center relative">
              <img
                src="/images/Kasoowa-animation.gif"
                alt="Kasoowa FoodHub"
                className="w-full h-full object-contain"
                style={{ animationDelay: '0.9s', transform: 'scale(100%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-8 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 transform transition-all duration-1000 delay-300">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              The Future of
              <span className="block text-green-600 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                Nigerian Groceries
              </span>
              is Here
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Connect vendors with customers across Nigeria. Fresh ingredients, authentic flavors, 
              delivered to your doorstep. Join our revolution in African food commerce.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg mx-auto transform transition-all duration-1000 delay-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Official Launch In:</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 text-white">
                  <div className="text-2xl font-bold">{timeLeft.days}</div>
                  <div className="text-xs uppercase tracking-wide">Days</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 text-white">
                  <div className="text-2xl font-bold">{timeLeft.hours}</div>
                  <div className="text-xs uppercase tracking-wide">Hours</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 text-white">
                  <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs uppercase tracking-wide">Minutes</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 text-white">
                  <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-xs uppercase tracking-wide">Seconds</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Be among the first to experience Kasoowa!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Prices & Protection</h3>
              <p className="text-gray-600">Unbeatable prices with buyer's protection through escrow. Shop with confidence knowing our partner bank only releases payment when orders are successfully delivered.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vendor Protection & Success</h3>
              <p className="text-gray-600">We treat vendors as kings with 100% free registration, protection against fraud, and guaranteed payments. We only earn when you sell - your success is our success.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Export & Loans</h3>
              <p className="text-gray-600">Access business loans and connect with African diaspora in US, UK, Canada. Expand your reach globally while empowering local communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex bg-gray-50">
              <button
                onClick={() => setActiveTab('vendor')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-300 ${
                  activeTab === 'vendor'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Store className="w-5 h-5 inline-block mr-2" />
                I'm a Vendor
              </button>
              <button
                onClick={() => setActiveTab('customer')}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-300 ${
                  activeTab === 'customer'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <Users className="w-5 h-5 inline-block mr-2" />
                I'm a Customer
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8">
              {activeTab === 'vendor' ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join as a Vendor</h3>
                  <p className="text-gray-600 mb-6">
                    Ready to expand your business reach? Enjoy 100% free registration, vendor protection, and we only earn when you sell. Access loans, export opportunities to US/UK/Canada, and connect with the diaspora market.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Business Name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Business Location (City, State)"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Register as Vendor
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join as a Customer</h3>
                  <p className="text-gray-600 mb-6">
                    Be the first to shop authentic Nigerian groceries online. Share your referral link and earn substantial affiliate income through Kasoowa Points!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Your Location (City, State)"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Join Early Access
                      <Gift className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center space-x-2 text-green-700">
                      <Star className="w-5 h-5" />
                      <span className="font-semibold">Affiliate Earnings</span>
                    </div>
                    <p className="text-green-600 text-sm mt-1">
                      Get your unique referral link after registration and earn substantial income through Kasoowa Points for every friend who joins!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
              <Store className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Kasoowa FoodHub</span>
          </div>
          <p className="text-gray-400 mb-4">
            Connecting Nigerian vendors with customers worldwide. Fresh ingredients, authentic flavors.
          </p>
          <div className="text-sm text-gray-500">
            © 2025 Kasoowa FoodHub. Built with ❤️ for the Nigerian food community.
          </div>
        </div>
      </footer>
    </div>
  );
}