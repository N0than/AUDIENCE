import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BarChart2, Italic as Crystal, Users, Trophy, Settings, HelpCircle } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Accueil', path: '/' },
  { icon: BarChart2, label: 'Classements', path: '/rankings' },
  { icon: Crystal, label: 'Mes Pronostics', path: '/predictions' }, // Changed label to "Mes Pronostics"
  { icon: Users, label: 'Communauté', path: '/community' },
  { icon: Trophy, label: 'Classement Joueurs', path: '/leaderboard' },
  { icon: Settings, label: 'Paramètres', path: '/settings' },
  { icon: HelpCircle, label: 'Aide', path: '/help' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-gray-100 p-4 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-center mb-8">
        <Link to="/">
          <img
            src="https://i.ibb.co/LXvXDJX1/logo.png"
            alt="Audience Masters"
            style={{ width: '150px', height: '150px', objectFit: 'contain' }} // Set exact size
          />
        </Link>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
