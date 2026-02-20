import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router';

export const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    
    setIsSearching(true);
    // Simulate search loading and a potential error if "error" is searched
    setTimeout(() => {
      setIsSearching(false);
      if (searchValue.toLowerCase() === 'error') {
        window.dispatchEvent(new CustomEvent('app-error', { detail: 'No pudimos encontrar productos con ese nombre.' }));
      } else {
        navigate(`/search?q=${encodeURIComponent(searchValue)}`);
      }
    }, 1000);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">Logistix</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Buscar productos, marcas y más..."
                className="w-full bg-gray-100 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-lg py-2.5 pl-11 pr-4 text-gray-900 text-lg outline-none transition-all duration-200"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {isSearching ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Search className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <Search className="w-6 h-6" />
                )}
              </div>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link to="/cart" className="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 transition-colors relative">
              <ShoppingCart className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 rounded-full">2</span>
              <span className="ml-1 text-base font-medium hidden md:block">Carrito</span>
            </Link>
            <Link to="/profile" className="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 transition-colors">
              <User className="w-7 h-7" />
              <span className="ml-1 text-base font-medium hidden md:block">Perfil</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
