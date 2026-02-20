import React from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const FilterSection = ({ title, options }: { title: string; options: string[] }) => (
  <div className="border-b border-gray-200 py-6 last:border-0">
    <button className="flex items-center justify-between w-full group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">
      <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors uppercase tracking-wider">{title}</span>
      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
    </button>
    <ul className="mt-4 space-y-3">
      {options.map((option) => (
        <li key={option}>
          <label className="flex items-center group cursor-pointer">
            <input 
              type="checkbox" 
              className="w-5 h-5 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500 transition-all cursor-pointer"
            />
            <span className="ml-3 text-base text-gray-600 group-hover:text-gray-900 transition-colors">{option}</span>
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export const Sidebar = () => {
  return (
    <aside className="w-full lg:w-72 flex-shrink-0 bg-white border-r border-gray-200 p-6 hidden lg:block">
      <div className="flex items-center gap-2 mb-8">
        <SlidersHorizontal className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-black text-gray-900">Filtros</h2>
      </div>
      
      <div className="space-y-2">
        <FilterSection 
          title="Subcategorías" 
          options={['Laptops', 'Smartphones', 'Accesorios', 'Tablets']} 
        />
        <FilterSection 
          title="Condición" 
          options={['Nuevo', 'Reacondicionado', 'Usado']} 
        />
        <FilterSection 
          title="Marca" 
          options={['Apple', 'Samsung', 'Sony', 'Dell', 'Asus']} 
        />
        <FilterSection 
          title="Precio" 
          options={['Hasta $500,000', '$500,000 a $2,000,000', 'Más de $2,000,000']} 
        />
        <FilterSection 
          title="Descuento" 
          options={['10% o más', '25% o más', '50% o más']} 
        />
        <FilterSection 
          title="Origen" 
          options={['Nacional', 'Importado']} 
        />
      </div>
    </aside>
  );
};
