import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const quotes = [
        { text: "Meditation is not a way of making your mind quiet. It's a way of entering into the quiet that's already there.", author: "Deepak Chopra" },
        { text: "The thing about meditation is: You become more and more you.", author: "David Lynch" },
        { text: "Meditation is the tongue of the soul and the language of our spirit.", author: "Jeremy Taylor" },
        { text: "In meditation, I can let go of everything. I'm not Hugh Jackman. I'm not a dad. I'm not a husband. I'm just dipping into that powerful source that creates everything.", author: "Hugh Jackman" },
    ];

    const benefits = [
        { icon: '🧠', title: 'Mental Clarity', description: 'Improves focus, concentration, and decision-making abilities' },
        { icon: '❤️', title: 'Emotional Balance', description: 'Reduces stress, anxiety, and promotes emotional well-being' },
        { icon: '💪', title: 'Physical Health', description: 'Lowers blood pressure, improves sleep, and boosts immunity' },
        { icon: '🌟', title: 'Self-Awareness', description: 'Enhances understanding of yourself and your surroundings' },
        { icon: '😊', title: 'Happiness', description: 'Increases positive emotions and overall life satisfaction' },
        { icon: '🎯', title: 'Better Focus', description: 'Strengthens attention span and cognitive performance' },
    ];

    const types = [
        { name: 'Mindfulness Meditation', desc: 'Focus on the present moment without judgment' },
        { name: 'Transcendental Meditation', desc: 'Use mantras to achieve deep relaxation' },
        { name: 'Loving-Kindness Meditation', desc: 'Cultivate compassion for yourself and others' },
        { name: 'Body Scan Meditation', desc: 'Progressive relaxation of different body parts' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                    <source src="/assets/videos/Sunrise.webm" type="video/webm" />
                    <source src="/assets/videos/Sunrise.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 -z-10"></div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Find Your Inner Peace
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl md:text-2xl mb-8 max-w-2xl"
                    >
                        Calm your mind, relax your body, and live in the moment.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <Link to="/register" className="bg-primary text-dark px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105">
                            Start Your Journey
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* What is Meditation Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-8 text-dark">What is Meditation?</h2>
                    <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6">
                        <p className="text-lg">
                            Meditation is an ancient practice that trains your mind to focus and redirect your thoughts.
                            It's a technique used to develop awareness of the present moment and achieve a mentally clear
                            and emotionally calm state.
                        </p>
                        <p className="text-lg">
                            The practice has been around for thousands of years, with roots in various religious and
                            spiritual traditions. Today, meditation is widely practiced for its numerous health benefits,
                            including stress reduction, improved concentration, and enhanced overall well-being.
                        </p>
                        <p className="text-lg">
                            Whether you're seeking inner peace, better health, or spiritual growth, meditation offers
                            a path to transform your mind and life. It requires no special equipment—just a quiet space
                            and a few minutes of your time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-dark">Benefits of Meditation</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Discover how regular meditation practice can transform your life
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-dark mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types of Meditation */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-dark">Types of Meditation</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {types.map((type, index) => (
                            <div key={index} className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border-l-4 border-primary">
                                <h3 className="text-xl font-bold text-dark mb-2">{type.name}</h3>
                                <p className="text-gray-600">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quotes Section */}
            <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-dark">Words of Wisdom</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {quotes.map((quote, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl shadow-lg p-8"
                            >
                                <p className="text-lg italic text-gray-700 mb-4">"{quote.text}"</p>
                                <p className="text-right font-semibold text-primary">— {quote.author}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Start Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-dark">How to Get Started</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">1️⃣</span>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Find a Quiet Space</h3>
                            <p className="text-gray-600">Choose a peaceful environment free from distractions</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">2️⃣</span>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Set a Time</h3>
                            <p className="text-gray-600">Start with just 5-10 minutes daily and build gradually</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">3️⃣</span>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Be Consistent</h3>
                            <p className="text-gray-600">Practice daily to experience the full benefits</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of people who have discovered the power of meditation.
                        Start your journey to inner peace today.
                    </p>
                    <Link to="/register" className="bg-white text-dark px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition transform hover:scale-105 inline-block">
                        Get Started Free
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
