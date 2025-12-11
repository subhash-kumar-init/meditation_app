import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo.jpg"
                        alt="Serenity Logo"
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/50 group-hover:ring-primary transition-all"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-dark">Serenity</h2>
                        <span className="text-xs text-gray-500 -mt-1">Meditation App</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 items-center">
                    <Link to="/" className="text-gray-700 hover:text-primary transition font-medium">Home</Link>
                    <Link to="/meditate" className="text-gray-700 hover:text-primary transition font-medium">Meditate</Link>
                    <Link to="/music" className="text-gray-700 hover:text-primary transition font-medium">Music</Link>
                    {token ? (
                        <>
                            <Link to="/dashboard" className="text-gray-700 hover:text-primary transition font-medium">Dashboard</Link>
                            <button
                                onClick={handleLogout}
                                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105"
                        >
                            Login
                        </Link>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-2xl text-dark">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="md:hidden bg-white border-t border-gray-200 py-4 px-6 space-y-3">
                    <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-primary transition font-medium">Home</Link>
                    <Link to="/meditate" onClick={toggleMenu} className="block text-gray-700 hover:text-primary transition font-medium">Meditate</Link>
                    <Link to="/music" onClick={toggleMenu} className="block text-gray-700 hover:text-primary transition font-medium">Music</Link>
                    {token ? (
                        <>
                            <Link to="/dashboard" onClick={toggleMenu} className="block text-gray-700 hover:text-primary transition font-medium">Dashboard</Link>
                            <button
                                onClick={() => { handleLogout(); toggleMenu(); }}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            onClick={toggleMenu}
                            className="block text-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold"
                        >
                            Login
                        </Link>
                    )}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
