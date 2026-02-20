import React from 'react';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProductGrid />
      
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-white text-center lg:text-left space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black">¡Suscríbete y obtén 20% de descuento!</h2>
            <p className="text-xl text-blue-100 font-medium">Válido en tu primera compra superior a $1,000,000</p>
          </div>
          <button className="bg-white text-blue-600 hover:bg-gray-100 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-white/50 font-black py-4 px-12 rounded-xl shadow-xl text-xl">
            ¡Registrarme ahora!
          </button>
        </div>
      </section>
    </motion.div>
  );
}
