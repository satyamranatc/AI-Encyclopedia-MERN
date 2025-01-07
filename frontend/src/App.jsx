import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Home from './Pages/Home';
import Subjects from './Pages/Subjects.jsx';
import Topics from './Pages/Topics.jsx';
import Response from './Pages/Response.jsx';
import NotFound from './Pages/NotFound.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="flex">
          <SideBar />
          <main className="flex-1 p-8 ml-64 mt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/subjects/:id/topics" element={<Topics />} />
              <Route path="/Response/:TopicName" element={<Response />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;