import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Rechercher une émission, une chaîne ou un utilisateur..."
        className="w-full pl-12 pr-4 py-3 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
}
