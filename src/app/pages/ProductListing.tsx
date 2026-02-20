import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ProductListItem } from '../components/ProductListItem';
import { motion } from 'motion/react';
import { Loader2, Search } from 'lucide-react';
import { useSearchParams } from 'react-router';

const products = [
  {
    id: '1',
    name: 'MacBook Pro M3 Max 16"',
    seller: 'Apple Store',
    description: 'Potencia sin precedentes con el chip M3 Max. Pantalla Liquid Retina XDR de 16 pulgadas y hasta 128GB de memoria unificada.',
    rating: 5,
    price: 3499,
    image: 'https://images.unsplash.com/photo-1759820940611-facb87e629d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGFwdG9wJTIwc2lsdmVyfGVufDF8fHx8MTc3MTU1OTAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    seller: 'Samsung Mobile',
    description: 'El smartphone con IA más potente hasta la fecha. Cámara de 200MP y S-Pen integrado para máxima productividad.',
    rating: 4,
    price: 1299,
    image: 'https://images.unsplash.com/photo-1727093493807-f11b48fa31a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwc2xlZWt8ZW58MXx8fHwxNzcxNDg2OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Black',
    seller: 'Sony Audio',
    description: 'Cancelación de ruido líder en la industria. Calidad de sonido excepcional y llamadas ultra nítidas.',
    rating: 5,
    price: 399,
    image: 'https://images.unsplash.com/photo-1615433366992-1586f3b8fca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2lzZSUyMGNhbmNlbGxpbmclMjBoZWFkcGhvbmVzJTIwYmxhY2t8ZW58MXx8fHwxNzcxNDkyNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '4',
    name: 'Apple Watch Ultra 2 Titanium',
    seller: 'Apple Inc',
    description: 'El Apple Watch más resistente y potente. Caja de titanio de 49mm, GPS de doble frecuencia y hasta 36 horas de batería.',
    rating: 5,
    price: 799,
    image: 'https://images.unsplash.com/photo-1762768752302-8b7a2a04b68e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZGlnaXRhbCUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxNTU5MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export default function ProductListing() {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <Sidebar />
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-gray-900">Listado de productos</h1>
              <p className="text-lg text-gray-500 mt-1">
                {query ? `Mostrando resultados para "${query}"` : 'Mostrando todos los productos'}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg text-gray-600 font-bold">
              Ordenar por: <span className="text-blue-600 cursor-pointer hover:underline">Relevancia</span>
            </div>
          </div>

          <div className="space-y-6">
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="text-blue-600"
                >
                  <Loader2 size={48} />
                </motion.div>
                <p className="text-lg text-gray-500 font-medium">Buscando los mejores productos...</p>
              </div>
            ) : products.length > 0 ? (
              products.map((product, index) => (
                <ProductListItem key={product.id} {...product} index={index} />
              ))
            ) : (
              <div className="py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">No encontramos resultados</h2>
                <p className="text-gray-500 max-w-md mx-auto">Intenta buscar con otros términos o limpia los filtros para ver más productos.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
