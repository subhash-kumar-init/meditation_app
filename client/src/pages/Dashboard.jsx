import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [breathCount, setBreathCount] = useState(0);
    const [isBreathing, setIsBreathing] = useState(false);
    const [currentFact, setCurrentFact] = useState(0);

    const meditationFacts = [
        "🧘 Meditation can reduce stress by up to 40% in just 8 weeks of regular practice.",
        "🧠 Regular meditation increases gray matter in the brain, improving memory and learning.",
        "❤️ Meditation lowers blood pressure and reduces the risk of heart disease.",
        "😴 People who meditate fall asleep 50% faster than those who don't.",
        "🎯 Just 10 minutes of daily meditation can improve focus and concentration.",
        "🌟 Meditation boosts the immune system by increasing antibody production.",
        "😊 Regular meditators report 30% higher levels of happiness and life satisfaction.",
        "🧬 Meditation can slow down cellular aging by protecting telomeres in DNA.",
    ];

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }

        const factInterval = setInterval(() => {
            setCurrentFact((prev) => (prev + 1) % meditationFacts.length);
        }, 10000);

        return () => clearInterval(factInterval);
    }, []);

    const startBreathingExercise = () => {
        setIsBreathing(true);
        setBreathCount(0);
    };

    const handleBreath = () => {
        setBreathCount(prev => prev + 1);
        if (breathCount + 1 >= 10) {
            setIsBreathing(false);
            alert('🎉 Congratulations! You completed 10 breaths. You earned a mindfulness badge!');
        }
    };

    return (
        <div className="min-h-screen relative">
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: 'url(/backgrounds/galaxy.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container mx-auto px-6 py-10 relative z-10">
                <h1 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
                    Welcome, {user?.username || 'Meditator'}! 🧘
                </h1>

                <div className="max-w-4xl mx-auto mb-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-dark mb-3 text-center">💡 Meditation Fun Fact</h3>
                    <p className="text-lg text-gray-700 text-center italic">{meditationFacts[currentFact]}</p>
                    <div className="flex justify-center gap-2 mt-4">
                        {meditationFacts.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentFact ? 'bg-primary' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-4xl mb-3">🎯</div>
                        <h3 className="text-2xl font-bold text-dark mb-2">0</h3>
                        <p className="text-gray-600">Sessions Completed</p>
                    </div>
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-4xl mb-3">⏱️</div>
                        <h3 className="text-2xl font-bold text-dark mb-2">0 min</h3>
                        <p className="text-gray-600">Total Time</p>
                    </div>
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center">
                        <div className="text-4xl mb-3">🔥</div>
                        <h3 className="text-2xl font-bold text-dark mb-2">0 days</h3>
                        <p className="text-gray-600">Current Streak</p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8">
                    <h2 className="text-3xl font-bold text-dark mb-4 text-center">🌬️ Breathing Exercise</h2>
                    <p className="text-gray-600 text-center mb-6">
                        Complete 10 mindful breaths to earn a badge!
                    </p>

                    {!isBreathing ? (
                        <button
                            onClick={startBreathingExercise}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-xl transition transform hover:scale-105"
                        >
                            Start Breathing Exercise
                        </button>
                    ) : (
                        <div className="text-center">
                            <div className="mb-6">
                                <div className="text-6xl mb-4 animate-pulse">🫁</div>
                                <p className="text-2xl font-bold text-dark mb-2">Breath Count: {breathCount}/10</p>
                                <p className="text-gray-600">Click the button with each breath</p>
                            </div>
                            <button
                                onClick={handleBreath}
                                className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition transform hover:scale-110 text-xl"
                            >
                                Breathe In & Out
                            </button>
                            <div className="mt-4">
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className="bg-gradient-to-r from-primary to-secondary h-4 rounded-full transition-all duration-300"
                                        style={{ width: `${(breathCount / 10) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <Link
                        to="/meditate"
                        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
                    >
                        <div className="text-5xl mb-3">🧘‍♀️</div>
                        <h3 className="text-xl font-bold text-dark mb-2">Start Meditation</h3>
                        <p className="text-gray-600">Begin your mindfulness journey</p>
                    </Link>
                    <Link
                        to="/music"
                        className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
                    >
                        <div className="text-5xl mb-3">🎵</div>
                        <h3 className="text-xl font-bold text-dark mb-2">Relaxing Music</h3>
                        <p className="text-gray-600">Listen to calming sounds</p>
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto mt-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-dark mb-4">🏆 Achievements</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-gray-100 rounded-lg opacity-50">
                            <div className="text-4xl mb-2">🥇</div>
                            <p className="text-sm font-semibold text-gray-600">First Session</p>
                        </div>
                        <div className="text-center p-4 bg-gray-100 rounded-lg opacity-50">
                            <div className="text-4xl mb-2">🔥</div>
                            <p className="text-sm font-semibold text-gray-600">7 Day Streak</p>
                        </div>
                        <div className="text-center p-4 bg-gray-100 rounded-lg opacity-50">
                            <div className="text-4xl mb-2">⏱️</div>
                            <p className="text-sm font-semibold text-gray-600">100 Minutes</p>
                        </div>
                        <div className="text-center p-4 bg-gray-100 rounded-lg opacity-50">
                            <div className="text-4xl mb-2">🌟</div>
                            <p className="text-sm font-semibold text-gray-600">Zen Master</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
