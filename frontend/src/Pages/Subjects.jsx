import React, { useState,useEffect } from 'react';
import { Search, BookOpen } from 'lucide-react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function Subjects() {
    const [SubjectList, setSubjectList] = useState([]);

    useEffect(()=>{
        async function getSubjectList()
        {
            const response = await axios.get('http://localhost:5500/subjects');
            setSubjectList(response.data);
        }
        getSubjectList();
    },[])
    console.log(SubjectList)

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <h1 className="text-3xl font-bold mb-4">Subject List</h1>
                    <p className="text-lg mb-6">Do a Research on Any Subject You Want</p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search subjects..."
                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50"
                        />
                    </div>
                </div>
            </section>

            {/* Subjects Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SubjectList.map((subject) => (
                    <div key={subject._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                        <div className="relative h-48">
                            <img
                                src={subject.poster}
                                alt={subject.name}
                                className="w-full h-full object-cover"
                            />
                         
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                            <p className="text-gray-600 mb-4">{subject.desc}</p>
                            <Link to={`/subjects/${subject._id}/topics`}  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                <button>
                                    Explore Topics
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}