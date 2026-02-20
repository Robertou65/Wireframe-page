import React from 'react';
import { Star, ShoppingCart, Heart, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductListItemProps {
  name: string;
  seller: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  index: number;
}

export const ProductListItem: React.FC<ProductListItemProps> = ({ name, seller, description, rating, price, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-600 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row focus-within:ring-2 focus-within:ring-blue-500"
    >
      {/* Product Image */}
      <div className="relative w-full md:w-72 aspect-square bg-gray-50 p-6 flex items-center justify-center shrink-0">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-all z-10">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Middle Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="text-base text-gray-500 flex items-center">
            Vendido por <span className="text-blue-600 font-bold ml-1 cursor-pointer hover:underline">{seller}</span>
          </p>
          <p className="text-lg text-gray-600 leading-relaxed line-clamp-2 mt-4">
            {description}
          </p>
          <div className="flex gap-4 mt-4">
            <span className="flex items-center text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded">
              <ShieldCheck className="w-4 h-4 mr-1" /> Garantía oficial
            </span>
            <span className="flex items-center text-blue-600 text-sm font-bold bg-blue-50 px-2 py-1 rounded">
              <Truck className="w-4 h-4 mr-1" /> Envío gratis
            </span>
          </div>
        </div>
      </div>

      {/* Right Content (Price & Actions) */}
      <div className="p-6 md:p-8 w-full md:w-64 bg-gray-50/50 flex flex-col justify-center shrink-0">
        <div className="mb-6">
          <span className="text-gray-400 line-through text-base block mb-1">$ {Math.round(price * 1.25).toLocaleString()}</span>
          <span className="text-3xl font-black text-gray-900 block">
            $ {price.toLocaleString()}
          </span>
          <p className="text-blue-600 text-sm font-bold mt-1">12 cuotas sin interés</p>
        </div>

        <div className="flex items-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
            />
          ))}
          <span className="text-base text-gray-500 font-medium ml-2">{rating}.0 (124)</span>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3 px-4 rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" />
          Agregar
        </button>
      </div>
    </motion.div>
  );
};
