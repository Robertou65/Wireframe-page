import React from 'react';
import { ShoppingBag, User, Settings, LogOut, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center justify-between p-4 rounded-xl transition-all duration-200 group
      ${isActive 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
        : 'hover:bg-gray-100 text-gray-600 hover:text-blue-600'}
    `}
  >
    {({ isActive }) => (
      <>
        <div className="flex items-center gap-4">
          <span className="shrink-0">{icon}</span>
          <span className="text-lg font-black uppercase tracking-wider">{label}</span>
        </div>
        <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      </>
    )}
  </NavLink>
);

export const UserSidebar = () => {
  return (
    <aside className="w-full lg:w-80 flex flex-col h-full bg-white border-r-2 border-gray-100 p-6 min-h-[calc(100vh-140px)]">
      <div className="flex-1 space-y-3">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 px-4">Menu de Usuario</h2>
        
        <NavItem 
          to="/profile/purchases" 
          icon={<ShoppingBag className="w-6 h-6" />} 
          label="Mis compras" 
        />
        <NavItem 
          to="/profile" 
          icon={<User className="w-6 h-6" />} 
          label="Mi perfil" 
        />
        <NavItem 
          to="/profile/settings" 
          icon={<Settings className="w-6 h-6" />} 
          label="Configuración" 
        />
      </div>

      <div className="pt-8 mt-8 border-t-2 border-gray-100">
        <button className="w-full flex items-center gap-4 p-4 text-red-600 font-black uppercase tracking-wider hover:bg-red-50 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-red-100 group">
          <LogOut className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
};
