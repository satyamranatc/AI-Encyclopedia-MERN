import React from 'react';
import { MessageCircleIcon, BellIcon, User } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full h-16 bg-white border-b shadow-sm px-6 flex justify-between items-center z-10">
      <h2 className="text-xl font-semibold text-gray-800">The AI Encyclopedia</h2>
      <ul className="flex items-center gap-6">
        <li>
          <MessageCircleIcon className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
        </li>
        <li>
          <BellIcon className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
        </li>
        <li>
          <User className="text-gray-600 hover:text-gray-900 cursor-pointer" size={24} />
        </li>
      </ul>
    </nav>
  );
}