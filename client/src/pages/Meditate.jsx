import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

const Meditate = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const audioRef = useRef(null);
    const videoRef = useRef(null);

    const yogaAsanas = [
        { name: 'Lotus Pose (Padmasana)', emoji: '🧘‍♀️', benefits: 'Calms the mind, improves posture' },
        { name: 'Tree Pose (Vrikshasana)', emoji: '🌳', benefits: 'Improves balance and focus' },
        { name: 'Child Pose (Balasana)', emoji: '🙇', benefits: 'Relieves stress and fatigue' },
        { name: 'Downward Dog (Adho Mukha)', emoji: '🐕', benefits: 'Energizes the body' },
        { name: 'Warrior Pose (Virabhadrasana)', emoji: '⚔️', benefits: 'Builds strength and stamina' },
        { name: 'Corpse Pose (Shavasana)', emoji: '😌', benefits: 'Deep relaxation' },
    ];

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            videoRef.current.pause();
        } else {
            audioRef.current.play();
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const stopSession = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        videoRef.current.pause();
        setIsPlaying(false);
        setTimeLeft(600);
    };

    useEffect(() => {
        let interval = null;
        if (isPlaying && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsPlaying(false);
            audioRef.current.pause();
            videoRef.current.pause();
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeLeft]);

    return (
        <div className="min-h-screen">
            {/* Meditation Timer Section */}
            <div className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
                <video ref={videoRef} loop className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                    <source src="/assets/videos/vid4.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

                <h1 className="text-4xl font-bold mb-4">Guided Meditation</h1>
                <p className="text-xl mb-8">Relax your mind and follow the guidance.</p>

                <div className="text-6xl font-mono mb-8">{formatTime(timeLeft)}</div>

                <div className="flex gap-6">
                    <button onClick={togglePlay} className="bg-white text-dark p-4 rounded-full text-2xl hover:bg-opacity-90 transition">
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button onClick={stopSession} className="bg-red-500 text-white p-4 rounded-full text-2xl hover:bg-opacity-90 transition">
                        <FaStop />
                    </button>
                </div>

                <audio ref={audioRef} src="/assets/audio/meditation1.mp3" loop />
            </div>

            {/* Yoga Asanas Section */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-dark">Yoga Asanas for Meditation</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Enhance your meditation practice with these powerful yoga poses
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {yogaAsanas.map((asana, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
                            >
                                <div className="text-6xl text-center mb-4">{asana.emoji}</div>
                                <h3 className="text-xl font-bold text-dark mb-2 text-center">{asana.name}</h3>
                                <p className="text-gray-600 text-center">{asana.benefits}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tips Section */}
                    <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-dark mb-6 text-center">Meditation Tips</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <span className="text-3xl">🕐</span>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Best Time</h4>
                                    <p className="text-gray-600 text-sm">Early morning or before bed for maximum benefits</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-3xl">🪑</span>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Comfortable Position</h4>
                                    <p className="text-gray-600 text-sm">Sit in a comfortable position with spine straight</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-3xl">🌬️</span>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Focus on Breath</h4>
                                    <p className="text-gray-600 text-sm">Pay attention to your natural breathing rhythm</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-3xl">🔕</span>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Quiet Space</h4>
                                    <p className="text-gray-600 text-sm">Find a peaceful environment free from distractions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meditate;
