import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CreditCard, 
  Wallet, 
  Truck, 
  ArrowLeft, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  User, 
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

type CheckoutFormData = {
  fullName: string;
  address: string;
  city: string;
  phone: string;
  paymentMethod: 'card' | 'pse' | 'cash';
};

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    defaultValues: {
      paymentMethod: 'card',
    },
  });

  const selectedPayment = watch('paymentMethod');

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('¡Compra realizada con éxito!');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl border border-blue-100 text-center max-w-lg w-full"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">¡Gracias por tu compra!</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Hemos enviado los detalles de tu pedido a tu correo electrónico. Serás redirigido a la tienda en unos segundos.
          </p>
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="flex items-center gap-4 mb-12">
        <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Finalizar Compra</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Column 1: Datos de Envío */}
          <section className="space-y-10">
            <div className="flex items-center gap-3 border-b-4 border-blue-600 pb-4 w-fit">
              <Truck className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider">Datos de Envío</h2>
            </div>

            <div className="space-y-8">
              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-lg font-bold text-gray-700 flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-400" /> Nombre Completo
                </label>
                <input
                  {...register('fullName', { required: 'El nombre es obligatorio' })}
                  placeholder="Ej: Juan Pérez"
                  className={`w-full bg-gray-50 border-2 ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all`}
                />
                {errors.fullName && <p className="text-red-600 font-bold text-sm mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Dirección */}
              <div className="space-y-2">
                <label className="text-lg font-bold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" /> Dirección
                </label>
                <input
                  {...register('address', { required: 'La dirección es obligatoria' })}
                  placeholder="Calle 123 #45-67"
                  className={`w-full bg-gray-50 border-2 ${errors.address ? 'border-red-500' : 'border-gray-200'} rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all`}
                />
                {errors.address && <p className="text-red-600 font-bold text-sm mt-1">{errors.address.message}</p>}
              </div>

              {/* Ciudad */}
              <div className="space-y-2">
                <label className="text-lg font-bold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" /> Ciudad
                </label>
                <input
                  {...register('city', { required: 'La ciudad es obligatoria' })}
                  placeholder="Bogotá, Medellín..."
                  className={`w-full bg-gray-50 border-2 ${errors.city ? 'border-red-500' : 'border-gray-200'} rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all`}
                />
                {errors.city && <p className="text-red-600 font-bold text-sm mt-1">{errors.city.message}</p>}
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label className="text-lg font-bold text-gray-700 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-400" /> Teléfono
                </label>
                <input
                  {...register('phone', { required: 'El teléfono es obligatorio' })}
                  placeholder="300 123 4567"
                  className={`w-full bg-gray-50 border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all`}
                />
                {errors.phone && <p className="text-red-600 font-bold text-sm mt-1">{errors.phone.message}</p>}
              </div>
            </div>
          </section>

          {/* Column 2: Método de Pago */}
          <section className="space-y-10">
            <div className="flex items-center gap-3 border-b-4 border-blue-600 pb-4 w-fit">
              <CreditCard className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wider">Método de Pago</h2>
            </div>

            <div className="space-y-4">
              {/* Tarjeta */}
              <label className={`block cursor-pointer p-6 rounded-2xl border-2 transition-all group ${selectedPayment === 'card' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${selectedPayment === 'card' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <CreditCard className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xl font-black text-gray-900 block uppercase">Tarjeta de Crédito</span>
                      <span className="text-sm text-gray-500 font-medium">Visa, Mastercard, AMEX</span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    {...register('paymentMethod')}
                    value="card"
                    className="w-6 h-6 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
              </label>

              {/* PSE */}
              <label className={`block cursor-pointer p-6 rounded-2xl border-2 transition-all group ${selectedPayment === 'pse' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${selectedPayment === 'pse' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Wallet className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xl font-black text-gray-900 block uppercase">PSE</span>
                      <span className="text-sm text-gray-500 font-medium">Débito desde tu cuenta bancaria</span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    {...register('paymentMethod')}
                    value="pse"
                    className="w-6 h-6 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
              </label>

              {/* Contra Entrega */}
              <label className={`block cursor-pointer p-6 rounded-2xl border-2 transition-all group ${selectedPayment === 'cash' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${selectedPayment === 'cash' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Truck className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xl font-black text-gray-900 block uppercase">Contra Entrega</span>
                      <span className="text-sm text-gray-500 font-medium">Paga al recibir en tu domicilio</span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    {...register('paymentMethod')}
                    value="cash"
                    className="w-6 h-6 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
              </label>
            </div>

            {/* Additional info */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-green-700 font-bold">
                <ShieldCheck className="w-6 h-6" />
                <span>Transacción Segura 256-bit SSL</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tus datos están protegidos por nuestra política de privacidad. Logistix no almacena información sensible de tarjetas.
              </p>
            </div>
          </section>
        </div>

        {/* Footer: Finalizar Compra */}
        <div className="pt-12 border-t-4 border-gray-100">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-black py-8 px-12 rounded-2xl transition-all shadow-2xl shadow-blue-600/30 text-3xl uppercase tracking-[0.2em] flex items-center justify-center gap-4"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-10 h-10 animate-spin" />
                Procesando...
              </>
            ) : (
              'Finalizar Compra'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
