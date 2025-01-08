import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

import { BookOpen, ChevronRight, Search } from 'lucide-react';

export default function Topics() {
    const { id } = useParams();

    let [TopicList, setTopicList] = useState([]);

    const [selectedSubjectTopic, setselectedSubjectTopic] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        async function getTopicList()
        {
            let TopicResponse = await axios.post(`http://localhost:5500/topicsById`,{
                SubjectId: id
            });
            setTopicList(TopicResponse.data);
            setselectedSubjectTopic(TopicResponse.data);
            console.log(TopicResponse);
        }
        getTopicList();

    },[])

    return (
        <div className="max-w-7xl mx-auto">
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
                <h1 className="text-3xl font-bold mb-4">Available Topics</h1>
                <div className="relative max-w-xl">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search topics..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50"
                    />
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedSubjectTopic.map(topic => (
                    <div 
                        key={topic.id} 
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 hover:border-blue-500"
                    >
                        <div className="flex items-start justify-between">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <BookOpen className="text-blue-500" size={24} />
                            </div>
                            <button className="text-gray-400 hover:text-blue-500 transition-colors">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                        
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold mb-2">{topic.name}</h2>
                            <p className="text-gray-600 mb-4">{topic.desc}</p>
                            
                            <div className="flex justify-between items-center">
                                <button className="text-blue-500 hover:text-blue-600 font-medium">
                                    <Link to={`/Response/${topic.name}`} >Start Learning</Link>
                                </button>
                                <span className="text-sm text-gray-500">
                                    Topic {topic.id}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}