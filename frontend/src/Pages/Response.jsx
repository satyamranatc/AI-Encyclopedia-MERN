import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Send, RefreshCw } from 'lucide-react';
import AskAi from "../Utils/AskAi.js";

export default function Response() {
    const [Result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { TopicName } = useParams();

    useEffect(() => {
        async function AskData()
        {

                let Ans = await AskAi(`Explain ${TopicName} In a Very Layman Language in 300 Words`);
                setResult(Ans);
                setIsLoading(false);

        }
        AskData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        let Question = e.target[0].value;
        let Ans = await AskAi(Question + `in Context Of ${Result}, Explain In a Very Layman Language in 300 Words`);
        setResult(Ans);

        setIsLoading(false);
        e.target.reset();
    }


    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-8">
                <h1 className="text-3xl font-bold">Explaining {TopicName}</h1>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="min-h-[400px] mb-6">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <RefreshCw className="animate-spin text-blue-500" size={24} />
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h2 className="text-sm text-gray-500 mb-3">AI Response:</h2>
                            <p className="text-gray-800 leading-relaxed">{Result}</p>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="relative">
                    <input 
                        type="text" 
                        placeholder="Ask any further questions..." 
                        className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                    <button 
                        type="submit" 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}