import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Meditate from './pages/Meditate';
import Music from './pages/Music';

function App() {
    return (
        <Router>
            <div className="font-sans text-gray-800">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/meditate" element={<ProtectedRoute><Meditate /></ProtectedRoute>} />
                    <Route path="/music" element={<ProtectedRoute><Music /></ProtectedRoute>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
