import React from 'react';
import { User, Shield, Key, FileText, ChevronRight, Mail, Phone, MapPin, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { UserSidebar } from '../components/UserSidebar';

interface ProfileCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ icon, title, description, color }) => (
  <motion.button
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.98 }}
    className={`
      flex flex-col items-start gap-6 p-8 rounded-3xl border-2 border-gray-100 bg-white
      hover:border-blue-600 transition-all text-left group shadow-sm hover:shadow-xl hover:shadow-blue-600/5
    `}
  >
    <div className={`p-4 rounded-2xl ${color} transition-colors group-hover:bg-blue-600 group-hover:text-white`}>
      {icon}
    </div>
    <div className="space-y-2">
      <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-500 text-lg leading-relaxed">{description}</p>
    </div>
    <div className="mt-4 flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
      Gestionar <ChevronRight className="w-4 h-4" />
    </div>
  </motion.button>
);

export default function ProfilePage() {
  const user = {
    name: "Alex Thompson",
    email: "alex.thompson@logistix.com",
    phone: "+57 300 123 4567",
    location: "Bogotá, Colombia"
  };

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen">
      <UserSidebar />

      <main className="flex-1 bg-gray-50/50 p-6 lg:p-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header Section */}
          <section className="bg-white rounded-[40px] border-2 border-gray-100 p-8 lg:p-12 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="relative group/avatar">
                <div className="w-32 h-32 lg:w-48 lg:h-48 bg-blue-600 rounded-full flex items-center justify-center border-[8px] border-white shadow-2xl relative overflow-hidden transition-transform hover:scale-105 duration-300">
                  <User className="w-16 h-16 lg:w-24 lg:h-24 text-white" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 w-10 h-10 bg-green-500 border-4 border-white rounded-full"></div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-2">{user.name}</h1>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <span className="flex items-center gap-2 text-xl font-bold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-xl border border-gray-200">
                      <Mail className="w-5 h-5 text-blue-600" /> {user.email}
                    </span>
                    <span className="text-xs font-black bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-widest">Premium Logistix</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-4 border-t-2 border-dashed border-gray-100">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-gray-400" />
                    <span className="text-lg font-bold text-gray-600">{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-gray-400" />
                    <span className="text-lg font-bold text-gray-600">{user.location}</span>
                  </div>
                </div>
              </div>

              <button className="bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-900 font-black uppercase tracking-wider px-8 py-4 rounded-2xl transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-100">
                Editar Perfil
              </button>
            </div>
          </section>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <ProfileCard 
              icon={<FileText className="w-10 h-10" />}
              title="Información Personal"
              description="Gestiona tus datos de identificación, direcciones y preferencias de comunicación."
              color="bg-orange-50 text-orange-600"
            />
            <ProfileCard 
              icon={<Shield className="w-10 h-10" />}
              title="Datos de cuenta"
              description="Configura tus métodos de pago, suscripciones y balances de logistix points."
              color="bg-purple-50 text-purple-600"
            />
            <ProfileCard 
              icon={<Key className="w-10 h-10" />}
              title="Seguridad"
              description="Actualiza tu contraseña, autenticación en dos pasos y dispositivos vinculados."
              color="bg-green-50 text-green-600"
            />
          </div>

          {/* Recent Activity Mini-Section */}
          <section className="bg-white rounded-[40px] border-2 border-gray-100 p-8 lg:p-12 shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wider">Actividad Reciente</h2>
              <button className="text-blue-600 font-bold hover:underline">Ver todo</button>
            </div>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:border-blue-200 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Inicio de sesión exitoso</h4>
                      <p className="text-gray-500 font-medium italic">Hace {i} hora{i > 1 ? 's' : ''} desde Bogotá, CO • Chrome / MacOS</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
