import React from 'react';

export const SubNavbar = () => {
  const links = [
    { name: 'Todos los productos', href: '/search' },
    { name: 'Ofertas', href: '#', badge: 'Hot' },
    { name: 'Cupones', href: '#' },
    { name: 'Ayuda/PQR', href: '#' },
    { name: 'Categorías', href: '#' },
    { name: 'Novedades', href: '#' },
  ];

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 h-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center text-base font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 transition-all duration-150"
            >
              {link.name}
              {link.badge && (
                <span className="ml-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
