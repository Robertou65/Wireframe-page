import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden bg-gray-900 group">
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1751887687523-bd5aa55a8c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwZWxlY3Ryb25pY3MlMjBiYW5uZXJ8ZW58MXx8fHwxNzcxNTU5MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Banner Principal"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              Banner Principal
            </h1>
            <p className="text-xl sm:text-2xl font-light mb-8 text-gray-200">
              Promociones <span className="mx-2">•</span> Ofertas <span className="mx-2">•</span> Novedades
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 px-10 rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-lg shadow-blue-500/20 text-lg">
                Ver ofertas
              </button>
              <button className="bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold py-3 px-10 rounded-lg border border-white/30 backdrop-blur-sm transition-all focus:outline-none focus:ring-4 focus:ring-white/20 text-lg">
                Más información
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
