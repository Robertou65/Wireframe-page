import React from 'react';
import { Mail, Phone, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <span className="ml-2 text-2xl font-bold">Logistix</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Tu tienda de tecnología de confianza. Ofrecemos los mejores productos con garantía oficial y envío gratis a todo el país.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-blue-600">
              Categorías
            </h4>
            <ul className="space-y-4">
              {['Computadoras', 'Celulares', 'Audio', 'Gaming', 'Accesorios'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 hover:translate-x-2 transition-all duration-200 inline-block text-lg">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-blue-600">
              Soporte
            </h4>
            <ul className="space-y-4">
              {['Ayuda/PQR', 'Términos y Condiciones', 'Política de Privacidad', 'Seguimiento de Pedidos', 'Preguntas Frecuentes'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 hover:translate-x-2 transition-all duration-200 inline-block text-lg">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-blue-600">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-6 text-lg">Suscríbete para recibir ofertas exclusivas.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-gray-800 border-2 border-transparent focus:border-blue-600 rounded-lg py-3 px-4 text-white text-lg outline-none transition-all duration-200 pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-md hover:bg-blue-700 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-base">
          <p>© 2026 Logistix Store. Todos los derechos reservados.</p>
          <div className="flex space-x-8">
            <span className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +57 (300) 123-4567</span>
            <span className="flex items-center"><Mail className="w-5 h-5 mr-2" /> contacto@logistix.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
