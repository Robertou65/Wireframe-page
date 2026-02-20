import React, { useState } from 'react';
import { Trash2, Plus, Minus, Truck, Tag, ShieldCheck, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  discount: number;
  image: string;
  shipping: number;
  quantity: number;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = React.forwardRef<HTMLDivElement, CartItemProps>((props, ref) => {
  const { id, name, price, discount, image, shipping, quantity, onUpdateQuantity, onRemove } = props;
  const finalItemPrice = (price - discount) * quantity;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row gap-6 hover:border-blue-300 transition-colors shadow-sm"
    >
      {/* Product Image */}
      <div className="w-full sm:w-32 h-32 bg-gray-50 rounded-lg flex items-center justify-center p-4 shrink-0 border border-gray-100">
        <ImageWithFallback src={image} alt={name} className="w-full h-full object-contain mix-blend-multiply" />
      </div>

      {/* Info & Quantity */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">En stock</span>
              <button 
                onClick={() => onRemove(id)}
                className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Eliminar producto"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center bg-gray-100 w-fit rounded-lg border border-gray-200 p-1">
          <button 
            onClick={() => onUpdateQuantity(id, -1)}
            disabled={quantity <= 1}
            className="p-2 hover:bg-white rounded-md transition-all disabled:opacity-30 disabled:hover:bg-transparent text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-6 text-lg font-black text-gray-900 min-w-[3rem] text-center">{quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(id, 1)}
            className="p-2 hover:bg-white rounded-md transition-all text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Prices & Shipping */}
      <div className="w-full sm:w-48 flex flex-col justify-between items-end text-right border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 sm:pl-6">
        <div className="space-y-1">
          <div className="text-gray-400 line-through text-base leading-none">$ {price.toLocaleString()}</div>
          <div className="text-green-600 text-sm font-bold leading-none">Desc. -$ {discount.toLocaleString()}</div>
        </div>
        
        <div className="flex items-center text-blue-600 text-sm font-bold bg-blue-50 px-2 py-1 rounded mt-2">
          <Truck className="w-4 h-4 mr-1" /> {shipping === 0 ? 'Envío gratis' : `Envío: $${shipping.toLocaleString()}`}
        </div>

        <div className="mt-4">
          <span className="text-xs text-gray-400 block uppercase font-bold tracking-wider">Precio subtotal</span>
          <span className="text-2xl font-black text-gray-900">$ {finalItemPrice.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
});

CartItem.displayName = 'CartItem';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'MacBook Pro M3 Max 16"',
      price: 3800,
      discount: 301,
      image: 'https://images.unsplash.com/photo-1759820940611-facb87e629d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGFwdG9wJTIwc2lsdmVyfGVufDF8fHx8MTc3MTU1OTAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      shipping: 0,
      quantity: 1
    },
    {
      id: '2',
      name: 'Sony WH-1000XM5 Black',
      price: 450,
      discount: 51,
      image: 'https://images.unsplash.com/photo-1615433366992-1586f3b8fca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2lzZSUyMGNhbmNlbGxpbmclMjBoZWFkcGhvbmVzJTIwYmxhY2t8ZW58MXx8fHwxNzcxNDkyNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      shipping: 15,
      quantity: 2
    }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalDiscounts = cartItems.reduce((acc, item) => acc + (item.discount * item.quantity), 0);
  const shippingTotal = cartItems.reduce((acc, item) => acc + item.shipping, 0);
  const finalTotal = subtotal - totalDiscounts + shippingTotal;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="flex items-center gap-4 mb-10">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-4xl font-black text-gray-900">Carrito de compras</h1>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart List */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cartItems.map(item => (
                <CartItem 
                  key={item.id} 
                  {...item} 
                  onUpdateQuantity={updateQuantity} 
                  onRemove={removeItem} 
                />
              ))}
            </AnimatePresence>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
              <div>
                <p className="text-blue-900 font-bold">Compra protegida</p>
                <p className="text-blue-700 text-sm">Recibe el producto que esperabas o te devolvemos tu dinero. Garantía de 30 días con Logistix.</p>
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border-2 border-gray-100 p-8 sticky top-24 shadow-sm">
              <h2 className="text-2xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">Resumen de compra</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-lg text-gray-600">
                  <span>Productos ({cartItems.reduce((a, b) => a + b.quantity, 0)})</span>
                  <span className="font-bold text-gray-900">$ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg text-gray-600">
                  <span>Envío</span>
                  <span className="font-bold text-green-600">
                    {shippingTotal === 0 ? 'Gratis' : `$ ${shippingTotal.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg text-gray-600">
                  <span className="flex items-center gap-2">Cupones (1/3) <Tag className="w-4 h-4 text-blue-600" /></span>
                  <span className="font-bold text-green-600">-$ 50</span>
                </div>
                <div className="flex justify-between text-lg text-gray-600">
                  <span>Descuentos</span>
                  <span className="font-bold text-green-600">-$ {totalDiscounts.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t-2 border-dashed border-gray-200 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold text-gray-900 uppercase tracking-tighter">Total</span>
                  <span className="text-4xl font-black text-blue-600 leading-none">$ {(finalTotal - 50).toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-400 text-right mt-2">IVA incluido</p>
              </div>

              <Link 
                to="/checkout"
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-black py-5 px-8 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-xl shadow-blue-600/20 text-xl uppercase tracking-wider block text-center"
              >
                Continuar Compra
              </Link>

              <div className="mt-6 flex flex-col gap-3">
                <button className="w-full text-blue-600 font-bold hover:underline py-2 focus:outline-none">
                  Tengo un cupón de descuento
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 rounded-3xl p-16 text-center border-2 border-dashed border-gray-200 max-w-2xl mx-auto"
        >
          <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Tag className="w-12 h-12 text-gray-300" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Tu carrito está vacío</h2>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed">¿Aún no sabes qué comprar? Tenemos miles de productos esperando por ti.</p>
          <Link 
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-12 rounded-xl transition-all shadow-lg active:scale-95 text-lg"
          >
            Ir a la tienda
          </Link>
        </motion.div>
      )}
    </div>
  );
}
