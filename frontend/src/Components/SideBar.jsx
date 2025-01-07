import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BookOpen, Info } from 'lucide-react';

export default function SideBar() {
  return (
    <div className="fixed left-0 top-16 h-full w-64 bg-white border-r p-6 space-y-4">
      <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2">
        <HomeIcon size={20} />
        <span>Home</span>
      </Link>
      <Link to="/subjects" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2">
        <BookOpen size={20} />
        <span>Subjects</span>
      </Link>
      <Link to="/about" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 py-2">
        <Info size={20} />
        <span>About</span>
      </Link>
    </div>
  );
}