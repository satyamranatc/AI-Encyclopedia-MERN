import React from 'react';
import { BookOpen, Brain, Search, Users, ArrowRight, Star, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI Encyclopedia</h1>
        <p className="text-lg mb-6">Your comprehensive guide to artificial intelligence and beyond</p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { count: '1000+', label: 'Subjects', icon: BookOpen },
            { count: '5000+', label: 'Topics', icon: Brain },
            { count: '10k+', label: 'Daily Users', icon: Users },
            { count: '24/7', label: 'AI Support', icon: Search }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-xl">
              <stat.icon className="mb-2" size={24} />
              <div className="text-2xl font-bold">{stat.count}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-3 gap-6">
        {[
          {
            title: 'Comprehensive Subjects',
            description: 'Explore subjects from Computer Science to Philosophy',
            icon: BookOpen
          },
          {
            title: 'AI-Powered Research',
            description: 'Advanced search and topic recommendations',
            icon: Brain
          },
          {
            title: 'Interactive Learning',
            description: 'Engage with dynamic content and quizzes',
            icon: Rocket
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <feature.icon className="text-blue-500 mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <button className="flex items-center text-blue-500 hover:text-blue-600">
              Learn more <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        ))}
      </div>

      {/* Popular Subjects */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular Subjects</h2>
          <button className="text-blue-500 hover:text-blue-600 flex items-center">
            View all <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Machine Learning', rating: '4.9', topics: '120+' },
            { name: 'Deep Learning', rating: '4.8', topics: '90+' },
            { name: 'Natural Language Processing', rating: '4.7', topics: '80+' },
            { name: 'Computer Vision', rating: '4.8', topics: '100+' }
          ].map((subject, index) => (
            <div key={index} className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
              <h3 className="font-semibold mb-2">{subject.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  {subject.rating}
                </span>
                <span>{subject.topics} topics</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}