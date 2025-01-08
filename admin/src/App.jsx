import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2 } from "lucide-react";

export default function App() {
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState([]);
  
  useEffect(() => {
    async function getSubjects() {
      const SubjectResponse = await axios.get('http://localhost:5500/subjects');
      setSubjects(SubjectResponse.data);

    }
    async function getTopics() {
      const TopicsRes = await axios.get('http://localhost:5500/topics');
      console.log(TopicsRes);
      setTopics(TopicsRes.data);
    }
    getSubjects();
    getTopics();
  }, []);




  async function handleSubmit(e) {
    e.preventDefault();
    let name = e.target[0].value;
    let desc = e.target[1].value;
    let poster = e.target[2].value;
    
    let Res = await axios.post('http://localhost:5500/subjects', {name, desc, poster});
    e.target.reset();
  }



  async function handleDeleteSubject(id) 
  {
    console.log(id)
    await axios.delete('http://localhost:5500/subjects', {data: {id}}
    );
    console.log("Done Deletions...")
    
  }

  async function handleSubmitTopic(e)
  {
    e.preventDefault();
    let name = e.target[0].value;
    let desc = e.target[1].value;
    let poster = e.target[2].value;
    let SubjectId = e.target[3].value;

    console.log(SubjectId)
    
    let Res = await axios.post('http://localhost:5500/topics', {name, desc, poster,SubjectId});
    e.target.reset();
    console.log(Res)

  }


  return (

    <>
   
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h1 className="text-2xl font-bold mb-6">Add New Subject</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Subject Name"
            className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="Subject Description"
            className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="Subject Poster URL"
            className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          
          <button 
            type="submit"
            className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Subject
            <Plus size={20} />
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Current Subjects</h2>
        <div className="divide-y  bg-slate-300 rounded-md py-2 px-4 ">
          {subjects.map(subject => (
            <div key={subject._id} className="flex justify-between items-center py-4">
              <h2 className="font-medium">{subject.name}</h2>
              <button 
                onClick={() => handleDeleteSubject(subject._id)}
                className="text-red-500 hover:text-red-600 p-2"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

    <hr />

    <div>
      {/* Topics Form */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6">Add New Topic</h1>

          <form onSubmit={handleSubmitTopic} className="space-y-4">
            <input 
              type="text" 
              placeholder="Topic Name"
              className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <input 
              type="text" 
              placeholder="Topic Description"
              className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <input 
              type="text" 
              placeholder="Topic Poster"
              className="w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <select>
              {
                subjects.map(subject => (
                  <option key={subject._id} value={subject._id}>{subject.name}</option>
                ))
              }
            </select>
            <button 
              type="submit"
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >Add Topic</button>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Current Topics</h2>
        <div className="divide-y  bg-slate-300 rounded-md py-2 px-4 ">
          {topics.map(topic => (
            <div key={topic._id} className="flex justify-between items-center py-4">
              <h2 className="font-medium">{topic.name}</h2>
              <button 
                onClick={() => handleDeleteTopic(topic._id)}
                className="text-red-500 hover:text-red-600 p-2"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


    </>
  );
}