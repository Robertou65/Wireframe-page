import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  name: string;
  seller: string;
  rating: number;
  price: number;
  image: string;
  id: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, seller, rating, price, image, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500 shadow-sm transition-all duration-300 relative h-full flex flex-col"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-500 z-10">
          <Heart className="w-6 h-6" />
        </button>
      </div>

      {/* Product Content */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {name}
          </h3>
          <p className="text-base text-gray-500 mt-1 flex items-center">
            Vendido por <span className="text-blue-600 font-medium ml-1 cursor-pointer hover:underline">{seller}</span>
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
            />
          ))}
          <span className="text-base text-gray-500 font-medium ml-2">({rating}.0)</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-base leading-none mb-1">$ {Math.round(price * 1.25).toLocaleString()}</span>
            <span className="text-2xl font-black text-gray-900 leading-none">
              $ {price.toLocaleString()}
            </span>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white p-3 rounded-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-md shadow-blue-500/10 group-active:scale-95"
            aria-label="Agregar al carrito"
          >
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

import { useNavigate } from 'react-router';

export const ProductGrid = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: '1',
      name: 'MacBook Pro M3 Max 16"',
      seller: 'Apple Store',
      rating: 5,
      price: 3499,
      image: 'https://images.unsplash.com/photo-1759820940611-facb87e629d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGFwdG9wJTIwc2lsdmVyfGVufDF8fHx8MTc3MTU1OTAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: '2',
      name: 'Samsung Galaxy S24 Ultra',
      seller: 'Samsung Mobile',
      rating: 4,
      price: 1299,
      image: 'https://images.unsplash.com/photo-1727093493807-f11b48fa31a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwc2xlZWt8ZW58MXx8fHwxNzcxNDg2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: '3',
      name: 'Sony WH-1000XM5 Black',
      seller: 'Sony Audio',
      rating: 5,
      price: 399,
      image: 'https://images.unsplash.com/photo-1615433366992-1586f3b8fca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2lzZSUyMGNhbmNlbGxpbmclMjBoZWFkcGhvbmVzJTIwYmxhY2t8ZW58MXx8fHwxNzcxNDkyNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: '4',
      name: 'Apple Watch Ultra 2 Titanium',
      seller: 'Apple Inc',
      rating: 5,
      price: 799,
      image: 'https://images.unsplash.com/photo-1762768752302-8b7a2a04b68e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZGlnaXRhbCUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNTU5MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Destacados</span>
          <h2 className="text-4xl font-black text-gray-900">Productos recomendados</h2>
        </div>
        <button 
          onClick={() => navigate('/search')}
          className="text-blue-600 font-bold text-lg hover:underline transition-all"
        >
          Ver todos los productos →
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
